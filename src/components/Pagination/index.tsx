import React from 'react'
import { Pagination as PaginationTable } from 'antd';
import "./Pagination.scss"

const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <div className="count-page">
        1-10 cua 1000
      </div>
          <PaginationTable simple defaultCurrent={2} total={50} />
    </div>
  )
}

export default Pagination
