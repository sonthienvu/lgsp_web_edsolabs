import React, {useEffect, useState} from 'react';
// import HomepageFooter from '../../modules/Homepage/components/homepage_footer';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const GuestLayout = (props: LayoutProps) => {
  const {children} = props;
  return (
    <div className="guest-layout-wrapper">
        <Header/>
      {children}
      <Footer />
    </div>
  );

};

export default GuestLayout;
