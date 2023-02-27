import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from "./images/logo.png"
import "../pages/style.css";
import "../pages/Footer.css";
export default function App() {
  return (
    <div id='footer'>
        <div className="">
          <div className="column4">
            <h3 className="h_copy"><img src="https://uploads-ssl.webflow.com/626c4dca54241075dfcab9dd/626c4dca5424106173caba01_logo_icon%403x.svg" alt="" />
              <br />Ready to get started with<br />
              Medsender?</h3>
            <br />
            <div style={{ textAlign: "center" }}>
            <a href="/Contact" className="button1">Book a Demo</a>
            <a href="/Contact" className="button2">Contact us</a>
            </div>
  
          </div>
        </div>
      <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>
                  <img src={logo} style={{ height: "35px", width: "160px" }} className="footer-logo" alt="" /><br />
                  <br/>
                  The #1 Faxing Solution Loved by
                  Healthcare Providers
                </h6>
                <div className='footer-p1'>
                  <p>447 Broadway 2nd Fl
                    New York, NY 10013</p>
                </div>
              </MDBCol>
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>Solutions</h6>
                <p>
                  <a href='/SenderFax' className='text-reset'>Fax</a>
                </p>
                <p>
                  <a href='/SenderAI' className='text-reset'>
                    Automate
                  </a>
                </p>
                <p>
                  <a href='/FaxAPI' className='text-reset'>
                    API
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>Company</h6>
                <p>
                  <a href='/Mission' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='/Partners' className='text-reset'>
                    Partners
                  </a>
                </p>
                <p>
                  <a href='/Careers' className='text-reset'>
                    Careers
                  </a>
                </p>
                <p>
                  <a href='/SenderAI' className='text-reset'>
                    HIPAA Compliant
                  </a>
                </p>
                <p>
                  <a href='/Support' className='text-reset'>
                    Security
                  </a>
                </p>
                <p>
                  <a href='/Stories' className='text-reset'>
                    Reviews
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>Resources</h6>
                <p>
                  <a href='/Contact' className='text-reset'>
                    Schedule A Demo
                  </a>
                </p>
                <p>
                  <a href='/Stories' className='text-reset'>
                    Customer Stories
                  </a>
                </p>
                <p>
                  <a href='/Contact' className='text-reset'>
                    Contact
                  </a>
                </p>
                <p>
                  <a href='/Support' className='text-reset'>
                    Support
                  </a>
                </p>
                <p>
                  <a href='/LogIn' className='text-reset'>
                    Blog
                  </a>
                </p>
                <p>
                  <a href='/Stories' className='text-reset'>
                  Reviews
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <MDBContainer>
        <MDBRow className='mt-3'>
        <MDBCol>
        <div className='social-links'>
                  <p className="fw-bold mb-4">Follow Us</p>
                  <a target="_bkank" href="https://www.facebook.com/" class="fa fa-facebook"> </a>
                  <a target="_bkank" href="https://www.twitter.com/" class="fa fa-twitter">  </a>
                  <a target="_bkank" href="https://www.linkedin.com/" class="fa fa-linkedin"> </a>
        </div>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        <div className='footer-link2'>
          <footer><p>&copy; PSL Inc, 2022 | <a href="/SenderFax">Privacy Policy | Terms of Use</a></p></footer>
        </div>
      </MDBFooter>
    </div>
  );
}