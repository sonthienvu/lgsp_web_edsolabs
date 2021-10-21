import React, {useState} from "react";
import styled from 'styled-components';
import {Button, Col, Form, Input, Row, Select, } from "antd";
import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {getAllUsers} from "../redux/action/get_users";
import {GetUserParams} from "../redux/models";

const SearchFormStyle = styled.div`
  margin-bottom: 10px;
  .ant-form-item {
    margin: 0;
  }
`;

const mapStateToProps = (rootState: RootState) => ({
  getState: rootState.user.getState,
});

const connector = connect(mapStateToProps, {getAllUsers});


type ReduxProps = ConnectedProps<typeof connector>;

interface IProps extends ReduxProps {
}

function SearchBar({getState, getAllUsers}: IProps) {
  const [keySearch, setKeySearch] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    let params: GetUserParams = ({
      ...getState.params,
      key: keySearch,
      status: status,
    });
    getAllUsers(params);
  }

  const [status, setStatus] = useState(-1);

  const handleTextChange = (e: any) => {
    setKeySearch(e.target.value);
  }

  const handleStatusChange = (value: any)=> {
    if(value !== undefined){
      const id = value.key;
      setStatus(id);
    }else {
      setStatus(-1);
    }
  }

  return (
    <SearchFormStyle>
      <Row className="row">
        <Col md={24}>
          <Form>
            <Row className="row">
              <Col xs={24} md={8} xl={5}>
                <Form.Item hasFeedback>
                  <Input onChange={handleTextChange} value={keySearch} placeholder="Nhập từ khóa tìm kiếm"/>
                </Form.Item>
              </Col>
              <Col xs={24} md={8} xl={5}>
                <Form.Item>
                  <Select
                    showSearch
                    labelInValue
                    placeholder="Trạng thái"
                    optionFilterProp="children"
                    onChange={handleStatusChange}
                    allowClear={true}
                  >
                    <Select.Option value="-1">Tất cả</Select.Option>
                    <Select.Option value="1">Đang hoạt động</Select.Option>
                    <Select.Option value="0">Ngừng hoạt động</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} xl={4}>
                <Form.Item>
                  <Row className="row">
                    <Col xs={12}>
                      <Button style={{width: '100%'}} className="create-btn" onClick={(e: any) => handleSearch(e)}>
                        Tìm kiếm
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </SearchFormStyle>
  )
}

export default connector(SearchBar);
