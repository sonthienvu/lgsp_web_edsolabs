import React from 'react';
import Styled from '../styled/homepageStyled';
import connect_icon from '../styled/assets/images/homepage/general_statistics/connect.png';
import business_icon from '../styled/assets/images/homepage/general_statistics/business_time.png';
import database_icon from '../styled/assets/images/homepage/general_statistics/database.png';

export const General_statistics = function () {
  return (
    <Styled.Container>
      <div className="general-statistics">
  <div className="lgsp-model--header header__flex">
    <h1 className="header--blue-text">THỐNG KÊ CHUNG</h1>
  </div>
  <div className="header__flex">
    <div className="header--line" />
  </div>
  <div className="general-statistics--list">
    <div className="general-statistics--item">
      <div className="general-statistics--img">
        <img src={connect_icon} />
      </div>
      <div className="general-statistics--title">
        <p>TỔNG SỐ HTTT/CSDL KẾT NỐI</p>
      </div>
      <div className="general-statistics--counter">
        <p>10</p>
      </div>
    </div>
    <div className="general-statistics--item">
      <div className="general-statistics--img">
        <img src={connect_icon} />
      </div>
      <div className="general-statistics--title">
        <p>SỐ LGSP KẾT NỐI</p>
      </div>
      <div className="general-statistics--counter">
        <p>10</p>
      </div>
    </div>
    <div className="general-statistics--item">
      <div className="general-statistics--img">
        <img src={business_icon} />
      </div>
      <div className="general-statistics--title">
        <p>SỐ NGÀY HOẠT ĐỘNG</p>
      </div>
      <div className="general-statistics--counter">
        <p>10</p>
      </div>
    </div>
    <div className="general-statistics--item">
      <div className="general-statistics--img">
        <img src={database_icon} />
      </div>
      <div className="general-statistics--title">
        <p>NGUỒN CSDL QUỐC GIA, HTTT QUỐC GIA</p>
      </div>
      <div className="general-statistics--counter">
        <p>10</p>
      </div>
    </div>
  </div>
</div>

    </Styled.Container>
  );
};

export default General_statistics;
