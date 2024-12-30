import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.js";
import ContactUspage from "./pages/ContactUsPage.js";
import ClientPage from "./pages/ClientPage.js";
import ProductPage from "./pages/ProductPage.js";
import AchievementPage from "./pages/AchievementPage.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/achievements" element={<AchievementPage />}></Route>
        <Route path="/clients" element={<ClientPage />}></Route>
        <Route path="/contact-us" element={<ContactUspage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
