import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Billing from "./pages/billingaddress/Billing";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/billing" element={<Billing/>} />
      </Routes>
    </Router>
  )
};

export default App
