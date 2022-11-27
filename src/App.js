// import logo from './logo.svg';
import React from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Footer from "./pages/Footer";
import Home2 from "./pages/Home2";
import LogIn from "./pages/Authentication/LogIn";
import SenderFax from "./pages/Solutions/SenderFax";
import SenderAI from "./pages/Solutions/SenderAI";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
          <Home2 />
          <Footer />
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
        {/* <Route exact path="/footer">
          <Footer />
        </Route> */}
        {/* <Route path="/LogIn" exact element={<LogIn />} /> */}
        {/* <Route path="/SenderFax" exact element={<SenderFax />} /> */}
      </Switch>
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <Home2 /> */}
      {/* <SenderAI /> */}
      {/* <LogIn /> */}
      {/* <SenderFax /> */}
      {/* <Footer /> */}
      {/* <Switch>
    <Route  path='/LogIn' exact element={<LogIn />} />
    <Route  path='/SenderFax' exact element={<SenderFax />} />

    </Switch> */}
    </Router>
  );
}
export default App;
