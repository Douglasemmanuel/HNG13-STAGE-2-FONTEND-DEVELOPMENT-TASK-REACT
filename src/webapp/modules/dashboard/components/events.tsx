import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Douglas from '../../../../images/davido.jpg' ;
import EventTicketModal from './createEvents';
import useTicketStore from "../store/ticketStore";
import type { Ticket } from "../store/ticketStore";
import { useState } from 'react';
import '../../../css/ticket.css'
import EditTicket from './EditTickets';
import TicketDetailsModal from './UserTickets';
import { eventsData } from '../../../data/event';
const Events:React.FC = () => {

const tickets = useTicketStore((state) => state.tickets);

  if (tickets.length === 0) {
    
  }
  return (
    <div style={{display:'flex' , flexDirection:'column' , gap:'3rem' , flexWrap:'wrap'}}>
      <UpcomingEvents/>
    {tickets.length > 0 &&   <MyEvent/>}
    </div>
  )
}
export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  tickets: {
    type: "Regular" | "VIP" | "Student";
    price: number;
  }[];
  ticketPrices: Record<"Regular" | "VIP" | "Student", number>;
}


const UpcomingEvents: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleClose = () => setShow(false);

  // compute ticketPrices for each event
  const eventsWithTicketPrices: Event[] = eventsData.map((e) => {
  const ticketPrices = e.tickets.reduce((acc, t) => {
    acc[t.type as "Regular" | "VIP" | "Student"] = t.price;
    return acc;
  }, {} as Record<"Regular" | "VIP" | "Student", number>);

  // ✅ Also cast each ticket's type properly
  const typedTickets = e.tickets.map((t) => ({
    ...t,
    type: t.type as "Regular" | "VIP" | "Student",
  }));

  return {
    ...e,
    tickets: typedTickets,
    ticketPrices,
  };
});

  // ✅ FIX: this expects the full event object
  const handleShow = (event: Event) => {
    setSelectedEvent(event);
    setShow(true);
  };

  return (
    <div>
      <h3>Upcoming Events</h3>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {eventsWithTicketPrices.map((event) => (
          <Card
            key={event.id}
            style={{ width: "18rem", display: "flex", flexDirection: "column" }}
          >
            <div style={{ height: "180px", overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src={event.image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Card.Title>{event.title}</Card.Title>
              <Card.Text style={{ flexGrow: 1 }}>{event.description}</Card.Text>

              {/* ✅ Pass the full event object */}
              <Button variant="primary" onClick={() => handleShow(event)}>
                Create Tickets
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* ✅ Modal renders the actual selected event dynamically */}
      {selectedEvent && (
        <EventTicketModal
          show={show}
          handleClose={handleClose}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

const MyEvent: React.FC = () => {
  const tickets = useTicketStore((state) => state.tickets);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowEdit = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
    setSelectedTicket(null);
  };

  const handleShowDetails = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedTicket(null);
  };

  const handleDelete = (ticket: Ticket) => {
    if (window.confirm(`Are you sure you want to delete ticket for ${ticket.eventName}?`)) {
      useTicketStore.getState().deleteTicket(ticket.id);
      alert("Ticket deleted successfully!");
    }
  };
  
  return (
    <>
      <h1>My Tickets</h1>
      <div style={{display:'flex' , flexDirection:'row' , gap:'1rem' , flexWrap:'wrap'}}>
       
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            event={ticket}
            onEdit={handleShowEdit}
            onDetails={handleShowDetails}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {selectedTicket && showEdit && (
        <EditTicket
          show={showEdit}
          handleClose={handleCloseEdit}
          ticketToEdit={selectedTicket}
        />
      )}

      {selectedTicket && showDetails && (
        <TicketDetailsModal
          show={showDetails}
          handleClose={handleCloseDetails}
          ticket={selectedTicket}
        />
      )}
    </>
  );
};



interface TicketCardProps {
  event: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDetails: (ticket: Ticket) => void;
  onDelete: (ticket: Ticket) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ event, onEdit, onDetails, onDelete }) => {
  return (
   <div className="ticket">
  <div className="ticket-header">
    <h2>{event.eventName}</h2>
    <span className="ticket-date">{event.eventDate}</span>
  </div>

  <div className="ticket-body">
    <p><strong>Venue:</strong> {event.venue}</p>
    <p><strong>Seat:</strong> 21A</p>
    <p><strong>Ticket TYPE:</strong> {event.ticketType}</p>
  </div>

  <div className="ticket-footer">
    <p>Order ID: {event.id}</p>
    
  </div>
  <div className="ticket-actions">
      <button className="ticket-btn" onClick={() => onDetails(event)}>Details</button>
      <button className="ticket-btn" onClick={() => onEdit(event)}>Edit</button>
      <button className="ticket-btn" onClick={() => onDelete(event)}>Delete</button>
    </div>
</div>

  );
};





export default Events;