import { useEffect, useState } from "react";
import "./App.css";

import Home from "./companent/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Card from "./companent/Cardlar/Card";
import Nav from "./companent/Nav/Nav";
import Produktpej from "./companent/Cardlar/Produktpej";
import SavolJavoblar from "./companent/SavolJavoblar";
import Catigores from "./companent/Catigores";

function App() {
  return (
    <div className=" container   m-auto p-3">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardui/:id" element={<Produktpej />} />
        <Route path="/savoljavoblar" element={<SavolJavoblar />} />
        <Route path="/catigores" element={<Catigores />} />
      </Routes>
    </div>
  );
}

export default App;
