import {RootState} from "../../../redux/reducers";
import env from "../../../configs/env";
import {connect, ConnectedProps} from "react-redux";
import React, {useEffect, useState} from "react";
import {getAllUsers} from "../redux/action/get_users";
import {GetUserParams, UserEntity} from "../redux/models";
import {ColumnProps} from "antd/lib/table";
import {Button, Icon, Table} from "antd";
import Loading from "../../../components/Loading";
import UpdateUserForm from "./UpdateUserForm";
import {showUpdateUserForm} from "../redux/action/update_user";
import DeleteUserConfirm from "./DeleteUserConfirm";
import {clickDeleteUserButton} from "../redux/action/delete_user";
import CreateUserForm from "./CreateUserForm";

const size = env.pageSize;

const mapState = (rootState: RootState) => ({
  auth: rootState.auth.auth,
  getUserState: rootState.user.getState
});
const connector = connect(mapState, {getAllUsers, showUpdateUserForm, clickDeleteUserButton});
type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux {
}

function DataTable({getUserState, getAllUsers, showUpdateUserForm, clickDeleteUserButton} : IProps){
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
    let params: GetUserParams = {
      ...getUserState.params,
      page: page - 1,
      size: size
    }
    getAllUsers(params);
  }, [page, getUserState.flag_reload]);

  const handleEdit = (e: any, record: any) => {
    let originData : UserEntity = {
      username: record.username,
      fullName: record.fullName,
      email: record.email,
      phone: record.phoneNumber,
      dateOfBirth: record.dateOfBirth,
      roleCode: record.role,
    }
    showUpdateUserForm(true, originData);
  }
  const handleDelete = (e: any, record: any) => {
    clickDeleteUserButton(record.username);
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
      title: 'Tên tài khoản',
      dataIndex: 'username',
      width: 100,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      width: 180,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      width: 100,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 150,
      render: (status: number) =>{
        switch (status) {
          case 1:
            return(
              <>
                <span className="ant-badge-status-dot ant-badge-status-success"></span>
                <span className="ant-badge-status-text">Đang hoạt động</span>
              </>
            )
          case 2:
            return(
              <>
                <span className="ant-badge-status-dot ant-badge-status-error"></span>
                <span className="ant-badge-status-text">Dừng hoạt động</span>
              </>
            )
          default:
            return (
              <></>
            )
        }
      }
    },
    {
      title: () => {
        return <div style={{ whiteSpace: 'nowrap' }}>Thao tác</div>;
      },
      dataIndex: 'action',
      width: 150,
      fixed: 'right',
      render: (text: string, record: any) => {
        return(
          <div>
            <Button size="small" className="ant-btn ml-1 mr-1 ant-btn-sm" onClick={event => handleEdit(event, record)}>
              <Icon type="edit"/>
            </Button>
            <Button size="small" className="ant-btn ml-1 mr-1 ant-btn-sm" onClick={event => handleDelete(event, record)}>
              <Icon type="delete"/>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        className="custom-table"
        scroll={scroll}
        dataSource={getUserState.rows}
        columns={columns}
        rowKey="username"
        pagination={{
          current: page,
          pageSize: size,
          total: getUserState.total,
          onChange: page => setPage(page),
          showTotal: (total, range) => `Đang xem ${range[0]} đến ${range[1]} trong tổng số ${total} mục`,
        }}
      />
      <CreateUserForm/>
      <UpdateUserForm/>
      <DeleteUserConfirm/>
      {getUserState.loading ? <Loading/> : null}
    </>
  )
}

export default connector(DataTable);
