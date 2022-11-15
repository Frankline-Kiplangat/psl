// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from './pages/Footer';
import Home2 from './pages/Home2';
function App() {
  return (
    <Router>
    <NavBar />
    <Home />
    <Home2 />
    <Footer />
    <Routes>
    </Routes>
    </Router>
  );
}
export default App;
