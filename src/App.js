// import logo from './logo.svg';
import React from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import LogIn from "./pages/Authentication/LogIn";
import Register from "./pages/Authentication/Register";
import SenderFax from "./pages/Solutions/SenderFax";
import SenderAI from "./pages/Solutions/SenderAI";
import FaxAPI from "./pages/Solutions/FaxAPI";
import FAQ from "./pages/Resources/FAQ";
import Contact from "./pages/Resources/Contact";
import Support from "./pages/Resources/Support";
import Stories from "./pages/Resources/Stories";
import Partners from "./pages/Resources/Partners";
import Mission from "./pages/About/Mission";
import Careers from "./pages/About/Careers";
import Pricing from "./pages/Resources/Pricing";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
          <Home2 />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/Register">
          <Register />
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
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Support">
          <Support />
        </Route>
        <Route exact path="/Stories">
          <Stories />
        </Route>
        <Route exact path="/Partners">
          <Partners />
        </Route>
        <Route exact path="/Mission">
          <Mission />
        </Route>
        <Route exact path="/Careers">
          <Careers />
        </Route>
        <Route exact path="/Pricing">
          <Pricing />
        </Route>
      </Switch>
  
    </Router>
  );
}
export default App;
