import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Logged from "../pages/Logged";
import Register from "../pages/Register";


// import { Container } from './styles';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Logged" element={<Logged />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
