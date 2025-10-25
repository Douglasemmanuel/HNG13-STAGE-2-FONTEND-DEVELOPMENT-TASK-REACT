import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FiMenu,  FiSettings } from 'react-icons/fi';
import { FaTicketAlt } from 'react-icons/fa';
import '../../../css/sidebar.css' ;
import { useState , useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Douglas from '../../../../images/Douglas.jpeg'

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar : React.FC<SidebarProps>= ({isOpen , toggleSidebar}) => {
  return (
    <Navbar isOpen={isOpen}  toggleSidebar={toggleSidebar} />
  )
}
const Navbar :React.FC<SidebarProps> = ({isOpen , toggleSidebar})=>{
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleSidebar = () => setIsOpen(!isOpen);
    const [ordersOpen, setOrdersOpen] = useState(false);
    const [shipmentsOpen, setShipmentsOpen] = useState(false);
    const [interstateOpen, setInterStateOpen] = useState(false);
    const [staffOpen, setStaffOpen] = useState(false);
    const [carrierOpen , setCarrierOpen] = useState(false);
    const [settingOpen , setSettingOpen] = useState(false);
    const toggleStaff = () => setStaffOpen(prev => !prev);
    const togglecarrier = () => setCarrierOpen(prev => !prev);
    const toggleSetting = () => setSettingOpen(prev => !prev);
    const toggleorders = () => setOrdersOpen(prev => !prev);
    const toggleShipments = () => setShipmentsOpen(prev => !prev);
    const toggleInterstate = () => setInterStateOpen(prev => !prev);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
    const navigate = useNavigate()

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // on load

  return () => window.removeEventListener('resize', handleResize);
}, []);
const handleLogout = () => {
  
  navigate('/')
  console.log("Logging out...");
};

const goTodashboard =()=>{
  navigate('/dashboard')
}


const goToAllTicket =()=>{
  navigate('/dashboard/tickets')
  
}

   
return (
  <div>
   
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}
          style={{
        overflowY: 'auto',
        maxHeight: '100vh',
        scrollBehavior: 'smooth',
      }}
      >
        <div 
        // className="hamburger" 
         className={`hamburger ${isOpen ? 'hamburger-right' : ''}`}
           onClick={toggleSidebar}>
        <FiMenu size={24} />
      </div>
        <h2 className="sidebar-title">LOGO</h2>
              {(isOpen || isDesktop) && (
        <div className="user-info">
          <img 
          src={Douglas}
           
            className="user-avatar" 
          />
          <p className="user-name">Douglas</p>
        </div>
      )}
        <ul className="sidebar-nav">
          <li>
            <div className="nav-item" onClick={goTodashboard}>
              <LuLayoutDashboard className={`icon ${isOpen ? 'spaced' : ''}`}  size={isOpen? 28:30}/>
              <span className="label">Dashboard</span>
            </div>
          </li>
      
        
        </ul>
              <div className="logout-container" onClick={handleLogout}>
        <IoLogOutOutline  size={24} className="logout-icon" />
        {(isOpen || isDesktop)&& <span className="logout-label">Logout</span>}
      </div>

      </nav>
      
      </div>
)
}
export default Sidebar