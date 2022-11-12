import React from "react";
import img2 from "./images/img2.png"
import "../pages/style.css";
import img7 from "./images/img7.png"
import img8 from "./images/img8.png"
function Home2() {
  return (
    <div className="row">
      <div className="column">
        <img alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg" />
        <h2>
          The easiest way to send and
          receive<br /> patient forms
          and faxes
        </h2>
        <p className="paragraph-copy">Providers and staff have access to faxes anytime, anywhere.</p>
        <ul className="bi bi-check-circle">
          <li>Upload and merge multiple files</li>
          <li>Send and receive HIPAA-compliant <br />email notifications</li>
          <li>Track abd confirm delivery online</li>
        </ul>
        <a href="/" target="self" className="med-link">Learn More About Medsender Fax</a>
        <div className="column">
          <img className="img2" src={img2} alt="" />
        </div>
      </div><br />
      <div className="column1">
        <img src={img7} className="img7" alt="" />
        <div>
          <h2><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424102749caba04_MedSender%20AI%403x.svg" alt="" /><br />
            Get faxes loaded into the patient chart <br />with easy EMR integration</h2>
          <p>Medsender integrates instantly with your EMR so your patient <br />records and documents are always up-to-date.</p>
        </div>
        <div>
          <a href="/" target="self" className="med-link">Learn More About Medsender AI</a>
        </div>
      </div>
      <div className="column2">
        <h2><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424108d1dcaba07_Medsender%20Fax%20API%403x.svg" alt="" /><br />
          Free yourself up from manual, time-<br />consuming tasks</h2>
        <ul>
          <li>No more time spent converting files or faxes</li>
          <li>Say no to faulty machines, failed faxes, and lost forms</li>
          <li>No more downloading or uploading documents</li>
        </ul>
        <div>
          <a href="/" target="self" className="med-link">Learn More About Medsender Fax API </a>
        </div>
        <div>
          <img src={img8} className="img8" alt="" />
        </div>
      </div>
      <div className="column3">
        <div className="stats">
          <div><span>25+</span></div>
          <p>Hours per provider per week saved with streamlined admin</p>
        </div>
        <div className="">
          <div><span>99.99+</span></div>
          <p>99.9% uptime ensures you don’t have to worry about missing faxes</p>
        </div>
        <div className="">
          <div><span>65%</span></div>
          <p>Average percent savings for switching from paper fax to Medsender</p>
        </div>
      </div>
      <div className="slides">
        <h2>Our Customers Love Us</h2>
        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
        <div className="mySlides">
          <q>This is the must-have add-on (for your EMR). It's so easy to use and I can't imagine running my practice without Medsender.</q>
          <p className="author">Nahera A., MD<br />Adams Medical Group</p>
        </div>
        <div className="mySlides">
          <q>The efficiency of our practice has improved tremendously. Medsender has improved the turn around time in which my staff is able to address and resolve incoming faxes.</q>
          <p className="author">Jana H.<br />
            Practice Manager NWA Retina Associates</p>
        </div>
        <div className="mySlides">
          <q>As a medical practice, we were constantly running into busy lines, dropped signals and faxes that went missing.
            The entire process is now digital and finished with the click of a button.</q>
          <p className="author">Zaka S.<br />
            Urgent Care - Beverly</p>
        </div>
      </div>
      <div className="_copy">
        <h3 className="h_copy"><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424106173caba01_logo_icon%403x.svg" alt=""/>
        <br/>Ready to get started with<br/>
          Medsender?</h3>
            <a href="/" className="button1">Book a Demo</a>
            <a href="/" className="button2">Contact</a>
      </div>
    </div>
  );
}
export default Home2;