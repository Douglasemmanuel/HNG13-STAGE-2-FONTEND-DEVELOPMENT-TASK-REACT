import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useTicketStore } from "./store/ticketstore";
import type { TicketFormData } from "../auth/validations/ticketValidation";

type TicketErrors = {
  title?: string;
  description?: string;
  assignee?: string;
  status?: string;
};

const EditTickets: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const getTicketById = useTicketStore((state) => state.getTicket);
  const updateTicket = useTicketStore((state) => state.updateTicket);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState<"Open" | "In Progress" | "Closed">("Open");
  const [errorsState, setErrorsState] = useState<TicketErrors>({});

  // Load existing ticket data
  useEffect(() => {
    if (!id) return;
    const ticket = getTicketById(id);
    if (ticket) {
      setTitle(ticket.title);
      setDescription(ticket.description);
      setAssignee(ticket.assignee);
      setStatus(ticket.status);
    } else {
      toast.error("Ticket not found");
      navigate("/dashboard");
    }
  }, [id, getTicketById, navigate]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorsState({});

    const newErrors: TicketErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!assignee.trim()) newErrors.assignee = "Assignee is required";
    if (!status.trim()) newErrors.status = "Status is required";

    if (Object.keys(newErrors).length > 0) {
      setErrorsState(newErrors);
      return;
    }

    const updatedData: TicketFormData = { title, description, assignee, status };
    updateTicket(id!, updatedData);
    toast.success("Ticket updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-center position-relative mb-4">
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(-1)}
          className="position-absolute start-0"
        >
          Back
        </Button>
        <h2 className="mb-0">Edit Ticket</h2>
      </div>

      <Form onSubmit={onSubmit} className="mt-4">
        <Row>
          {/* Title */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isInvalid={!!errorsState.title}
              />
              <Form.Control.Feedback type="invalid">
                {errorsState.title}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Description */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={!!errorsState.description}
              />
              <Form.Control.Feedback type="invalid">
                {errorsState.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Assignee */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="assignee">
              <Form.Label>Assignee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter assignee name"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                isInvalid={!!errorsState.assignee}
              />
              <Form.Control.Feedback type="invalid">
                {errorsState.assignee}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Status */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "Open" | "In Progress" | "Closed")
                }
                isInvalid={!!errorsState.status}
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errorsState.status}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} className="mt-3">
            <Button type="submit" className="w-100" style={{ cursor: "pointer" }}>
              Save Changes
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditTickets;
