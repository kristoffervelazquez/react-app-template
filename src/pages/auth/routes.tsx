import { RouteObject } from "react-router-dom";
import ProtectedRoute from "../../router/guards/ProtectedRoute";
import AuthView from "./AuthView";


const AuthRoutes: RouteObject = {
  path: "auth",
  element: <ProtectedRoute isAuthRoute={true} />,
  children: [
    {
      path: "",
      element: <AuthView />,
    },
    {
      path: "forgot-password",
      element: <div>Forgot Password</div>,
    }
  ],
};


export default AuthRoutes;
