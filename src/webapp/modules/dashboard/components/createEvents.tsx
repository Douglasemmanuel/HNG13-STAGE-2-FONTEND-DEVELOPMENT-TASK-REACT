import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import useTicketStore from "../store/ticketStore";
import type { Ticket } from "../store/ticketStore";

interface EventTicketFormData {
  eventName: string;
  eventDate: string;
  venue: string;
  quantity: string; // keep as string
  attendeeName?: string;
  attendeeEmail?: string;
  attendeePhone?: string;
  ticketType: "VIP" | "Regular" | "Student";
  price: number;
}

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  ticketPrices: {
    Regular: number;
    VIP: number;
    Student: number;
  };
}

interface EventTicketModalProps {
  show: boolean;
  handleClose: () => void;
  event: Event;
}

// Default ticket prices if event.ticketPrices is missing
const defaultTicketPrices: Record<"Regular" | "VIP" | "Student", number> = {
  Regular: 10000,
  VIP: 1000000,
  Student: 5000,
};

const EventTicketModal: React.FC<EventTicketModalProps> = ({ show, handleClose, event }) => {
  const { addTicket } = useTicketStore();

  const { register, handleSubmit, reset, watch, setValue } = useForm<EventTicketFormData>({
    defaultValues: {
      ticketType: "Regular",
      price: event.ticketPrices?.Regular ?? defaultTicketPrices.Regular,
      eventName: event.title,
      eventDate: event.date,
      venue: event.venue,
      quantity: "1", // default quantity as string
    },
  });

  const selectedTicketType = watch("ticketType");

  // Update price when ticket type changes
  useEffect(() => {
    const price = event.ticketPrices?.[selectedTicketType] ?? defaultTicketPrices[selectedTicketType];
    setValue("price", price);
  }, [selectedTicketType, event.ticketPrices, setValue]);

  // Reset form when event changes
  useEffect(() => {
    reset({
      ticketType: "Regular",
      price: event.ticketPrices?.Regular ?? defaultTicketPrices.Regular,
      eventName: event.title,
      eventDate: event.date,
      venue: event.venue,
      quantity: "1",
    });
  }, [event, reset]);

  const onSubmit = (data: EventTicketFormData) => {
 const ticketData: Omit<Ticket, "id" | "status" | "purchaseDate"> = {
  eventId: event.id,      // <-- required
  eventName: event.title,
  eventDate: event.date,
  venue: event.venue,
  quantity: data.quantity,
  ticketType: data.ticketType,
  price: data.price,
  attendeeName:data.attendeeName,
  attendeeEmail:data.attendeeEmail,
  attendeePhone:data.attendeePhone,
};


  addTicket(ticketData);
  alert("Ticket purchased successfully!");
  reset();
  handleClose();
};

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Buy Ticket - {event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" {...register("eventName")} readOnly />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" {...register("eventDate")} readOnly />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Venue</Form.Label>
                <Form.Control type="text" {...register("venue")} readOnly />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quantity" {...register("quantity")} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Attendee Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Attendee Name" {...register("attendeeName")} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Attendee Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Attendee Email" {...register("attendeeEmail")} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone Number" {...register("attendeePhone")} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Ticket Type</Form.Label>
                <Form.Select {...register("ticketType")}>
                  <option value="Regular">Regular</option>
                  <option value="VIP">VIP</option>
                  <option value="Student">Student</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  {...register("price", { required: true })}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" onClick={handleClose} className="me-2">Cancel</Button>
            <Button type="submit" variant="primary">Buy Ticket</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EventTicketModal;
