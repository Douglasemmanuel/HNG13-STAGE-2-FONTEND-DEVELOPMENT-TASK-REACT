import React from "react";
import { Container, Row, Col, Button, Card, Breadcrumb } from "react-bootstrap";
import Davido from '../../images/davido.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
const Content:React.FC = () => {
   const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item href="#">Concerts</Breadcrumb.Item>
            <Breadcrumb.Item active>Davido</Breadcrumb.Item>
          </Breadcrumb>

          {/* Image Card */}
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={Davido}
              alt="Davido 5ive alive Tour"
              style={{ 
                objectFit: "cover",
                 height: "300px", 
                borderRadius: "0.5rem"
                }}
            />
          </Card>

          {/* Event Title */}
          <h2 className="mb-3">Davido | 5ive Alive Tour</h2>

          {/* Event Details */}
          <p className="mb-3">
            Sun, Oct 26 · 7:00 PM · Godswill Akpabio's Stadium, uyo, AkwaIbom,
          </p>

          {/* Event Description */}
          <p className="mb-4">
           From Afrobeat hits to global superstardom, Davido has electrified audiences worldwide with his infectious rhythms and charismatic performances. This concert celebrates his dynamic discography, promising a night of high-energy music, unforgettable hits, and moments fans will cherish.
          </p>

          {/* Ticket Information */}
          <h4 className="mb-3">Ticket Information</h4>
          <p className="mb-4">
            Ticket prices range from ₦5,000 to ₦5,000,000 depending on seating location. VIP packages are available for an enhanced experience.
          </p>

          {/* Buy Button */}
          <Button variant="primary" size="lg" onClick={()=> navigate('/signup')}>
            Buy Tickets
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
