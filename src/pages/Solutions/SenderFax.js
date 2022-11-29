import React from "react";
import img2 from "../images/img2.png"
import img9 from "../images/img9.png"
import "../Solutions/Solutions.css"
import img10 from "../images/img10.png"
import img11 from "../images/img11.png"

function SenderFax() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img style={{ marginTop: "80px" }} src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg" alt="" className="" />
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
                        style={{ maxHeight: "400px", height: "320px", marginTop: "150px", width: "100%" }} />
                </div>
            </div><br />
            <div style={{ marginTop: "50px" }} className="row">
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410ff7fcaba24_Fax_1_oneclick%402x.svg" alt="" />
                    <h2 className="">1-click fax sending</h2>
                    <p style={{ fontWeight: "bold" }}>Send to any fax number, email, or cell<br /> phone with a click.
                        Great for sending<br /> notes, orders, reports, and more.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424107dd9caba27_Fax_2_Print%402x.svg" alt="" />
                    <h2 className="">No more printing or scanning</h2>
                    <p style={{ fontWeight: "bold" }}>Incoming faxes come in digitally and sync to the patient chart. No file conversions or uploading needed.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410eb67caba28_Fax_3_Fill%402x.svg" alt="" />
                    <h2 className="">Fill, sign & edit faxes digitally</h2>
                    <p style={{ fontWeight: "bold" }}>Add text, signatures, and stamps to any document with a click. Instantly send forms for easy patient intake.</p>
                </div>
            </div>
            <div className="fax">
                <h1 style={{ textAlign: "center", fontSize: "25px" }} className="">Simplify your healthcare faxing</h1>
                <br />
                <div className="row">
                    <div className="col-sm-5">
                        <h3>Full document editing</h3>
                        <p style={{ fontWeight: "bold" }}>Anything you can do on paper, you can do on Medsender. <br />No printing, no PDF editor, no downloads.</p>
                        <ul>
                            <li>Write, edit and highlight on pages</li>
                            <li>Sign and date documents online</li>
                            <li>Send interactive online forms to patients</li>
                        </ul>
                    </div>
                    <br />
                    <div className="col-sm-6">
                        <img src={img9} className="img9" alt="" />
                    </div>
                </div>
            </div>
            <div id="img_row" className="row">
                <div className="col-sm-6">
                    <img src={img10} className="img10" alt="" />
                </div>
                <div className="col-sm-6">
                    <h3 style={{ marginTop: "100px" }}>Easy to use</h3>
                    <p style={{ fontWeight: "bold" }}>Everything you need to process and send faxes quickly. With a <br />single click, you can now: </p>
                    <ul>
                        <li>Rotate and re-order pages</li>
                        <li>Add custom cover pages</li>
                        <li>Split big documents into multiple records</li>
                        <li>Fax documents from your computer</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <h3 style={{ marginTop: "150px" }}>Delivery confirmation</h3>
                    <p style={{ fontWeight: "bold" }}>See what’s happening with your faxes at any time.
                        Check online if faxes and forms have been received, viewed, or signed.</p>
                </div>
                <div className="col-sm-7">
                    <img src={img11} className="img11" alt="" />
                </div>
            </div>
            <div className="">
                <h1 style={{ textAlign: "center", fontSize: "25px" }}>Frequently Asked <br />Questions</h1>
            </div>
            <button class="accordion">How do you do all that auto-recognition stuff? <span class="caret"></span></button>
            <div class="panel">
                <p>Yes. It’s also no problem if you have multiple fax numbers and locations.</p>
            </div>
            <button class="accordion">Do you integrate with my specific EMR?<span className="caret"></span></button>
            <div class="panel">
                <p>Most likely yes! We integrate with most popular EMRs and are adding more every month. Get in touch to learn more.</p>
            </div>
            <button class="accordion">What’s the set up processlike?<span className="caret"></span></button>
            <div class="panel">
                <p>In a 15-minute video call, we’ll walk you through how Medsender works. You get a 14-day free trial to get started,
                    and we provide you with some quick live training.
                    No IT team required. If that sounds simple, it’s because it is.</p>
            </div>
            <button class="accordion">What does the pricing look like?<span className="caret"></span></button>
            <div class="panel">
                <p>We charge a monthly fee depending on your desired features and the number of pages you need to process.
                    You’re never locked in to a contract with our plans.
                    Our most popular package is $249 per month and includes 7,500 pages per month.</p>
            </div>
            <button class="accordion">How do you do all that audio-recognition stuff?<span className="caret"></span></button>
            <div class="panel">
                <p>We use AI (Artificial Intelligence). It’s trained to recognize faxes as a human would. From there,
                    it’s a simple “match this bit with that bit” calculation.
                    Our automation features are built to assist you with those pesky repetitive tasks that no one wants to do.</p>
            </div>
            <div style={{textAlign:"center"}} className="">
                <h1>Still have questions?</h1>
                <p >if you have more questions, reach out</p>
                <a href="/" className="button1">View All FAQs</a>
                <a href="/" className="button2">Contact Us</a>
            </div>
        </div>
    );
}

export default SenderFax;