import React from "react";
import "../Resources/Resources.css";
import img1 from "../images/img1.jpg"
import Footer from '../Footer'

function Partners() {
    return (
        <div class="container-fluid">
            <div className="story1">
                <h3 class="display-7">Partner with us<br />
                </h3>
                <p style={{ fontWeight: "bold", marginLeft: "60px" }}>By partnering with Medsender,
                    you can enable the future of healthcare automation.</p>
                <div>
                    <a href="/" className="button4">Contact Us</a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3 style={{marginLeft:"60px"}}>Who can benefit from a partnership with Medsender?</h3>
                    <p style={{ fontWeight: "bold", marginLeft: "60px" }}>Medsender partners with many types of healthcare organizations to
                        modernize communication and enable automation for their clients.
                        If your clients are stuck with dealing with repetitive,
                        manual documentation workflows, Medsender can help.</p>
                    <a href="/" className="button4">Contact Us</a>
                </div>
                <div className="col-sm-6">
                    <img src={img1} className="img1" alt="" id="img1" />
                </div>
            </div>
            <br/>
            <Footer />
        </div>
    );
}
export default Partners;