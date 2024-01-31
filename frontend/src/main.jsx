import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Acceuil from "./assets/pages/Acceuil";
import Developpement from "./assets/components/Menu-Pages/Developpement/Developpement";
import Jeuxsociete from "./assets/components/Menu-Pages/Jeuxsociete/Jeuxsociete";
import Multimedia from "./assets/components/Menu-Pages/Multimedia/Multimedia";
import Bibliotheque from "./assets/components/Menu-Pages/Bibliothèque/Bibliotheque";
import Jeuxexterieur from "./assets/components/Menu-Pages/Jeux_exterieur/Jeuxexterieur";
import Login from "./assets/components/Menu-Pages/Login/Login";
import Inscription from "./assets/components/Menu-Pages/Inscription/Inscription";
import Contact from "./assets/components/Menu-Pages/Formulaire/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/developpement",
    element: <Developpement />,
  },
  {
    path: "jeux_de_société",
    element: <Jeuxsociete />,
  },
  {
    path: "multimédia",
    element: <Multimedia />,
  },
  {
    path: "bibliothèque",
    element: <Bibliotheque />,
  },
  {
    path: "Jeux_extérieur",
    element: <Jeuxexterieur />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
