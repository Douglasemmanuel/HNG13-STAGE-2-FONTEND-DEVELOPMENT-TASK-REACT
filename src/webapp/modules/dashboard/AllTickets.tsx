import React from 'react'
import { Table, Button } from "react-bootstrap";
import { useTicketStore } from "./store/ticketstore";
import { useNavigate } from "react-router-dom";
import  type{ Ticket } from './store/ticketstore';
import { HandIndex } from 'react-bootstrap-icons';
const AllTickets: React.FC = () => {
  const tickets = useTicketStore((state) => state.tickets);
  const deleteTicket = useTicketStore((state) => state.deleteTicket);
  const navigate = useNavigate();
  function handleDelete(ticketId: string): void {
  const confirmed = window.confirm("Are you sure you want to delete this ticket?");
  if (confirmed) {
    deleteTicket(ticketId);
  }
}

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
              <h2 className="mb-0">All Ticket</h2>
            </div>

      {tickets.length === 0 ? (
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
                <th></th>
                  <th></th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket: Ticket) => (
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
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/edit-ticket/${ticket.id}`)}
                  >
                    Edit
                  </Button>
                
                </td>
                  <td>
                 
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};




export default AllTickets