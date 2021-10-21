
import React, { Component } from 'react';
// import Header from './components/header'
import LgspPresent from './components/lgspPresent'
import LgspModel from './components/lgspModel'
import ServiceProcessing from './components/serviceProcessing'
import ConnectedUnit from './components/ConnectedUnit'
import General_statistics from './components/general_statistics'
// import HomepageFooter from './components/homepage_footer'


function Homepage() {

  return (
      <div>
        <LgspPresent/>
        <LgspModel/>
        <ServiceProcessing/>
        <ConnectedUnit/>
        <General_statistics/>
      </div>
  )      

}

export default Homepage;
