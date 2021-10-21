import React, {useState} from "react";
import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {createUser, showCreateUserForm} from "../redux/action/create_user";
import {FormComponentProps} from "antd/lib/form";
import {Button, DatePicker, Form, Input, Modal, Select} from "antd";
import {checkExistEmail, checkExistPhone, checkExistUsername} from "../redux/service/apis";
import {CreateUserParams} from "../redux/models";
import moment from "moment";

const mapStateToProps = (rootState: RootState) => ({
  createState: rootState.user.createState,
  authState: rootState.auth.auth,
});

const conn = connect(mapStateToProps, {createUser, showCreateUserForm});

type ReduxProps = ConnectedProps<typeof conn>;

interface IProps extends ReduxProps, FormComponentProps {
}

const {Option} = Select;

function CreateUserForm(props: IProps) {
  const formItemLayout = {
    labelCol: {
      xs: {span: 24},
      sm: {span: 8},
    },
    wrapperCol: {
      xs: {span: 24},
      sm: {span: 16},
    },
  };

  const {getFieldDecorator, resetFields} = props.form;

  const [dateValue, setDateValue] = useState('');



  const validateUsername = (rule: any, value: any, callback: any) => {
    if(value.length === 0){
      callback();
    }else {
      if (/^[a-z0-9]+$/i.test(value)) {
        checkExistUsername(value).then(rs => {
          if (rs.code === 0) {
            callback();
          } else {
            callback('Tên tài khoản đã tồn tại');
          }
        }).catch(() => {
          callback("Xảy ra lỗi");
        });
      }else {
        callback("Tên tài khoản không hợp lệ");
      }
    }
  }

  const validateName = (rule: any, value: any, callback: any) => {
    if(value.length === 0 ){
      callback();
    }else {
      if (/[`~,.<>;':"/!@#$%^&*?<>[\]|{}()=_+-]/.test(value)) {
        callback("Họ và tên người dùng không phù hợp");
      }else {
        callback()
      }
    }
  }

  const validatePassword = (rule: any, value: any, callback: any) => {
    if(value.length === 0){
      callback();
    }else {
      if (value.length < 6 || value > 18) {
        callback("Mật khẩu có độ dài từ 6 đến 18 kí tự");
      }else {
        callback();
      }
    }
  }

  const validateEmail = (rule: any, value: any, callback: any) => {
    if(value.length === 0){
      callback();
    }else {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
        checkExistEmail(value).then(rs => {
          if (rs.code === 0) {
            callback();
          } else {
            callback('Email đã tồn tại');
          }
        }).catch(function (e) {
          callback("Xảy ra lỗi");
        });
      }else {
        callback("Email không hợp lệ");
      }
    }
  }

  const validatePhone = (rule: any, value: any, callback: any) => {
    if(value.length === 0){
      callback();
    }else {
      if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)) {
        checkExistPhone(value).then(rs => {
          if (rs.code === 0) {
            callback();
          } else {
            callback('Số điện thoại đã tồn tại');
          }
        }).catch(function (e) {
          callback("Xảy ra lỗi");
        });
      }else {
        callback("Số điện thoại không hợp lệ");
      }
    }
  }

  const onCreateUserClicked = (e: any) => {
    e.preventDefault();
    let role: number;
    switch ( props.authState.data?.role){
      case 0:
        role = 1;
        break;
      case 1:
        role = 2;
        break;
      default:
        role = -1;
    }
    props.form.validateFields((err, values) => {
      if (!err) {
          let param: CreateUserParams = {
            username: values.username_create,
            password: values.password_create,
            fullName: values.name_create,
            email: values.email_create,
            phoneNumber: values.phone_create,
            dateOfBirth: dateValue,
            role: role
          }
          props.createUser(param);
      }
    });
  }

  const onBtnCancelClicked = () => {
    resetFields();
    props.showCreateUserForm(false);
  }

  const onChangeDate = (date: any, dateString: string) => {
    setDateValue(dateString);
  }

  return (
    <Modal zIndex={2}
           maskClosable={false}
           title={"Thêm mới người dùng"}
           visible={props.createState.show}
           centered={true}
           width="550px"
           onCancel={() => {
             resetFields();
             props.showCreateUserForm(false);
           }}
           afterClose={() => {
             resetFields();
           }}
           footer={""}>
      <Form {...formItemLayout}>
        <Form.Item label="Tài khoản" className="group-area">
          {getFieldDecorator('username_create', {
            initialValue: '',
            rules: [
              {required:true, message:"Vui lòng nhập tên tài khoản"},
              {validator: validateUsername}
            ],
          })(<Input placeholder="Tài khoản"/>)}
        </Form.Item>
        <Form.Item label="Mật khẩu" className="group-area">
          {getFieldDecorator('password_create', {
            initialValue: '',
            rules: [
              {required:true, message:"Vui lòng nhập mật khẩu"},
              {validator: validatePassword}
            ],
          })(<Input.Password  placeholder="Password" />)}
        </Form.Item>
        <Form.Item label="Họ và tên" className="group-area">
          {getFieldDecorator('name_create', {
            initialValue: '',
            rules: [
              {required:true, message:"Vui lòng nhập họ và tên"},
              {validator: validateName}
            ],
          })(<Input placeholder="Họ và tên"/>)}
        </Form.Item>
        <Form.Item label="Email" className="group-area">
          {getFieldDecorator('email_create', {
            initialValue: '',
            rules: [
              {required:true, message:"Vui lòng nhập email"},
              {validator: validateEmail}
            ],
          })(<Input placeholder="Email"/>)}
        </Form.Item>
        <Form.Item label="Số điện thoại" className="group-area">
          {getFieldDecorator('phone_create', {
            initialValue: '',
            rules: [
              {required:true, message:"Vui lòng nhập số điện thoại"},
              {validator: validatePhone}
            ],
          })(<Input  placeholder="Số điện thoại"/>)}
        </Form.Item>
        <Form.Item label="Ngày sinh" className="group-area">
          {getFieldDecorator('dateOfBirth_create', {
            initialValue: moment(),
            rules: [
              {required:true, message:"Vui lòng chọn ngày sinh"},
            ],
          })(<DatePicker placeholder={"Vui lòng chọn ngày"} format={"DD/MM/yyyy"} onChange={onChangeDate} />)}
        </Form.Item>
        <hr style={{borderTop: '1px'}}/>
        <Button className="mr-3 create-btn" htmlType="submit" onClick={onCreateUserClicked}>
          Lưu
        </Button>
        <Button type="default" className="mr-3" onClick={onBtnCancelClicked}>
          Hủy
        </Button>
      </Form>
    </Modal>
  )
}

export default conn(Form.create<IProps>()(CreateUserForm));
