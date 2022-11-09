import React from "react";
import { Row} from "react-bootstrap";
import HomeImage from "./images/psl_Hero.jpg"
import "../pages/style.css";
function Home() {
  return (
    <Row className="row">
      <div className="row">
        <div className="col-sm-6">
          <h className="header1">The #1 HIPAA-Compliant Online Fax Service</h>
          <br /><br />
          <div class="jumbotron">
            <p class="display-6">Healthcare providers: It's <br/>time to upgrade your<br/>faxing solution</p>
            <div className="details1">
            <p>Medsender is an easy-to-use, HIPAA-compliant online fax <br/>solution.
              Healthcare communications, simplified.</p>
            </div>
            <div className="buttons">
            <a href="/" className="button1">Book a Demo</a>
            <a href="/" className="button2">Watch Video</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <img
            src={HomeImage}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "400px", height:"330px", marginTop:"180px", width:"500px" }}
          />

        </div>

      </div>
</Row>
  );
}

export default Home;
