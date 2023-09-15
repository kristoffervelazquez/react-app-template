import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthRoutes from "../pages/auth/routes";
import MainPageRoutes from "../pages/main/routes";


const router = createBrowserRouter([
  AuthRoutes,
  MainPageRoutes,
  {
    path: "*",
    element: <Navigate to="/" />,
  }
]);

export default router;
