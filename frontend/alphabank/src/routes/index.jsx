import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home"
import Logged from "../pages/Logged/index";
import Register from "../pages/Register/index";


// import { Container } from './styles';

function Router() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Logged" element={<Logged />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
  );
}

export default Router;
