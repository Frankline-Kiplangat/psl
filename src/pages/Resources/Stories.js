import React from "react";
import "../Resources/Resources.css";
import img17 from "../images/img17.png"
import img18 from "../images/img18.png"
import img19 from "../images/img19.png"
import img20 from "../images/img20.png"

function Stories() {
    return (
        <div class="container-fluid">
            <div className="story1">
                <h3 class="display-7">Customer Stories<br /><br />
                    <p style={{ fontWeight: "bold" }}>Medsender’s saved healthcare workers thousands (and thousands) of hours.</p>
                </h3>
            </div><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img17} className="img17" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h3 style={{ marginTop: "150px" }}>How Teter Orthotics transformed faxing across 20 locations</h3>
                        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
                        <p style={{ fontWeight: "bold" }}>“Now I can put all our remote workers on Medsender and
                            they can get a fax sitting at their home miles away. It’s been huge for us.”</p>
                        <a href="/" className="button3">Read Case Study</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h3 style={{ marginTop: "150px" }}>How a podiatry practice scaled their operations with integrated faxing</h3>
                        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
                        <p style={{ fontWeight: "bold" }}>“Everyone loves it, from our receptionist to the clinical assistant who
                            places surgery orders. It also allows me to work primarily from home. I don’t really need to go to the office.
                            We use a lot of third-party software to fill the gaps in our current EMR, and Medsender is my favorite."</p>
                        <a href="/" className="button3">Read Case Study</a>
                    </div>
                    <div className="col-sm-6">
                        <img src={img18} className="img18" alt="" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img19} className="img19" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h3 style={{ marginTop: "150px" }}>How Teter Orthotics transformed faxing across 20 locations</h3>
                        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
                        <p style={{ fontWeight: "bold" }}>“Now I can put all our remote workers on Medsender and
                            they can get a fax sitting at their home miles away. It’s been huge for us.”</p>
                        <a href="/" className="button3">Read Case Study</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h3 style={{ marginTop: "150px" }}>How Prosthetic & Orthotics Group improved their communications workflows</h3>
                        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
                        <p style={{ fontWeight: "bold" }}>“With Medsender... I can show someone how to review and merge documents and
                            delete unnecessary information or upload to Nymbl in 10 minutes and they are like, ‘Oh, this is easy, I get it.’”</p>
                        <a href="/" className="button3">Read Case Study</a>
                    </div>
                    <div className="col-sm-6">
                        <img src={img20} className="img20" alt="" />
                    </div>
                </div>
            </div><br/>
            <div className="column4">
                <h3 className="h_copy"><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424106173caba01_logo_icon%403x.svg" alt="" />
                    <br />Ready to get started with<br />
                    Medsender?</h3>
                <br />
                <a href="/" className="button1">Book a Demo</a>
                <a href="/Contact" className="button2">Contact Us</a>
            </div>
        </div>
    );
}
export default Stories;