import { Table, Tooltip } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import React, { ReactNode } from 'react'
const TableEdiable = () => {
  const columns : any = [
    {
      title: 'tên dịch vụ',
      dataIndex: 'name-service',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'lĩnh vực',
      dataIndex: '',
      key: 'field',
      width: 80,
    },
    {
      title: 'cấp triênt',
      dataIndex: 'address',
      key: 'address 1',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column Long Column Long Column',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column Long Column',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: {
        showTitle: false,
      },
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    },
  ];
  return (
    <div className="table-common-wrapper">
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableEdiable
