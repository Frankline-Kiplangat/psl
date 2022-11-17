import React from "react";
import img2 from "../images/img2.png"
function SenderFax() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg" alt="header2" className="" />
                    <div class="jumbotron">
                        <p class="display-6">Finally, a better way to send, receive,<br />and manage faxes</p>
                        <div className="details1">
                            <p>Medsender is the easiest way for healthcare providers to send <br />and receive secure faxes and patient forms.</p>
                        </div>
                        <div className="buttons">
                            <a href="/" className="button1">Book a Demo</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img
                        src={img2}
                        alt=""
                        className="img-fluid"
                        style={{ maxHeight: "400px", height: "330px", marginTop: "100px", width: "500px" }} />
                </div>
            </div><br/>
            <div className="row">
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410ff7fcaba24_Fax_1_oneclick%402x.svg" alt=""/>
                    <h2 className="">1-click fax sending</h2>
                    <p style={{fontWeight:"bold"}}>Send to any fax number, email, or cell phone with a click. 
                    Great for sending notes, orders, reports, and more.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424107dd9caba27_Fax_2_Print%402x.svg" alt=""/>
                    <h2 className="">No more printing or scanning</h2>
                    <p style={{fontWeight:"bold"}}>Incoming faxes come in digitally and sync to the patient chart. No file conversions or uploading needed.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410eb67caba28_Fax_3_Fill%402x.svg" alt=""/>
                    <h2 className="">Fill, sign & edit faxes digitally</h2>
                    <p style={{fontWeight:"bold"}}>Add text, signatures, and stamps to any document with a click. Instantly send forms for easy patient intake.</p>
                </div>
            </div>
        </div>
    );
}

export default SenderFax;