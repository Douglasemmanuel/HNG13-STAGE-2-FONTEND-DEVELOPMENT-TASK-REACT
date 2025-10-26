import { create } from "zustand";
import { persist } from "zustand/middleware";

// Ticket type
export type Ticket = {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: "Open" | "In Progress" | "Closed";
};

// Store interface
interface TicketStore {
  tickets: Ticket[];
  createTicket: (ticket: Omit<Ticket, "id">) => void;
  updateTicket: (id: string, data: Partial<Ticket>) => void;
  deleteTicket: (id: string) => void;
  getTicket: (id: string) => Ticket | undefined;
  resetTickets: () => void;
}

// Create the store with persistence
export const useTicketStore = create<TicketStore>()(
  persist(
    (set, get) => ({
      tickets: [],

      createTicket: (ticket) => {
        const newTicket: Ticket = { id: Date.now().toString(), ...ticket };
        set((state) => ({ tickets: [...state.tickets, newTicket] }));
      },

      updateTicket: (id, data) => {
        set((state) => ({
          tickets: state.tickets.map((t) => (t.id === id ? { ...t, ...data } : t)),
        }));
      },

      deleteTicket: (id) => {
        set((state) => ({
          tickets: state.tickets.filter((t) => t.id !== id),
        }));
      },

      getTicket: (id) => get().tickets.find((t) => t.id === id),

      resetTickets: () => set({ tickets: [] }),
    }),
    {
      name: "myticket-storage",
    }
  )
);
