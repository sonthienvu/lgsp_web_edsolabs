import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {FormComponentProps} from "antd/lib/form";
import {Button, DatePicker, Form, Input, Modal, Select} from "antd";
import React, {useEffect, useState} from "react";
import {checkExistEmail, checkExistPhone} from "../redux/service/apis";
import {showUpdateUserForm, updateUser} from "../redux/action/update_user";
import {CreateUserParams} from "../redux/models";
import moment from "moment";


const mapStateToProps = (rootState: RootState) => ({
  updateState: rootState.user.updateState
});

const conn = connect(mapStateToProps, {showUpdateUserForm, updateUser});

type ReduxProps = ConnectedProps<typeof conn>;

interface IProps extends ReduxProps, FormComponentProps {
}

const {Option} = Select;

function UpdateUserForm(props : IProps){

  const {getFieldDecorator, resetFields} = props.form;
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

  // const initRole = {
  //   code : "",
  //   name: ""
  // }
  // const [role, setRole] = useState(initRole);
  const [dateValue, setDateValue] = useState<string>('');


//  useEffect(() => {
    // getAllRoles().then(rs => {
    //   let optionList = rs.rows.map((item: any) => {
    //     return <Option key={item.code} value={item.code}>{item.name}</Option>
    //   });
    //   setOptions(optionList);
    // }).catch(() => {
    //   NotificationError("Lỗi", "Xảy ra lỗi hệ thống");
    // });
//  }, []);

  useEffect(() => {
    const d = new Date();
    setDateValue(props.updateState.originData?.dateOfBirth || d.getDate + "/" + d.getMonth() + "/" + d.getFullYear());
  }, [props.updateState.show === true]);

  const validateName = (rule: any, value: any, callback: any) => {
    if(value.length === 0 ){
      callback();
    }else {
      if (/[`~,.<>;':"/!@#$%^&*?<>[\]|{}()=_+-]/.test(value)) {
        callback("Họ và tên người dùng không phù hợp");
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
            if(value === props.updateState.originData?.email){
              callback();
            }else {
              callback('Email đã tồn tại');
            }
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
    if(value.length === 0 ){
      callback();
    }else {
      if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)) {
        checkExistPhone(value).then(rs => {
          if (rs.code === 0) {
            callback();
          } else {
            if(value === props.updateState.originData?.phone){
              callback();
            }else {
              callback('Số điện thoại đã tồn tại');
            }
          }
        }).catch(function (e) {
          callback("Xảy ra lỗi");
        });
      }else {
        callback("Số điện thoại không hợp lệ");
      }
    }
  }

  const onUpdateUserClicked = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let param: CreateUserParams = {
          username: values.username_update,
          fullName: values.name_update,
          email: values.email_update,
          phoneNumber: values.phone_update,
          dateOfBirth: dateValue,
        }
        props.updateUser(param);
        // setRole(initRole);
      }
    });
  }

  const onBtnCancelClicked = () => {
    resetFields();
    props.showUpdateUserForm(false);
  }

  const onChangeDate = (date: any, dateString: string) => {
    console.log(dateString);
    setDateValue(dateString);
  }

  const handleChange = (value: any) => {
    const r = {
      code: value.key,
      name: value.label
    }
    // setRole(r);
  }

  return(
    <Modal zIndex={2} maskClosable={false}
          title={"Cập nhật người dùng"}
           visible={props.updateState.show}
           centered={true} width="550px"
           onCancel={() => {
             resetFields();
             props.showUpdateUserForm(false);
           }}
           afterClose={() => {
             resetFields();
           }}
           footer={""}>
      <Form {...formItemLayout}>

        <Form.Item label="Tên tài khoản" className="group-area">
          {getFieldDecorator('username_update',{
            initialValue : props.updateState.originData?.username || '',
          })(<Input disabled/>)}
        </Form.Item>
        <Form.Item label="Họ và tên" className="group-area">
          {getFieldDecorator('name_update', {
            initialValue: props.updateState.originData?.fullName || '',
            rules: [
              {required:true, message:"Vui lòng nhập tên họ và tên"},
              {validator: validateName}
            ],
          })(<Input placeholder="Họ và tên"/>)}
        </Form.Item>
        <Form.Item label="Email" className="group-area">
          {getFieldDecorator('email_update', {
            initialValue: props.updateState.originData?.email || '',
            rules: [
              {required:true, message:"Vui lòng nhập email"},
              {validator: validateEmail}
            ],
          })(<Input placeholder="Email"/>)}
        </Form.Item>
        <Form.Item label="Số điện thoại_update" className="group-area">
          {getFieldDecorator('phone', {
            initialValue: props.updateState.originData?.phone || '',
            rules: [
              {required:true, message:"Vui lòng nhập số điện thoại"},
              {validator: validatePhone}
            ],
          })(<Input  placeholder="Số điện thoại"/>)}
        </Form.Item>
        <Form.Item label="Ngày sinh" className="group-area">
          {getFieldDecorator('dateOfBirth_update', {
            initialValue:  props.updateState.originData?.dateOfBirth ?
                                moment(props.updateState.originData?.dateOfBirth,"DD/MM/yyyy"):
                                moment(),
            rules: [
              {required:true, message:"Vui lòng chọn ngày sinh"},
            ],
          })(<DatePicker placeholder={"Vui lòng chọn ngày"} format={"DD/MM/yyyy"} onChange={onChangeDate} />)}
        </Form.Item>
        {/*<Form.Item label="Vai trò" className="group-area">*/}
        {/*  <Select*/}
        {/*    showSearch*/}
        {/*    labelInValue*/}
        {/*    value={{key: role.code, label: role.name}}*/}
        {/*    style={{width: 200}}*/}
        {/*    placeholder="Vai trò"*/}
        {/*    optionFilterProp="children"*/}
        {/*    onChange={handleChange}*/}
        {/*    allowClear={true}*/}
        {/*  >*/}
        {/*  </Select>*/}
        {/*</Form.Item>*/}
        <hr style={{borderTop: '1px'}}/>
        <Button className="mr-3 create-btn" htmlType="submit" onClick={onUpdateUserClicked}>
          Lưu
        </Button>

        <Button type="default" className="mr-3" onClick={onBtnCancelClicked}>
          Hủy
        </Button>
      </Form>
    </Modal>
  )
}

export default conn(Form.create<IProps>()(UpdateUserForm));
