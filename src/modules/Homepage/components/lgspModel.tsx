import React from 'react';
import Styled from '../styled/homepageStyled';
import prvIcon from '../styled/assets/icons/lgsp_slide/prvIcon.svg';
import nextIcon from '../styled/assets/icons/lgsp_slide/nextIcon.svg';

export const LgspModel = function () {
  return (
    <Styled.Container>
      <div className="lgsp-model">
        <div className="lgsp-model--header header__flex">
          <h1 className="header--blue-text">MÔ HÌNH LGSP</h1>
        </div>
        <div className="header__flex">
          <div className="header--line" />
        </div>        
        <div className="lgsp-model--slide">
          <div className="previous-slide-image">
            <img src={prvIcon}/>
          </div>
          <div className="lgsp-slide-image">
            <p>Slide Images</p>
          </div>
          <div className="next-slide-image">
            <img src={nextIcon}/>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default LgspModel;