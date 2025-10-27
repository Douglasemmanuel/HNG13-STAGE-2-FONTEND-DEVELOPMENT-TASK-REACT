// PublicRoute.tsx
import React , { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../webapp/modules/auth/hooks/user_hooks";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { currentUser } = useCurrentUser();

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  // Redirect logged-in users
  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
