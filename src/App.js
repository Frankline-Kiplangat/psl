import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/SenderFax">
          <SenderFax />
        </Route>
        <Route path="/SenderAI">
          <SenderAI />
        </Route>
        <Route path="/FaxAPI">
          <FaxAPI />
        </Route>
        <Route path="/FAQ">
          <FAQ />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
        <Route path="/Stories">
          <Stories />
        </Route>
        <Route path="/Partners">
          <Partners />
        </Route>
        <Route path="/Mission">
          <Mission />
        </Route>
        <Route path="/Careers">
          <Careers />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
