import { Outlet, RouteObject } from "react-router-dom";
import MainPage from "./MainPage";




const MainPageRoutes: RouteObject = {
  path: "/",
  element: <Outlet />,
  errorElement: <div>404</div>,
  children: [
    {
      path: "",
      element: <MainPage />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "contact",
      element: <div>Contact</div>,
    },
  ],
};

export default MainPageRoutes;
