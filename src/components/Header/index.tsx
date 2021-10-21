import React from 'react';
import Styled from '../../modules/Homepage/styled/homepageStyled';
import logo from '../../assets/images/header_logo.png'
import {NavLink,useLocation} from 'react-router-dom'

export const Header = function () {
  const location = useLocation();
      //destructuring pathname from location
      const { pathname } = location;

      //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");      
  return (
    <Styled.Container>
      <div className="header main-color bg-black">
          <div className="header--left">
            <div className="header--logo">
              <NavLink exact activeClassName="active" to='/home'><img src={logo}/></NavLink>
            </div>
            <div className="header--text">
              <h1 className="font-weight__400">bộ kế hoạch và đầu tư</h1>
              <h1 className="font-weight__700 white-text">nền tảng tích hợp, chia sẻ dữ liệu</h1>
            </div>
          </div>
          <div className="header--right">
            <ul>
              <li><NavLink exact activeClassName="active" to='/home' >Trang chủ</NavLink></li>
              <li><NavLink activeClassName="active" to='/service'>Dịch vụ</NavLink></li>
              <li><NavLink activeClassName="active" to='/register'>Đăng ký</NavLink></li>
              <li><NavLink activeClassName="active" to='/login'>Đăng nhập</NavLink></li>
            </ul>
          </div>
        </div>
    </Styled.Container>
  );
};

export default Header;
