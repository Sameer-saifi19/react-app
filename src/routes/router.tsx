import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home";
import Register from "../pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Register", element: <Register /> },
    ],
  },
]);
