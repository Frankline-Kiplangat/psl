import React from "react";
import "../Solutions/Solutions.css"
import img12 from "../images/img12.jpg"
import img13 from "../images/img13.png"
import img14 from "../images/img14.png"
import img15 from "../images/img15.png"

function SenderAI() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img style={{ marginTop: "50px" }} src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424102749caba04_MedSender%20AI%403x.svg" alt="" className="" />
                    <div class="jumbotron">
                        <p class="display-6">Get faxes automatically<br /> into patient charts</p>
                        <div className="details1">
                            <p>Spend less time on administrative tasks, and more time helping<br />
                                patients with Medsender's cutting-edge AI technology.</p>
                        </div>
                        <div className="buttons">
                            <a href="/" className="button1">Book a Demo</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img alt="" src={img12} id="img12" className="img-fluid" />
                </div>
            </div>
            <div style={{ textAlign: "center" }} className="">
                <h1 style={{ fontSize: "30px" }}>Tap into the power of AI to work smarter, <br />not harder</h1>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <h3>Automate your repetitive, manual tasks</h3>
                    <p style={{ fontWeight: "bold" }}>Medsender uses artificial intelligence to auto-categorize your faxes,
                        and recognize patient details.
                        So you don’t have to waste time sorting through the obvious.</p>
                </div>
                <div className="col-sm-7">
                    <img src={img13} id="img13" className="img-fluid" alt="" />
                </div>
            </div>
            <div className="img14_row">
                <div id="img14_row" className="row">
                    <div className="col-sm-7">
                        <img src={img14} className="img14" alt="" />
                    </div>
                    <div className="col-sm-5">
                        <h3 style={{ marginTop: "150px" }}>AI-powered recognition</h3>
                        <p style={{ fontWeight: "bold" }}>Medsender AI automatically reads, labels and fills in record details like patient name,
                            date of birth, and type of document (e.g. referral, refill, labs).</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <h3 style={{ marginTop: "200px" }}>Auto-upload to your EMR</h3>
                    <p style={{ fontWeight: "bold" }}>Faxes are automatically labeled and uploaded to the correct patient chart.
                        You don’t have to lift a finger.</p>
                </div>
                <br />
                <div className="col-sm-7">
                    <img src={img15} className="img15" alt="" />
                </div>
            </div>
            <div style={{ textAlign: "center" }} className="">
                <h1>Still have questions?</h1>
                <p >if you have more questions, reach out</p>
                <a href="/" className="button1">View All FAQs</a>
                <a href="/" className="button2">Contact Us</a>
            </div>
            <hr/>
        </div>
    );
}
export default SenderAI;