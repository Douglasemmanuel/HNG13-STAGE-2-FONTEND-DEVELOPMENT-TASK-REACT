import React from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import type { Ticket } from "../store/ticketStore";

interface TicketDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  ticket: Ticket;
}


const TicketDetailsModal: React.FC<TicketDetailsModalProps> = ({
  show,
  handleClose,
  ticket,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Ticket Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="shadow-sm border-0">
          <Card.Body>
            <Row className="mb-3">
              <Col md={6}>
                <h5>Event:</h5>
                <p>{ticket.eventName}</p>
              </Col>
              <Col md={6}>
                <h5>Date:</h5>
                <p>{ticket.eventDate}</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <h5>Venue:</h5>
                <p>{ticket.venue}</p>
              </Col>
              <Col md={6}>
                <h5>Seat:</h5>
                <p>{ '21A' }</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <h5>Attendee Name:</h5>
                <p>{ticket.attendeeName || "N/A"}</p>
              </Col>
              <Col md={6}>
                <h5>Phone:</h5>
                <p>{ticket.attendeePhone|| "N/A"}</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <h5>Ticket Type:</h5>
                <p>{ticket.ticketType}</p>
              </Col>
              <Col md={6}>
                <h5>Price:</h5>
                <p>₦{ticket.price}</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <h5>Order ID:</h5>
                <p>{ticket.id}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketDetailsModal;
