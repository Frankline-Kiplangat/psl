import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "./images/psl_Hero.jpg"
function home() {
  return (
    <section>
        <Container className="home">
            <Col>
            <Row>
            <div>
                <h4>The #1 HIPAA-Compliant Online Fax Service</h4>
                <br/>
                <br/>
                <p className="col-2">Healthcare providers: It’s time to upgrade your faxing solution</p>
                <img alt="" src={HomeImage} />
                <br/>
                <p>Medsender is an easy-to-use, HIPAA-compliant online fax solution. 
                Healthcare communications, simplified.</p>
                <a href="/" className="button">Book a Demo</a> <a href="/" className="button">Watch Video</a>
            </div>
            </Row>
            </Col>
        </Container>
    </section>
  );
}

export default home;
