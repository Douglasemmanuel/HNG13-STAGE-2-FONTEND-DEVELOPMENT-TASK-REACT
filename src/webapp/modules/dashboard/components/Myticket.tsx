import React from 'react'
import '../../../css/card.css';
import { FaPlus, FaTicketAlt, FaSpinner  , FaClock} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import type { IconType } from 'react-icons';
const Myticket:React.FC = () => {
  const navigate = useNavigate()
 const handleClick = (routeName: string) => {
    navigate(`/${routeName}`);
  };

  return (
    
    <div>
     <h3>Quick Actions</h3>
      <div style={{  display: 'flex', gap: '20px' }}>
      <Card
        Icon={FaPlus}
        title="Add New"
        subtitle="Create something new"
        onClick={() => handleClick('create-ticket')}
        iconColor='blue'
      />

      <Card
        Icon={FaTicketAlt}
        title="Tickets"
        subtitle="View your tickets"
        onClick={() => handleClick('all-tickets')}
        iconColor='green'
      />

      <Card
        Icon={FaClock}
        title="Active Tickets"
        subtitle="Tickets that are still in progress"
        onClick={() => handleClick('active-tickets')}
        iconColor='orange'
      />
    </div>
    </div>
  )
}


interface CardProps {
  Icon: IconType;
  title: string;
  subtitle: string;
  onClick?: () => void;
   iconColor?: string; 
}

const Card: React.FC<CardProps> = ({ Icon, title, subtitle, onClick , iconColor }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-icon">
        <Icon   color={iconColor} size={32}/>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
     
    </div>
  );
};


export default Myticket