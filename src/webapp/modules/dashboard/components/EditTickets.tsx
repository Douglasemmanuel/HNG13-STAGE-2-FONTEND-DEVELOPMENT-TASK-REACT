import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useTicketStore from "../store/ticketStore";
import type { Ticket } from "../store/ticketStore";

interface EditTicketModalProps {
  show: boolean;
  handleClose: () => void;
  ticketToEdit: Ticket; // The ticket we want to edit
  ticketPrices?: Record<"Regular" | "VIP" | "Student", number>;
}

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

const ticketPrices: Record<"Regular" | "VIP" | "Student", number> = {
  Regular: 10000,
  VIP: 1000000,
  Student: 5000,
};

const EditTicket: React.FC<EditTicketModalProps> = ({
  show,
  handleClose,
  ticketToEdit,
}) => {
  const { editTicket } = useTicketStore();

  const { register, handleSubmit, reset, watch, setValue } =
    useForm<EventTicketFormData>({
      defaultValues: {
        ticketType: ticketToEdit.ticketType ?? "Regular",
       price:
      ticketToEdit.price ??
      ticketPrices?.[ticketToEdit.ticketType ?? "Regular"] ??
      0, 
        eventName: ticketToEdit.eventName,
        eventDate: ticketToEdit.eventDate,
        venue: ticketToEdit.venue,
        quantity: ticketToEdit.quantity?.toString() ?? "1",
        attendeeName: ticketToEdit.attendeeName ?? "",
        attendeeEmail: ticketToEdit.attendeeEmail ?? "",
        attendeePhone: ticketToEdit.attendeePhone ?? "",
      },
    });


const selectedTicketType = watch("ticketType");

useEffect(() => {
  const updatedPrice =
    ticketPrices?.[selectedTicketType] ?? ticketToEdit.price ?? 0;
  setValue("price", updatedPrice);
}, [selectedTicketType, ticketToEdit, ticketPrices, setValue]);

useEffect(() => {
  if (!ticketToEdit) return;

  reset({
    ...ticketToEdit,
    quantity: ticketToEdit.quantity?.toString() ?? "1",
    price: ticketToEdit.price ?? ticketPrices[ticketToEdit.ticketType ?? "Regular"],
  });
}, [ticketToEdit, reset]);

// useEffect(() => {
//   if (!ticketToEdit) return;

//   reset({
//     ticketType: ticketToEdit.ticketType ?? "Regular",
//     price: ticketToEdit.price ?? ticketPrices[ticketToEdit.ticketType ?? "Regular"],
//     eventName: ticketToEdit.eventName,
//     eventDate: ticketToEdit.eventDate,
//     venue: ticketToEdit.venue,
//     quantity: ticketToEdit.quantity?.toString() ?? "1",
//     attendeeName: ticketToEdit.attendeeName ?? "",
//     attendeeEmail: ticketToEdit.attendeeEmail ?? "",
//     attendeePhone: ticketToEdit.attendeePhone ?? "",
//   });
// }, [ticketToEdit, reset]);

 const onSubmit = (data: EventTicketFormData) => {
  const updatedTicketData: Partial<Omit<Ticket, "id" | "purchaseDate">> = {
    eventName: data.eventName,
    eventDate: data.eventDate,
    venue: data.venue,
    quantity: data.quantity,
    ticketType: data.ticketType,
    price: data.price,
    attendeeName: data.attendeeName,
    attendeeEmail: data.attendeeEmail,
    attendeePhone: data.attendeePhone,
  };

  // Pass ID and updated data separately
  editTicket(ticketToEdit.id, updatedTicketData);

  alert("Ticket updated successfully!");
  handleClose();
};


  return (
    <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Attendee Name</Form.Label>
                <Form.Control
                  type="text"
                //   placeholder="Enter Attendee Name"
                  placeholder={ticketToEdit.attendeeName || "Enter Attendee Name"}
                 defaultValue={ticketToEdit.attendeeName || ""}
                  {...register("attendeeName")}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Phone Number"
                  {...register("attendeePhone")}
                />
              </Form.Group>
            </Col>
          </Row>
{/* 
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
                  {...register("price")}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row> */}

          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="secondary"
              onClick={() => {
                reset();
                handleClose();
              }}
              className="me-2"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTicket;
