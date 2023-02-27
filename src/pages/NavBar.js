import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../pages/NavBar.css";
import logo from "../pages/images/logo.png"
function NavBar() {
  return (
    <Navbar collapseOnClick fixed="top" className="py-3" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} style={{ height: "6vh", width: "150px" }} className="footer-logo" alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
          <Nav
            className="me-auto justify-content-end"
            navbarScroll>
            <NavDropdown className="solutions" title="Solutions" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/SenderFax">
                <img alt="img1" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg" />
                <h6>Medsender Fax</h6>
                <p className='p1'>The easiest way to send and receive your<br /> patient forms and faxes</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/SenderAI">
                <img alt="img2" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424102749caba04_MedSender%20AI%403x.svg" />
                <h6>Med Sender AI</h6>
                <p className='p1'>Get faxes loaded into the patient chart with<br /> easy EMR integration</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/FaxAPI">
                <img alt="img3" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424108d1dcaba07_Medsender%20Fax%20API%403x.svg" />
                <h6>Medsender Fax API</h6>
                <p className='p1'>Free yourself up from manual, time-consuming <br /> tasks</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/FAQ">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Stories">Customer Stories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Support">Support</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="navbarScrollingDropdown" href="/Partners">Partners</Nav.Link>
            <Nav.Link id="navbarScrollingDropdown" href="/Pricing">Pricing</Nav.Link>
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Mission">Our Mission</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Careers">Careers</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <div>
              <Nav className='justify-content-end'>
                <Nav.Link target="_blank" className="log-in" href="/LogIn">Log in</Nav.Link>
                <a href="/Contact" target="_blank" className="button">Book a Demo</a>
              </Nav>
            </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
