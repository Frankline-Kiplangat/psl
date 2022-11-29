// import logo from './logo.svg';
import React from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Home2 from "./pages/Home2";
import LogIn from "./pages/Authentication/LogIn";
import SenderFax from "./pages/Solutions/SenderFax";
import SenderAI from "./pages/Solutions/SenderAI";
import FaxAPI from "./pages/Solutions/FaxAPI";
import FAQ from "./pages/Resources/FAQ";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/Home">
          <Home />
          <Home2 />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/SenderFax">
          <SenderFax />
        </Route>
        <Route exact path="/SenderAI">
          <SenderAI />
        </Route>
        <Route exact path="/FaxAPI">
          <FaxAPI />
        </Route>
        <Route exact path="/FAQ">
          <FAQ />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
