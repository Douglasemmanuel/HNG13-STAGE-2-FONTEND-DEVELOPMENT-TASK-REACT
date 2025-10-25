// import { create } from "zustand";

// // Store the full ticket data
// export interface Ticket {
  
 

//   id: number;
//   status: "open" | "in_progress" | "closed";
//   eventName: string;
//   eventDate: string;
//   venue: string;
//   quantity: string;
//   attendeeName?: string;
//   attendeeEmail?: string;
//   attendeePhone?: string;
//   ticketType: "VIP" | "Regular" | "Student";
//   price: number;
//   purchaseDate: number; // timestamp
// }

// interface TicketStore {
//   tickets: Ticket[];
//   addTicket: (ticket: Omit<Ticket, "id" | "status" | "purchaseDate">) => void;
//   deleteTicket: (id: number) => void;
//   editTicket: (id: number, updatedTicket: Partial<Omit<Ticket, "id">>) => void;
// }

// const useTicketStore = create<TicketStore>((set) => ({
//   tickets: [],

//   addTicket: (ticket) =>
//     set((state) => ({
//       tickets: [
//         ...state.tickets,
//         { id: Date.now(), status: "open", purchaseDate: Date.now(), ...ticket },
//       ],
//     })),

//   deleteTicket: (id) =>
//     set((state) => ({
//       tickets: state.tickets.filter((ticket) => ticket.id !== id),
//     })),

//   editTicket: (id, updatedTicket) =>
//     set((state) => ({
//       tickets: state.tickets.map((ticket) =>
//         ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
//       ),
//     })),
// }));

// export default useTicketStore;



import { create } from "zustand";

// Event type
export interface Event {
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

// Ticket derived from event
export interface Ticket {
  id: number;
  status: "open" | "in_progress" | "closed";
  eventId: number; // reference to event
  eventName: string;
  eventDate: string;
  venue: string;
  quantity: string; // keep as string
  ticketType: keyof Event["ticketPrices"];
  price: number;
  attendeeName?: string;
  attendeeEmail?: string;
  attendeePhone?: string;
  purchaseDate: number; // timestamp
}

interface TicketStore {
  tickets: Ticket[];
  addTicket: (ticket: Omit<Ticket, "id" | "status" | "purchaseDate">) => void;
  deleteTicket: (id: number) => void;
  editTicket: (id: number, updatedTicket: Partial<Omit<Ticket, "id" | "purchaseDate">>) => void;
}

const useTicketStore = create<TicketStore>((set) => ({
  tickets: [],

  addTicket: (ticket) =>
    set((state) => ({
      tickets: [
        ...state.tickets,
        {
          id: Date.now(),
          status: "open",
          purchaseDate: Date.now(),
          ...ticket,
        },
      ],
    })),

  deleteTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((ticket) => ticket.id !== id),
    })),

  editTicket: (id, updatedTicket) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
      ),
    })),
}));

export default useTicketStore;
