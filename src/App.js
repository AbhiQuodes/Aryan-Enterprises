import React, { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.js";
import ContactUspage from "./pages/ContactUsPage.js";
import ClientPage from "./pages/ClientPage.js";
import ProductPage from "./pages/ProductPage.js";
import AchievementPage from "./pages/AchievementPage.js";


function App() {
  const [deferredPrompt ,setDeferredPrompt] = useState(null);
  useEffect(()=>{
    window.addEventListener("beforeinstallprompt",(e)=>{
      e.preventDefault();
      setDeferredPrompt(e);
    });
  },[]);

  const handleInstall =()=>{
    if(deferredPrompt){
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult)=>{
        if(choiceResult.outcome === "accepted")
        {
          console.log("User accepted the install prompt");

        }
        setDeferredPrompt(null);
      });
    }
  };
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/achievements" element={<AchievementPage />}></Route>
        <Route path="/clients" element={<ClientPage />}></Route>
        <Route path="/contact-us" element={<ContactUspage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
      <div>
        <h1>Welcome to Aryan Enterprises</h1>
        {
          deferredPrompt &&(
            <button onClick={handleInstall}> Install App</button>
          )
        }
      </div>
    </div>
  );
}

export default App;
