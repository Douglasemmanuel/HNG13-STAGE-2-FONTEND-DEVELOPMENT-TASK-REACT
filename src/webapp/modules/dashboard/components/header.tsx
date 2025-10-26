import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCurrentUser } from "../../auth/hooks/user_hooks";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useCurrentUser();

  return (
 <div style={{ display: "flex", alignItems: "center", justifyContent:'space-between'  }}>
  <div>
    <h1>Dashboard Overview</h1>
    <p>Welcome, {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Guest"} 👋</p>
  </div>
  {currentUser && (
    <Button variant="outline-danger" size="sm" onClick={logout}>
      Logout
    </Button>
  )}
</div>


  );
};

export default Header;
