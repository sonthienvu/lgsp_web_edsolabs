import React from 'react';
import Styled from '../styled/homepageStyled';

export const LgspPresent = function () {
  return (
    <Styled.Container>
      <div className="lgsp-present">
          <div className="lgsp-present--text white-text">
            <h2>GIỚI THIỆU LGSP</h2>
            <div className="lgsp-detail--1">
              <p>Nền tảng tích hợp, chia sẻ dữ liệu của Bộ Kế Hoạch và Đầu Tư (LGSP) đóng vai trò trung gian phục vụ kết nối giữa các hệ thống thông tin lớn (hệ thống thông tin quốc gia; cơ sở dữ liệu quốc gia; hệ thống thông tin có quy mô, phạm vi từ Trung ương đến Địa phương), giữa các hệ thống thông tin trong Bộ KH&amp;DT. Mô hình kết nối của LGSP tuân thủ theo mô hình kết nối của Kiến trúc Chính phủ điện tử ngành KH&amp;DT, phiên bản 2.0. Hệ thống này bao gồm các dịch vụ, ứng dụng dùng chung để kết nối liên thông các HTTT, CSDL của Bộ KH&amp;DT và giữa Bộ KH&amp;DT với các Bộ, Ngành, Địa phương.</p>
            </div>
            <div className="lgsp-detail--2">
              <h4>Các dịch vụ LGSP cung cấp, bao gồm:</h4>
              <p>1. Các dịch vụ chia sẻ dữ liệu từ các HTTT, CSDL Quốc gia;</p>
              <p>2. Các dịch vụ chia sẻ, tích hợp giữa các HTTT, CSDL chuyên ngành trong nội bộ Bộ KH&amp;DT;</p>
              <p>3. Tích hợp các dịch vụ trao đổi dữ liệu, các dịch vụ nền tảng dùng chung của Bộ KH&amp;DT và các dữ liệu dùng chung của của Quốc gia;</p>
              <p>4. Các dịch vụ kết nối liên thông khác phục vụ mục tiêu xây dựng Chính phủ điện tử.</p>
            </div>
            <div className="lgsp-reg">
              <button className="lgsp-reg-btn">ĐĂNG KÍ KẾT NỐI</button>
            </div>
          </div>
        </div>
    </Styled.Container>
  );
};

export default LgspPresent;
