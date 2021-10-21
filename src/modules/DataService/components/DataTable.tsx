import env from "../../../configs/env";
import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {getAllDataService} from "../redux/actions/get_data_services";
import React, {useEffect, useState} from "react";
import {GetGroupRestApiParams} from "../../GroupRestApi/redux/models";
import {ColumnProps} from "antd/lib/table";
import {Link} from "react-router-dom";
import {Button, Icon, Table} from "antd";
import Loading from "../../../components/Loading";

const size = env.pageSize;

const mapState = (rootState: RootState) => ({
  auth: rootState.auth.auth,
  getDataServiceState: rootState.dataService.getState
})

const connector = connect(mapState, {getAllDataService});

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
}

function DataTable({getDataServiceState, getAllDataService}: IProps) {

  let screenWidth = document.documentElement.clientWidth;
  const [scroll, setScroll] = useState<any>(screenWidth < env.desktopWidth ? {x: 'fit-content'} : {x: false});
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    function updateSize() {
      if (document.documentElement.clientWidth < env.desktopWidth) setScroll({x: 'fit-content'})
      else setScroll({x: false})
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    let params: GetGroupRestApiParams = {
      ...getDataServiceState.params,
      page: page - 1,
      size: size
    }
    getAllDataService(params);
  }, [page, getDataServiceState.flag_reload]);


  const handleEdit = (e: any, record: any) => {

  }

  const handleDelete = (e: any, record: any) => {
  }

  const columns: ColumnProps<any>[] = [
    {
      title: 'STT',
      dataIndex: 'index',
      width: 50,
      render: (index: number) => {
        return index+1;
      }
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      width: 100,
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'date',
      width: 100,
      render: (value: number) => {
        let d = value.toString();
        let date = d.substr(6,2) + "/" + d.substr(4,2) + "/" + d.substr(0,4)
        return date;
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 100,
      render: (values: string) =>{
        switch (values) {
          case "available":
            return "Đang hoạt động";
          case "unavailable":
            return "Ngừng hoạt động";
          default:
            return "Không xác định";
        }
      }
    },
    {
      title: () => {
        return <div style={{whiteSpace: 'nowrap'}}>Thao tác</div>;
      },
      dataIndex: 'action',
      width: 150,
      fixed: 'right',
      render: (_text: string, record: any) => {
        return (
          <div style={{whiteSpace: 'nowrap'}}>
            <Link to={`data-service-detail/${record.id}`}>
              <Button size="small" className="ant-btn ml-1 mr-1 ant-btn-sm">
                <Icon type="info"/>
              </Button>
            </Link>
            <Button size="small" className="ant-btn ml-1 mr-1 ant-btn-sm" onClick={event => handleEdit(event, record)}>
              <Icon type="edit"/>
            </Button>
            <Button size="small" className="ant-btn ml-1 mr-1 ant-btn-sm"
                    onClick={event => handleDelete(event, record)}>
              <Icon type="delete"/>
            </Button>
          </div>
        );
      },
    }
  ]
  return (
    <>
      <Table
        className="custom-table"
        scroll={scroll}
        dataSource={getDataServiceState.rows}
        columns={columns}
        rowKey="name"
        pagination={{
          current: page,
          pageSize: size,
          total: getDataServiceState.total,
          onChange: page => setPage(page),
          showTotal: (total, range) => `Đang xem ${range[0]} đến ${range[1]} trong tổng số ${total} mục`,
        }}
      />
      {getDataServiceState.loading ? <Loading/> : null}
    </>
  )
}

export default connector(DataTable);
