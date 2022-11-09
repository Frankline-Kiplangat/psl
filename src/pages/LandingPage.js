import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../pages/Landing.css";
const LandingPage = () => {
    return (
        <Navbar style={{position: "fixed"}} className="py-3" bg="white" expand="lg">
          <Container fluid>
          <img alt="logo" id="logo1" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410798ecab9f2_medsender_logo%25402x-p-500.png"/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <NavDropdown className="" title="Solutions" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">
                    <img alt="img1"src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg"/>
                    <h6>Medsender Fax</h6>
                    <p className='p1'>The easiest way to send and receive your patient forms and faxes</p>
                </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <img alt="img2" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424102749caba04_MedSender%20AI%403x.svg"/>
                    <h6>Med Sender AI</h6>
                    <p className='p1'>Get faxes loaded into the patient chart with easy EMR integration</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <img alt="img3" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424108d1dcaba07_Medsender%20Fax%20API%403x.svg"/>
                    <h6>Medsender Fax API</h6>
                    <p className='p1'>Free yourself up from manual, time-consuming tasks</p>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#">Customer Stories</NavDropdown.Item>
                    <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#">Support</NavDropdown.Item>
                </NavDropdown>
                  <Nav.Link id="navbarScrollingDropdown" href="#">Partners</Nav.Link>
                  <Nav.Link id="navbarScrollingDropdown" href="#">Pricing</Nav.Link>
                <NavDropdown title="About" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Our Mission</NavDropdown.Item>
                <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                </NavDropdown>
                <div className="vertical"></div> <br/>
              <Nav.Link id="navbarScrollingDropdown" className="log-in" href="#">Log in</Nav.Link>
              <a href="/" className="button">Book a Demo</a>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default LandingPage;