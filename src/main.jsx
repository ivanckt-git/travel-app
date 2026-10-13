// import { createRoot } from 'react-dom/client'
// import './style.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import './style.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
);