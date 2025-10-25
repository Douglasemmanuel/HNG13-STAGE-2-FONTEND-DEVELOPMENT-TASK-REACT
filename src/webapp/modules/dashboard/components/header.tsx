import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h1>Dashboard Overview</h1>
        <p>Monitor your help desk performance and tickets status.</p>
      </div>
      <div>
        <Button variant="danger" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
