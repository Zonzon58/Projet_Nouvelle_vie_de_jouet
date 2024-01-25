import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Acceuil from "./assets/pages/Acceuil";
import Developpement from "./assets/components/Menu-Pages/Developpement";
import Inscription from "./assets/components/Menu-Pages/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Acceuil />,
      },
      {
        path: "/developpement",
        element: <Developpement />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
