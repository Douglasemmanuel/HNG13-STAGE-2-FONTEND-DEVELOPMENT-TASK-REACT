

import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import logo from "../../images/logo2.jpeg";
import "../css/main.css"
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/HeroSection.css'
const Main: React.FC = () => {
  const navigate = useNavigate()
  const goToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="main-wrapper">
      <main className="hero-section position-relative text-center text-white">
        {/* Wavy SVG Background */}
        <div className="wave-bg">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#007bff"
              fillOpacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,176C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Decorative Circle */}
        <div className="decorative-circle"></div>

        {/* Hero Content */}
        <Container className="hero-content" fluid>
           <div className="d-flex align-items-center justify-content-center gap-3">
    <img 
      src={logo} 
      alt="Ticket Icon" 
      style={{ width: "60px", height: "60px"  , borderRadius:'2rem'}} 
    />
    <h1 className="fw-bold display-4 mb-2">TicketHub</h1>
  </div>
          <p className="fs-5 mb-4 mt-4">
            Discover, book, and enjoy your favorite live experiences effortlessly.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
           
           <Button
  variant="primary"
  size="lg"
  className="fw-semibold custom-btn"
  onClick={()=>navigate('/login')}
>
  Login
</Button>

           
            <Button
  variant="outline-primary"
  size="lg"
  className="fw-semibold custom-outline-btn"
  onClick={()=>navigate('/signup')}
>
  Get Started
</Button>

          </div>
        </Container>
         <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>

      {/* Wavy SVG at the bottom */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      </main>

    
      {/* Feature Boxes */}
<section className="features-section py-5">
  <Container fluid>
    <Row className="g-4 justify-content-center align-items-stretch">
      <Col xs={12} sm={6} md={4} className="d-flex">
        <Card className="feature-card shadow-sm p-4 text-center flex-fill">
          <h5 className="fw-bold mb-2">Create Tickets</h5>
          <p>submit new tickets with validation and automatic tracking.</p>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} className="d-flex">
        <Card className="feature-card shadow-sm p-4 text-center flex-fill">
          <h5 className="fw-bold mb-2">View and Mange</h5>
          <p>see open , in-progress and closed tickets all in the dahboard.</p>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} className="d-flex">
        <Card className="feature-card shadow-sm p-4 text-center flex-fill">
          <h5 className="fw-bold mb-2">Secure and Safe</h5>
          <p>All your ticket data is safely stored .</p>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


    
    </div>
  );
};

export default Main;
