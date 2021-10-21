import styled from "styled-components";
import {RootState} from "../../../redux/reducers";
import {connect, ConnectedProps} from "react-redux";
import {getAllDataService} from "../redux/actions/get_data_services";
import React, {useState} from "react";
import {GetGroupRestApiParams} from "../../GroupRestApi/redux/models";
import {GetDataServiceParams} from "../redux/models";
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";

const SearchFormStyle = styled.div`
  margin-bottom: 10px;
  .ant-form-item {
    margin: 0;
  }
`;

const mapStateToProps = (rootState: RootState) => ({
  getState: rootState.dataService.getState,
});

const connector = connect(mapStateToProps, {getAllDataService});


type ReduxProps = ConnectedProps<typeof connector>;

interface IProps extends ReduxProps {
}

function SearchBar({getState, getAllDataService}: IProps) {

  const [keySearch, setKeySearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    let params: GetDataServiceParams = ({
      ...getState.params,
      text: keySearch,
      status: status,
      startDate: startDate,
      endDate: endDate
    });
    getAllDataService(params);
  }

  const [status, setStatus] = useState('');

  const handleTextChange = (e: any) => {
    setKeySearch(e.target.value);
  }

  const handleStatusChange = (value: any)=> {
    if(value !== undefined){
      const id = value.key;
      setStatus(id);
    }else {
      setStatus('');
    }
  }

  const onChangeStartDate = (date: any, dateString: string) => {
    setStartDate(dateString);
  }

  const onChangeEndDate = (date: any, dateString: string) => {
    setEndDate(dateString);
  }

  return (
    <SearchFormStyle>
      <Row className="row">
        <Col md={24}>
          <Form>
            <Row className="row">
              <Col xs={24} md={8} xl={4}>
                <Form.Item hasFeedback>
                  <Input onChange={handleTextChange} value={keySearch} placeholder="Nhập từ khóa tìm kiếm"/>
                </Form.Item>
              </Col>
              <Col xs={24} md={8} xl={3}>
                <Form.Item>
                  <Select
                    showSearch
                    labelInValue
                    placeholder="Trạng thái"
                    optionFilterProp="children"
                    onChange={handleStatusChange}
                    allowClear={true}
                  >
                    <Select.Option value="">Tất cả</Select.Option>
                    <Select.Option value="available">Đang hoạt động</Select.Option>
                    <Select.Option value="unavailable">Ngừng hoạt động</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} xl={2}>
                <DatePicker placeholder={"Ngày bắt đầu"} format={"DD/MM/yyyy"} onChange={onChangeStartDate} />
              </Col>
              <Col xs={24} sm={12} xl={2}>
                <DatePicker placeholder={"Ngày kết thúc"} format={"DD/MM/yyyy"} onChange={onChangeEndDate} />
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

