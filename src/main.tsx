import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./view/layout";
import Home from "./view/home";
import StudentApplication from "./view/applications/student";
import TravelApplication from "./view/applications/travel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/student-application",
        element: <StudentApplication />,
      },
      {
        path: "/travel-application",
        element: <TravelApplication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
