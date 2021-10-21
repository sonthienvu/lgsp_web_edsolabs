import React from 'react';
import Styled from '../styled/homepageStyled';
import mpi_logo from '../styled/assets/images/homepage/mpi_logo.png';
import location_icon from '../styled/assets/icons/footer/location.svg';
import phone_icon from '../styled/assets/icons/footer/phone.svg';
import fax_icon from '../styled/assets/icons/footer/fax.svg';
import email_icon from '../styled/assets/icons/footer/email.svg';

export const HomepageFooter = function () {
  return (
    <Styled.Container>
      <div className="homepage-footer">
        <div className="hp-footer--logo">
          <img src={mpi_logo} />
        </div>
        <div className="hp-footer--infor">
          <div className="hp-footer--header">
            <h4>BỘ KẾ HOẠCH VÀ ĐẦU TƯ</h4>
          </div>
          <div className="hp-footer--contact">
            <ul>
              <li>
                <img style={{width: '16px'}} src={location_icon} />
                <p>	Số 6B đường Hoàng Diệu, phường Quán Thánh, quận Ba Đình, Hà Nội</p>
              </li>
              <li>
                <img style={{width: '16px'}} src={phone_icon} />
                <p>024.38455298</p>
              </li>
              <li>
                <img style={{width: '16px'}} src={fax_icon} />
                <p>024.38234453</p>
              </li>
              <li>
                <img style={{width: '16px'}} src={email_icon} />
                <p>www.mpi.gov.vn </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Styled.Container>
  );
};

export default HomepageFooter;
