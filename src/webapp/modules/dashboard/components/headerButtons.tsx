import React from 'react'

import type { IconType } from 'react-icons/lib';
import { MdCheckCircleOutline, MdPendingActions } from 'react-icons/md';
import {  FaTicketAlt, FaSpinner  } from 'react-icons/fa';
import { useTicketStore } from '../store/ticketstore';

export type Ticket = {
  id: string;
  status: "In Progress" | "Open" | "Closed";
};

const HeaderButtons:React.FC = () => {
  // const ticket  = useTicketStore((state) => state.tickets);
  // const total = ticket.length
const tickets: Ticket[] = useTicketStore((state) => state.tickets);

// Count tickets per status
const openCount = tickets.filter(ticket => ticket.status === "Open").length;
const resolvedCount = tickets.filter(ticket => ticket.status === "In Progress").length;
const closedCount = tickets.filter(ticket => ticket.status === "Closed").length;
const total = tickets.length;
 
  return (
  <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      
      <Card label="Total " value={total} Icon={FaTicketAlt} iconColor="#6c757d" iconBackgroundColor="#e9ecef" /> 

<Card label="Open " value={openCount} Icon={MdPendingActions} iconColor="#28a745" iconBackgroundColor="#d4edda" /> 

<Card label="In Progress" value={resolvedCount} Icon={FaSpinner} iconColor="#ffc107" iconBackgroundColor="#e9ecef" /> 

<Card label="Resolved " value={closedCount} Icon={MdCheckCircleOutline} iconColor="#6c757d" iconBackgroundColor="#fff8e1" /> 

    </div>
  )
}


interface CardProps {
  label: string;
  value: number | string;
  Icon: IconType  ; 
  iconColor?: string; 
  iconBackgroundColor?: string; 
}

const Card: React.FC<CardProps> = ({ label, value, Icon, iconColor = "#007bff", iconBackgroundColor = "#e0f0ff" }) => {
  return (
    <div
      style={{
       
        borderRadius: "8px",
        padding: "12px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        margin: "16px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor:'white',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ margin: 0, fontSize:'0.9rem'  }}>{label}</p>
        <p style={{ margin: 0, fontSize: "1.2rem", color: iconColor , fontWeight: "bold" }}>{value}</p>
      </div>

      {/* Icon Section */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding:'1rem',
          // width: "60px",
          // height: "50px",
          // border: `2px solid ${iconColor}`,
          borderRadius: "2rem",
          backgroundColor: iconBackgroundColor,
          cursor: "pointer",
        }}
      >
        <Icon size={22} color={iconColor} />
      </div>
    </div>
  );
};


export default HeaderButtons