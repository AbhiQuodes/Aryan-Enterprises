import ReactDOM from 'react-dom/client';
import React from 'react'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("/serviceWorker.js").then(()=>{
      console.log("service Worker registered !")
    }).catch((error)=>{
      console.log("service Worker registration failed : ",error)
    });
  })
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
