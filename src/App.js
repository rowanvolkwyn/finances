import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./scenes/Dashboard.jsx";
import Portfolio from "./scenes/Portfolio.jsx";
import Strategy from "./scenes/Strategy.jsx";
import Budget from "./scenes/Budget.jsx";
import Transactions from "./scenes/Transactions.jsx";
import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="fixed flex w-screen top-20 dark" >
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
    </div>
    
  );
}

export default App;
