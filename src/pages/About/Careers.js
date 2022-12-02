import React from "react";
import img21 from "../images/img21.png"
import "../About/About.css";
function Careers() {
    return (
        <div class="container-fluid">
                <div className="careers">
                    <h3 class="display-7">We are transforming faxing for healthcare<br />
                    How will you make your mark?<br />
                    </h3>
                    <p style={{ fontWeight: "bold", marginLeft: "60px" }}>At Medsender, we are on a mission to improve the lives of<br/>
                        practitioners and their patients.</p>
                    <p style={{ fontWeight: "bold", marginLeft: "60px" }}>Come join us!</p>
                    <a href="/" className="button">View Open Positions</a>
            </div><br/>
            <div className="row">
                    <div id="col6" className="col-md-4">
                        <h3 style={{ marginTop: "150px" }}>Join us on our mission</h3>
                        <div className="col-md-12">
                        <p style={{ fontWeight: "bold" }}>Interested in building the rocket ship while flying it at the same time? Want to
                         play a part in transforming communications in the healthcare industry -- while impacting the 
                         lives of others? If so, come join our team!</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={img21} className="img21" alt="" />
                    </div>
                </div>
                <div style={{ marginTop: "50px", marginRight:"60px",marginLeft:"60px" }} className="row">
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410bee7caba35_1_Careers.svg" alt="" />
                    <h2 className="">Do the right thing</h2>
                    <p style={{ fontWeight: "bold" }}>Integrity means we are truthful and honest. 
                    When faced with difficult choices, we do the right thing, even when no one is watching.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410b253caba36_2_Careers.svg" alt="" />
                    <h2 className="">Act with empathy</h2>
                    <p style={{ fontWeight: "bold" }}>When we think like our users, we can provide true value. 
                    And when we act with empathy for our teammates, we empower everyone to succeed.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424106da0caba37_3_Careers.svg" alt="" />
                    <h2 className="">Communication is key</h2>
                    <p style={{ fontWeight: "bold" }}>We know firsthand how critical communication is.
                     When teammates freely communicate, great things can happen.</p>
                </div>
            </div>
            <br/>
        </div>
    );
}
export default Careers;