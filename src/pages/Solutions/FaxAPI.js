import React from "react";
import "../Solutions/Solutions.css"
import img16 from "../images/img16.png"
import Footer from '../Footer'

function FaxAPI() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <br />
                    <img style={{ marginTop: "120px" , marginLeft:"60px" }} src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424108d1dcaba07_Medsender%20Fax%20API%403x.svg" alt="" className="" />
                    <div class="jumbotron">
                        <p class="display-6">The Fax API for Healthcare<br /> Communication</p>
                        <div className="details1">
                            <p>Medsender is the easiest way for healthcare <br />
                                providers to send and receive faxes and patient forms.</p>
                        </div>
                        <div className="buttons">
                            <a href="/FaxAPI" style={{ width: "180px" }} className="button1">Get API Key</a>
                            <a href="/Support" className="button2">View Docs</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img alt="" src={img16} id="img16" className="img-fluid" />
                </div>
            </div>
            <div id="col4" style={{ marginTop: "50px" }} className="row">
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241025dfcaba30_1_Rest_API%403x.svg" alt="" />
                    <h5 className="">Rest API</h5>
                    <p style={{ fontWeight: "bold" }}>Send and receive with real-time status<br /> notifications via web hooks. SDKs
                        <br />available in any programming language</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424103038caba32_2_AI_Automation%403x.svg" alt="" />
                    <h5 className="">AI Automation</h5>
                    <p style={{ fontWeight: "bold" }}>Medsender AI can auto-extract patient information from each fax. No fax servers,
                        SIP lines, or telecom lines needed.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424108b4dcaba31_3_Cloud%403x.svg" alt="" />
                    <h5 className="">Enterprise-grade cloud reliability</h5>
                    <p style={{ fontWeight: "bold" }}>99.9% uptime, no busy signals. No fax servers, SIP lines, or telecom lines needed.</p>
                </div>
            </div>
            <div style={{ textAlign: "center" }} className="">
                <h1>The easiest way to handle HIPAA <br />compliant faxing</h1>
                <p style={{ fontWeight: "bold" }}>Integrate enterprise-grade faxing, forms, HIPAA compliant email,<br /> and DIRECT messaging into your application within minutes.</p>
            </div>

            <div style={{ textAlign: "center" }} className="">
                <h1>Still have questions?</h1>
                <p style={{ fontWeight: "bold" }}>if you have more questions, reach out</p>
                <a href="/FAQ" className="button1">View All FAQs</a>
                <a href="/Contact" className="button2">Contact Us</a>
            </div>
            <div className="tab-menu">
                <a href="#">Python</a>
                <a href="#">Java</a>
                <a href="#">PHP</a>
            </div>
            <br />
            <Footer />
        </div>
    );
}
export default FaxAPI;