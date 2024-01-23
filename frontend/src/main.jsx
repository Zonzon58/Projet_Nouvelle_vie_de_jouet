import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Administration from "./assets/components/Administration";
import SheetAcceuil from "./assets/components/SheetAcceuil";
import Gestion from "./assets/components/Gestion";
import CreationCompteClient from "./assets/components/CreationCompteClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: async () => {
    //   return connexion.get(`/videos`).then((res) => res.data);
  },
  {
    path: "/Acceuil",
    element: <SheetAcceuil />,
    // loader: async () => {
    //   return connexion.get(`/videos`).then((res) => res.data);
  },
  // {
  //   path: "/videos/:id",
  //   element: <PageVideo />,
  //   loader: async ({ params }) => {
  //     return connexion.get(`/videos/${params.id}`).then((res) => res.data);
  //   },
  {
    path: "/Administration/",
    element: <Administration />,
    children: [
      {
        path: "",
        element: <CreationCompteClient />,
      },
      {
        path: "Gestion Administrative",
        element: <Gestion />,
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
