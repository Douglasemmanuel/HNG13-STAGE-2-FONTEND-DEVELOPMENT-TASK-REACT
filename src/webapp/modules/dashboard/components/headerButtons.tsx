import React from 'react'
// import { FaTicketAlt } from 'react-icons/fa';
import { FaTicketAlt, FaEnvelopeOpenText, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import type { IconType } from 'react-icons/lib';
// import { IconType } from "react-icons";
const HeaderButtons:React.FC = () => {
  return (
  <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        // justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Card label="Total Tickets" value={100} Icon={FaTicketAlt} iconColor="#6c757d" iconBackgroundColor="#e9ecef" /> {/* Gray for total/closed */} 

<Card label="Open Tickets" value={55} Icon={FaEnvelopeOpenText} iconColor="#28a745" iconBackgroundColor="#d4edda" /> {/* Green for open */}

<Card label="Resolved Tickets" value={30} Icon={FaCheckCircle} iconColor="#6c757d" iconBackgroundColor="#e9ecef" /> {/* Gray for closed/resolved */}

<Card label="Escalated Tickets" value={15} Icon={FaExclamationTriangle} iconColor="#ffc107" iconBackgroundColor="#fff8e1" /> {/* Amber for in_progress/escalated */}

    </div>
  )
}


interface CardProps {
  label: string;
  value: number | string;
  Icon: IconType  ; 
  iconColor?: string; // optional: icon color
  iconBackgroundColor?: string; // optional: icon background
}

const Card: React.FC<CardProps> = ({ label, value, Icon, iconColor = "#007bff", iconBackgroundColor = "#e0f0ff" }) => {
  return (
    <div
      style={{
        border: `2px solid ${iconColor}`,
        borderRadius: "8px",
        padding: "12px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        margin: "16px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* Text Section */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: 0, fontSize: "1.2rem", color: iconColor }}>{value}</p>
      </div>

      {/* Icon Section */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          border: `2px solid ${iconColor}`,
          borderRadius: "12px",
          backgroundColor: iconBackgroundColor,
          cursor: "pointer",
        }}
      >
        <Icon size={25} color={iconColor} />
      </div>
    </div>
  );
};


export default HeaderButtons