import React from 'react';

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
      </div>
    </div>
  );
};

export default Dashboard;