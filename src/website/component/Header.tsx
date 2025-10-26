import React from 'react';
import { useState } from 'react';
import DOUGLAS from '../../images/Douglas.jpeg'
import lOGO from '../../images/logo2.jpeg'
import { Navbar as BootstrapNavbar, Nav, Container, Image, Button, Collapse } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCurrentUser } from '../../webapp/modules/auth/hooks/user_hooks';
const Header:React.FC = () => {
  return (
    <>
    <Navbar  lOGO={lOGO}/>
    </>
  )
}

export default Header;






interface NavbarProps {
  lOGO: string;
 
}
const Navbar: React.FC<NavbarProps> = ({ lOGO }) => {
  const [isOpen, setIsOpen] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate()
   const {logout , currentUser} = useCurrentUser()
     const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

   const goToHome = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <BootstrapNavbar expand="md" bg="white" fixed='top' className="shadow-sm border-bottom fixed-top py-3">
       <Container className="d-flex justify-content-between align-items-center">
  {/* Logo */}
  <BootstrapNavbar.Brand href="#" className="d-flex align-items-center" onClick={goToHome}>
    <Image src={lOGO} height={32} className="me-2" alt="Logo" />
    <span className="fw-medium text-dark">TicketHub</span>
    
  </BootstrapNavbar.Brand>

  {/* Desktop Links */}
  <Nav className="mx-auto d-none d-md-flex align-items-center">
    {/* Group Home & Events closer */}
    <div className="d-flex gap-1">
      <Nav.Link href="#" className="text-dark px-3 py-2 rounded hover-bg">Home</Nav.Link>
      <Nav.Link href="#" className="text-dark px-3 py-2 rounded hover-bg">Events</Nav.Link>
    </div>
    {/* Rest of the links */}
    <Nav.Link href="#" className="text-dark px-3 py-2 rounded hover-bg ms-3">Orders</Nav.Link>
    <Nav.Link href="#" className="text-dark px-3 py-2 rounded hover-bg">More</Nav.Link>
  </Nav>

  {/* Desktop Avatar */}
  <div className="d-none d-md-flex align-items-center">
   {currentUser ? (
        <div className="d-none d-md-flex align-items-center" onClick={goToHome} style={{ cursor: "pointer" }}>
          <Image src={lOGO} roundedCircle height={32} />
          <p className="mb-0 ps-2">{currentUser.firstName} {currentUser.lastName}</p>
        </div>
      ) : (
        <Nav className="d-flex gap-2">
         <Nav.Item>
    <Button variant="outline-primary" onClick={goToLogin}>
      Login
    </Button>
  </Nav.Item>
  <Nav.Item>
    <Button variant="primary" onClick={goToSignup}>
      Get Started
    </Button>
  </Nav.Item>
        </Nav>
      )}
  </div>

  {/* Mobile Hamburger */}
  <Button
    variant="outline-secondary"
    className="d-md-none p-1"
    style={{
        fontSize: "1.2rem", 
        lineHeight: 1,       
        height: "36px",    
        width: "36px"        
    }}
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <span style={{ fontSize: "1.5rem" }}>✕</span> : <span style={{ fontSize: "1.5rem" }}>☰</span>}
  </Button>
</Container>


        {/* Mobile Menu */}
<Collapse in={isOpen}>
  <div className="d-md-none bg-white border-top py-4 w-100">
    <Nav className="flex-column px-3 gap-2">
      <Nav.Link href="#" className="px-3 py-2 rounded hover-bg">Home</Nav.Link>
      <Nav.Link href="#" className="px-3 py-2 rounded hover-bg">Events</Nav.Link>
      <Nav.Link href="#" className="px-3 py-2 rounded hover-bg">Orders</Nav.Link>
      <Nav.Link href="#" className="px-3 py-2 rounded hover-bg">More</Nav.Link>
      {currentUser ?
        <Nav.Link href="/dashboard" className="d-flex align-items-center px-3 py-2 rounded hover-bg" style={{ cursor: "pointer" }}>
        <Image src={lOGO} roundedCircle height={32} className="me-2" />
            <p className="mb-0 ps-2">{currentUser.firstName} {currentUser.lastName}</p>
      </Nav.Link>
      :
     <Nav className="d-flex gap-2 ">
  <Button variant="outline-primary" onClick={goToLogin}>
    Login
  </Button>
  <Button variant="primary" onClick={goToSignup}>
    Get Started
  </Button>
</Nav>
      }
      
    </Nav>
  </div>
</Collapse>


      </BootstrapNavbar>

      {/* Optional custom hover styling */}
    
    </>
  );
};



