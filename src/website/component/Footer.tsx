import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons'; // optional: react-bootstrap-icons package
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer:React.FC = () => {
  return (
    <footer className="bg-light py-5">
      <Container className="text-center">
        <Row className="justify-content-center mb-4">
          <Col xs={6} md="auto" className="mb-2">
            <a className="text-secondary text-decoration-none" href="#">About Us</a>
          </Col>
          <Col xs={6} md="auto" className="mb-2">
            <a className="text-secondary text-decoration-none" href="#">Contact</a>
          </Col>
          <Col xs={6} md="auto" className="mb-2">
            <a className="text-secondary text-decoration-none" href="#">Privacy Policy</a>
          </Col>
          <Col xs={6} md="auto" className="mb-2">
            <a className="text-secondary text-decoration-none" href="#">Terms of Service</a>
          </Col>
        </Row>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-secondary">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-secondary">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-secondary">
            <Instagram size={24} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
