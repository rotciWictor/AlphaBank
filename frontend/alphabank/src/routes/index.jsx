import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home"
import Logged from "../pages/Logged/index";
import Register from "../pages/Register/index";
import Extract from "../pages/Extract/index";
import AccountDeposit from "../pages/AccountDeposit/index";
import ChangePassword from "../pages/ChangePassword/index";
import CloseAccount from "../pages/CloseAccount/index"
import Transfers from "../pages/Transfers/index"
import VirtualCard from "../pages/VirtualCard/index"
import Profile from "../pages/Profile/index"

// import { Container } from './styles';

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Logged" element={<Logged />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Extract" element={<Extract />} />
      <Route path="/accountdeposit" element={<AccountDeposit />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/closeaccount" element={<CloseAccount />} />
      <Route path="/transfers" element={<Transfers />} />
      <Route path="/virtualcard" element={<VirtualCard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
