// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
function App() {
  return (
    <Router>
    <LandingPage />
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
    </Router>
  );
}
export default App;
