import React, {useEffect, useState} from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = (props: LayoutProps) => {
  const {children} = props;
  return (
    <div className="dashboard-layout-wrapper">
      {children}
    </div>
  );

};

export default DashBoardLayout;
