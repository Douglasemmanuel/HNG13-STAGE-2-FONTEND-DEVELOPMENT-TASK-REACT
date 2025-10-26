import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ticketSchema } from '../auth/validations/ticketValidation';
import  type{ TicketFormData } from  '../auth/validations/ticketValidation';
import {  toast } from "react-toastify";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {useTicketStore} from './store/ticketstore';


type TicketErrors = {
  title?: string;
  description?: string;
  assignee?: string;
  status?: string;
};


const CreateTicket: React.FC = () => {
  const navigate = useNavigate();
  const createTicket = useTicketStore((state) => state.createTicket);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState<"Open" | "In Progress" | "Closed">("Open"); // default Open

  const [errorsState, setErrorsState] = useState<TicketErrors>({});

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

    const ticketData: TicketFormData = { title, description, assignee, status };
    console.log("Ticket submitted:", ticketData);
    createTicket({ title, description, assignee, status });

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
        <h2 className="mb-0">Create Ticket</h2>
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
                onChange={(e) => setStatus(e.target.value as "Open" | "In Progress" | "Closed")}
                isInvalid={!!errorsState.status}
              >
                <option value="Open">Open</option>
                {/* <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option> */}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errorsState.status}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} className="mt-3">
            <Button type="submit" className="w-100" style={{ cursor: "pointer" }}>
              Create Ticket
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};


export default CreateTicket