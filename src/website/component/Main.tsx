import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Davido from '../../images/davido.jpg';
const Main: React.FC = () => {
  return (
  <div style={{marginTop:'8rem'}}>
      <main className=" mt-6 py-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} lg={8} className="d-flex flex-column gap-4">

            {/* Hero Section */}
            <section
              className="d-flex flex-column align-items-center justify-content-center text-center rounded-3 p-4 p-sm-5"
              style={{
                minHeight: "480px",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${Davido})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              <h1 className="fw-bold display-5 mb-2">
                Experience Live Events
              </h1>
              <h2 className="fs-6 mb-3">
                Find tickets to concerts, sports, arts, and more.
              </h2>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                <Button variant="primary" size="lg">
                  Browse Events
                </Button>
                <Button variant="light" size="lg" className="text-dark">
                  Sign Up
                </Button>
              </div>
            </section>

            {/* Why Choose Section */}
            <section className="px-2 px-sm-3 mt-4">
              <h1 className="text-black fw-bold display-6 mb-3">
                Why Choose TicketHub?
              </h1>
              <p className="text-dark fs-5">
                We make it easy to discover and attend the events you love. 
                Browse events near you, get the best tickets, and enjoy a seamless experience every time.
              </p>
            </section>

          </Col>
        </Row>
      </Container>
    </main>
  </div>
  );
};

export default Main;
