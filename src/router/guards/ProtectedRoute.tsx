import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuthStore } from "../../store/useAuthStore";

interface ProtectedRouteProps {
  element?: React.ReactNode
  isAuthRoute?: boolean
}

const ProtectedRoute = ({ element = <Outlet />, isAuthRoute = false }: ProtectedRouteProps) => {
  // const { isAuth: isAuthenticated } = useAuthStore();
  // console.log("isAuthenticated", isAuthenticated);
  const isAuthenticated = false

  if (isAuthenticated && isAuthRoute) {
    return <Navigate to="/" />
  }

  if (isAuthenticated && !isAuthRoute) {
    return <>{element}</>
  }
  if (!isAuthenticated && isAuthRoute) {
    return <>{element}</>
  }
  return <Navigate to="/auth" />;
};

export default ProtectedRoute;
