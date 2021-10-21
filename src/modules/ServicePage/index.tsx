import { Table, Tooltip } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import React, { ReactNode } from 'react'
import { Select } from 'antd';
import Pagination from '../../components/Pagination';


const { Option } = Select;
const ServicePage = () => {
  const columns : any = [
    {
      title: 'tên dịch vụ',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: 'lĩnh vực',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'cấp triển khai',
      dataIndex: 'level',
      key: 'level',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <span >
          {address}
        </span>
      ),
    },
    {
      title: 'Đơn vị triển khai',
      dataIndex: 'unit',
      key: 'unit',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <>
        <Select defaultValue="1"  dropdownClassName="dropdown-unit">
          <Option value="1">tp ha noi</Option>
          <Option value="2">tp ho chi minh</Option>
          <Option value="3">tp da nang</Option>
        </Select>
        </>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '2',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '3',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '4',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '5',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '6',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '7',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '8',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
    {
      key: '9',
      name: 'Dịch vụ A',
      field: 'Đất đại',
      level: 'Cấp địa phương',
      unit: 'edso labs',
    },
  ];
  return (
    <div className="service-page-container flex flex-col items-center justify-center">
    <div className="service-table">
          <Table columns={columns} dataSource={data} pagination={false} size="small"/>
          <Pagination />
      </div>
    </div>
  )
}

export default ServicePage
