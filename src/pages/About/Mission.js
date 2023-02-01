import React from "react";
import "../About/About.css"
import logo from "../images/logo.png"
import img21 from "../images/img21.png"
import Footer from '../Footer'
function Mission() {
    return (
        <div class="container-fluid">
            <div className="story2">
                <h3>Our mission is to help healthcare professionals focus less on
                <br/> administrative work, and more on what really matters.
                </h3>
            </div><br/>
            <div className="grid">
                <img src={logo} style={{ height: "35px", width: "160px" }} className="footer-logo" alt="" /><br />
                <h5>We believe that the way healthcare practices 
                <br/>communicate is broken -- but it doesn't have to be.</h5><br />
                <p>We use the latest technology and artificial intelligence to <br/>eliminate 
                the massive administrative burden that threatens the<br/> future of healthcare</p>
            </div>
            <div className="row">
                    <div className="col-sm-6">
                        <img src={img21} className="img21" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 style={{ marginTop: "150px" }}>Join the Team</h3>
                        <p style={{ fontWeight: "bold" }}>We’re centered around helping people as quickly as possible. 
                        If <br/>you’re a genuine, passionate, hard worker, you will fit in with our<br/> remote team.</p>
                        <a href="/Careers" className="button3">See Open Positions</a>
                    </div>
                </div>
                <br/>
                <Footer />
        </div>
    );
}
export default Mission;
