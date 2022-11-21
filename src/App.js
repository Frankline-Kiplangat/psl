// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from './pages/Footer';
import Home2 from './pages/Home2';
import LogIn from './pages/Authentication/LogIn';
import SenderFax from "./pages/Solutions/SenderFax";
function App() {
  return (
    <Router>
    <NavBar />
    <Home />
    <Home2 />
    <Routes>
    <Route  path='/LogIn' exact element={<LogIn />} />
    <Route  path='/SenderFax' exact element={<SenderFax />} />
    </Routes>
    <Footer />
    </Router>
  );
}
export default App;
