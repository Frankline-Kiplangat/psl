import React from "react";
import img1 from "./images/img1.jpg"
import "../pages/style.css";
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.png"
import img6 from "./images/img6.png"
import img2 from "./images/img2.png"
import img7 from "./images/img7.png"
import Footer from './Footer'
import img8 from "./images/img8.png"
function Home() {
  return (
    <div className="fluid">
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
            </div><br /><br />
            <div className="buttons">
              <a href="/Contact" className="button1">Book a Demo</a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="button2">Watch Video</a>
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
      <div className="column2">
        <br /><br />
        <h2><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca54241004fccaba0a_Medsender%20Fax%403x.svg" alt="" /><br />
          The easiest way to send and receive<br />patient forms and faxes</h2>
        <p>Providers and staf have access to faxes anytime, anywhere</p>
        <ul>
          <li>Upload and merge multiple files</li>
          <li>Send and receive HIPAA-compliant email notifications</li>
          <li>Track and confirm delivery online</li>
        </ul>
        <div>
          <a href="/Mission" target="self" className="med-link">Learn More About Medsender Fax</a>
        </div>
        <div>
          <img src={img2} className="img2" alt="" />
        </div>
      </div>
      <div className="column1">
        <img src={img7} className="img7" alt="" />
        <div className="column_copy">
          <h2><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424102749caba04_MedSender%20AI%403x.svg" alt="" /><br />
            <br />
            Get faxes loaded into the patient chart <br />with easy EMR integration</h2>
          <p>Medsender integrates instantly with your EMR so your patient <br />records and documents are always up-to-date.</p>
          <a href="/Mission" target="self" className="med-link">Learn More About Medsender AI</a>
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
          <a href="/Mission" target="self" className="med-link">Learn More About Medsender Fax API </a>
        </div>
        <div>
          <img src={img8} className="img8" alt="" />
        </div>
      </div>
      <div className="column3">
        <div className="stats">
          <div><span>25+</span></div>
          <p className="paragraph_center">Hours per provider per week<br /> saved with streamlined<br /> admin</p>
        </div>
        <div className="stats">
          <div><span>99.99%</span></div>
          <p className="paragraph_center">99.9% uptime ensures you <br />don’t have to worry about<br /> missing faxes</p>
        </div>
        <div className="stats">
          <div><span>65%</span></div>
          <p className="paragraph_center">Average percent savings for <br />switching from paper fax to <br />Medsender</p>
        </div>
      </div>
      <div className="slideshow-container">
        <h2>Our Customers Love Us</h2>
        <img className="quotes" alt="" src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca542410de2dcaba0e_quote_purple%402x.png" />
        <div className="mySlides">
          <q>This is the must-have add-on (for your EMR). It's so easy to use and I can't imagine<br /> running my practice without Medsender.</q>
          <p className="author">Nahera A., MD<br />Adams Medical Group</p>
        </div>
        <div className="mySlides">
          <q>The efficiency of our practice has improved tremendously. Medsender has improved <br />the turn around time in which my staff is able to address and resolve incoming faxes.</q>
          <p className="author">Jana H.<br />
            Practice Manager NWA Retina Associates</p>
        </div>
        <div className="mySlides">
          <q>As a medical practice, we were constantly running into busy <br />lines, dropped signals and faxes that went missing.
            The entire process is now digital and finished with the click of a button.</q>
          <p className="author">Zaka S.<br />
            Urgent Care - Beverly</p>
        </div>
        <span className="prev" onClick="plusSlides(-1)"> ❮ </span>
        <span className="next" onClick="plusSlides(1)"> ❯ </span>
      </div>
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClic="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
