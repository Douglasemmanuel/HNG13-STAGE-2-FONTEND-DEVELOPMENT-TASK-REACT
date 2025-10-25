import React from 'react';
import { useState } from 'react';
import DOUGLAS from '../../images/Douglas.jpeg'
import lOGO from '../../images/logo2.jpeg'
import { Navbar as BootstrapNavbar, Nav, Container, Image, Button, Collapse } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header:React.FC = () => {
  return (
    <>
    <Navbar DOUGLAS={DOUGLAS} lOGO={lOGO}/>
    </>
  )
}

export default Header;






interface NavbarProps {
  lOGO: string;
  DOUGLAS: string;
}
const Navbar: React.FC<NavbarProps> = ({ lOGO, DOUGLAS }) => {
  const [isOpen, setIsOpen] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate()
     const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

   const goToHome = () => {
    navigate("/");
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
   {isAuthenticated ? (
        <div className="d-none d-md-flex align-items-center">
          <Image src={DOUGLAS} roundedCircle height={32} />
          <p className="mb-0 ps-2">Douglas Emmanuel</p>
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
      {isAuthenticated ?
        <Nav.Link href="#" className="d-flex align-items-center px-3 py-2 rounded hover-bg">
        <Image src={DOUGLAS} roundedCircle height={32} className="me-2" />
        Douglas Emmanuel
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


// const Navbar: React.FC<NavbarProps> = ({ lOGO, DOUGLAS }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
   
// <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-8 lg:px-12">
//   {/* Flex container with justify-between ensures spacing */}
//   <div className="flex items-center justify-between h-16  w-full">
    
//     {/* Logo */}
//     <div className="flex-shrink-0 flex items-center space-x-1">
//       <img
//         className="h-8 w-auto"
//         src={lOGO}
//         alt="Logo"
//       />
//       <h2 className="text-gray-800 font-medium text-lg">TicketHub</h2>
//     </div>

//     {/* Centered Nav Links - only visible on md+ screens */}
//     <div className="hidden md:flex flex-1 justify-center gap-x-10">
//       <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
//       <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Events</a>
//       <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Orders</a>
//       <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">More</a>
//     </div>

//     {/* Avatar/Profile - visible only on md+ */}
//     <div className="hidden md:flex flex-shrink-0">
//       <img src={DOUGLAS} alt="Profile" className="h-8 w-8 rounded-full" />
//     </div>

//     {/* Mobile Menu Button - far right on small screens */}
//     <div className="md:hidden pr-40">
//       <button
//         type="button"
//         className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg
//           className="h-6 w-6"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </button>
//     </div>
//   </div>
// </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-sm py-6">
//   <div className="px-8 space-y-4">
//     <a href="#" className="block px-7 py-7  rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Home</a>
//     <a href="#" className="block px-7 py-7 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Events</a>
//     <a href="#" className="block px-7 py-7 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Orders</a>
//     <a href="#" className="block px-7 py-7 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">More</a>
//     <a
//       href="#"
//       className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//     >
//       <img src={DOUGLAS} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
//       Douglas Emmanuel
//     </a>
//   </div>
// </div>

//     //     <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
//     //       <div className="px-2 pt-6 pb-3 space-y-1">
//     //         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Home</a>
//     //         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Events</a>
//     //         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Orders</a>
//     //         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">More</a>
//     //         <a
//     //     href="#"
//     //     className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//     //   >
//     //     <img src={DOUGLAS} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
//     //     Douglas Emmanuel
//     //   </a>
//     //         {/* <div className="border-t border-gray-200 mt-2 pt-2">
//     //           <img src={DOUGLAS} alt="Profile" className="h-8 w-8 rounded-full mx-auto" />
//     //         </div> */}
//     //       </div>
//     //     </div>
//       )}
//     </nav>
//   );
// };




