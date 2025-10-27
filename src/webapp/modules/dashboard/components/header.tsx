import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCurrentUser } from "../../auth/hooks/user_hooks";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useCurrentUser();
   const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logout();
    }
  };

  return (
 <div style={{ display: "flex", alignItems: "center", justifyContent:'space-between'  }}>
  <div>
    <h1>Dashboard Overview</h1>
    <p>Welcome, {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Guest"} 👋</p>
  </div>
  {currentUser && (
    <Button variant="danger" 
    // size="sm" 
    onClick={handleLogout}
      style={{ fontSize: '1.2rem', padding: '0.6rem 1.2rem' }}
    >
      Logout
    </Button>
  )}
</div>


  );
};

export default Header;
