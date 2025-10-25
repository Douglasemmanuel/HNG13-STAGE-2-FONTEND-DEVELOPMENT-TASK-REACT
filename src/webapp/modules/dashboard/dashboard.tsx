import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import Sidebar from '../component/Sidebar';
// import MainDash from './MainDash';
import '../../css/dashboard.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';
const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  return (
    <div  className={`App ${isOpen ? 'with-sidebar' : ''}`}>
      <div className='AppGlass scrollable-container'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Outlet /> 
      {/* <MainDash/> */}
      </div>
    </div>
  );
};

export default Dashboard;