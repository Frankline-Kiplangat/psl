// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/LandingPage" element={<LandingPage/>} />
 
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default LandingPage;
