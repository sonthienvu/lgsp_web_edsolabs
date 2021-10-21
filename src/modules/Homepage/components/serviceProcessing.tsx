import React from 'react';
import Styled from '../styled/homepageStyled';
import ServiceProcessingItem from '../components/ServiceProcessingItem';


export const ServiceProcessing = function () {
  
  return (
    <Styled.Container>
      <div className="src-process">
        <div className="src-process--header header__flex">
          <h1 className="header--blue-text">NHÓM DỊCH VỤ ĐANG TRIỂN KHAI</h1>
        </div>
        <div className="header__flex">
          <div className="header--line" />
        </div>        
        <div id="demo" className="src-process--list">
          <ServiceProcessingItem />
        </div>

      </div>

    </Styled.Container>
  );
};

export default ServiceProcessing;
