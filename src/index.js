import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {
  Navigation,
  Home,
  Lookup,
  Vote,
} from './';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lookup" element={<Lookup />} />
      <Route path="/vote" element={<Vote />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as Navigation } from "./Navigation";
export { default as Home } from "./Home";
export { default as Lookup } from "./Lookup";
export { default as Vote } from "./Vote";