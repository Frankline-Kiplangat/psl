// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from './pages/Footer';
function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Footer' element={<Footer />}/>

    </Routes>
    </Router>
  );
}
export default App;
