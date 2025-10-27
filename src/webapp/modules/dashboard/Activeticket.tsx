import React from 'react';
import { Table , Button } from "react-bootstrap";
import { useTicketStore } from "./store/ticketstore";
import type { Ticket } from './store/ticketstore';
import { useNavigate } from 'react-router-dom';

const AllTickets: React.FC = () => {
  const tickets = useTicketStore((state) => state.tickets);
  const navigate = useNavigate()
  // Filter out tickets with status "Closed"
  const openTickets = tickets.filter((ticket: Ticket) => ticket.status !== "Closed");

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
        <h2 className="mb-0">Active Tickets</h2>
      </div>

      {openTickets.length === 0 ? (
        <p className="text-center">No tickets available.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {openTickets.map((ticket: Ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>
                  {ticket.title.length > 12
                    ? `${ticket.title.slice(0, 12)}...`
                    : ticket.title}
                </td>
                <td>
                  {ticket.description.length > 12
                    ? `${ticket.description.slice(0, 12)}...`
                    : ticket.description}
                </td>
                <td>{ticket.assignee}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AllTickets;
