// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
function App() {
  return (
    <Router>
    <Nav />
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
    </Router>
  );
}
export default App;
