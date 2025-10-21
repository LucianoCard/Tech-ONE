import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Components/Home.jsx";
import { Productos } from "./Components/Paginas/Productos.jsx";
import { Ofertas } from "./Components/Paginas/Ofertas.jsx";
import { SobreNosotros } from "./Components/Paginas/SobreNosotros.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Productos",
    element: <Productos />,
  },
  {
    path: "/Ofertas",
    element: <Ofertas />,
  },
  {
    path: "/Sobre-nosotros",
    element: <SobreNosotros />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
