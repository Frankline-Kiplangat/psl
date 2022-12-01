import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "./images/logo.png"
import "../pages/style.css";
import "../pages/Footer.css";
export default function App() {
  return (
    <div id='footer'>
      <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>
                  <img src={logo} style={{ height: "40px", width: "200px" }} className="footer-logo" alt="" /><br />
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
                  <a href='/' className='text-reset'>Fax</a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Automate
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    API
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>Company</h6>
                <p>
                  <a href='/' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Partners
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Careers
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    HIPAA Compliant
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Security
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Reviews
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='fw-bold mb-4'>Resources</h6>
                <p>
                  <a href='/' className='text-reset'>
                    Schedule A Demo
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Customer Stories
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Contact
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Support
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Blog
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
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
                  <a href="/" class="fa fa-facebook"></a>
                  <a href="/" class="fa fa-twitter"></a>
                  <a href="/" class="fa fa-linkedin"></a>
        </div>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        <div className='footer-link2'>
          <footer><p>&copy; Medsender Inc, 2022 | <a href='/'>Privacy Policy</a>| Terms of Use</p></footer>
        </div>
      </MDBFooter>
    </div>
  );
}