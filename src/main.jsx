import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Dokon from "./companent/Nav/uzumInput/Dokon.jsx";
import Nav from "./companent/Nav/Nav.jsx";
import Card from "./companent/Cardlar/Card.jsx";
import Carusel from "./companent/Carusel/Carusel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
);
