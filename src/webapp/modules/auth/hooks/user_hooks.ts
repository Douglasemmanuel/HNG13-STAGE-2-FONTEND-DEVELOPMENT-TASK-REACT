import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export interface CurrentUser {
  firstName: string;
  lastName: string;
  email: string;
}

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
    const navigate = useNavigate();
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("ticketapp_session");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      }
    } catch (err) {
      console.error("Failed to parse currentUser from localStorage", err);
      setCurrentUser(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setCurrentUser(null);
    navigate('/login')
  };

  return { currentUser,  setCurrentUser,logout };
};
