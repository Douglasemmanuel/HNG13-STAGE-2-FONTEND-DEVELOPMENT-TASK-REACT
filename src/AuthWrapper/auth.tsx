import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser} from '../webapp/modules/auth/hooks/user_hooks'
interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useCurrentUser();

  // Still loading, don't redirect yet
  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  // Redirect if not authenticated
  if (currentUser === null) {
    return <Navigate to="/login" replace />;
  }
  

  return children;
};

export default ProtectedRoute;