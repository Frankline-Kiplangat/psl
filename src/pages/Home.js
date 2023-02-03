import React from "react";
import img1 from "./images/img1.jpg"
import "../pages/style.css";
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.png"
import img6 from "./images/img6.png"

function Home() {
  return (
    <div className="container">
    <br /><br />
      <div className="row">
      <div className="col-sm-6">
        <h className="header1">The #1 HIPAA-Compliant Online Fax Service</h>
        <br />
        <div class="jumbotron">
          <p class="display-6">Healthcare providers: It's <br />time to upgrade your<br />faxing solution</p>
          <div className="details1">
            <p>Medsender is an easy-to-use, HIPAA-compliant online fax <br />solution.
              Healthcare communications, simplified.</p>
          </div><br/><br/>
          <div className="buttons">
            <a href="/Contact" className="button1">Book a Demo</a>
            <a href="https://www.youtube.com/" target="_blank" className="button2">Watch Video</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <img
          src={img1}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "400px", height: "330px", marginTop: "180px", width: "500px" }} />
      </div>
      </div>
      <div className="grid-container">
        <h5>Trusted by thousands of healthcare providers</h5><br />
        <img className="grid-item" src={img3} alt="img3" />
        <img className="grid-item" src={img4} alt="img4" />
        <img className="grid-item" src={img5} alt="img5" />
        <img className="grid-item" src={img6} alt="img6" />
      </div>
      <div>
        <h1><img className="img-logo" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424106173caba01_logo_icon%403x.svg" /><br /><br />
          100% HIPAA-compliant faxing
        </h1>
      </div>

    </div>
  );
}

export default Home;
