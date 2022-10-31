import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const LandingPage = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">MEDSENDER</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">
                    <h1>Medsender Fax</h1>
                    <p>The easiets way to send and receive your patient forms and faxes</p>
                </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <h1>Med Sender AI</h1>
                    <p>Get faxes loaded into the patient chart with easy EMR integration</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <h1>Medsender Fax API</h1>
                    <p>Free yourself up from manual, time-consuming tasks</p>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#">Customer Stories</NavDropdown.Item>
                    <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#">Support</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Partners</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
                <NavDropdown title="About" id="navbarScrolllingDropdown">
                <NavDropdown.Item href="#">Our Mission</NavDropdown.Item>
                <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <a href="/" target="self">Log In</a>
              <Button><a href="/" class="btn btn primary">Book a Demo</a></Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};
export default LandingPage;