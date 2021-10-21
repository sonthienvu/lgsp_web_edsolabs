import React from "react";
import env from "../../../configs/env";
import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {getAllGroupRestApi} from "../redux/actions/get_group_rest_api";
import {useEffect, useState} from "react";
import {Button, Icon, Table} from "antd";
import {GetGroupRestApiParams} from "../redux/models";
import {ColumnProps} from "antd/lib/table";
import Loading from "../../../components/Loading";
import {Link, Redirect} from 'react-router-dom';


const size = env.pageSize;

const mapState = (rootState: RootState) => ({
  auth: rootState.auth.auth,
  getGroupRestApiState: rootState.groupRestApi.getState
})

const connector = connect(mapState, {getAllGroupRestApi});

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux {
}

function DataTable({getGroupRestApiState, getAllGroupRestApi}: IProps){

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
      ...getGroupRestApiState.params,
      page: page - 1,
      size: size
    }
    getAllGroupRestApi(params);
  }, [page, getGroupRestApiState.flag_reload]);


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
      title: 'Tên nhóm',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Đường dẫn',
      dataIndex: 'context',
      width: 100,
    },
    {
      title: 'Phiên bản',
      dataIndex: 'version',
      width: 70,
    },
    {
      title: 'Chính sách',
      dataIndex: 'policies',
      width: 150,
      render: (values: string[]) =>{
        return values.join(", ");
      }
    },
    {
      title: 'Endpoint',
      dataIndex: 'production_endpoint_url',
      width: 200,
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
          case "CREATED":
            return "Khởi tạo";
          case "PUBLISHED":
            return "Phát hành";
          case "INACTIVE":
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
            <Link to={`group-rest-api-detail/${record.id}`}>
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
        dataSource={getGroupRestApiState.rows}
        columns={columns}
        rowKey="name"
        pagination={{
          current: page,
          pageSize: size,
          total: getGroupRestApiState.total,
          onChange: page => setPage(page),
          showTotal: (total, range) => `Đang xem ${range[0]} đến ${range[1]} trong tổng số ${total} mục`,
        }}
      />
      {getGroupRestApiState.loading ? <Loading/> : null}
    </>
  )
}

export default connector(DataTable);
