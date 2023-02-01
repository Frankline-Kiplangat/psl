import React from "react";
import "../Resources/Resources.css";
import {
    MDBCardHeader, MDBRow, MDBCol, MDBCheckbox,
    MDBInput,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import Footer from '../Footer'

function Support() {
    return (
        <div class="jumbotron">
            <h3 class="display-6">Get Support</h3>
            <div className="buttons">
                <p style={{ fontWeight: "bold" }}>We're here to help. Simply fill out the form below and we will be in touch as fast as possible.</p>
            </div>
            <h3 class="display-5">Support</h3>
            <div className="contact">
                <p style={{ color: "grey", fontFamily: "italic" }}>9AM - 6PM EST. If we are unable to answer your call,
                please leave a voicemail or simply fill out the form below.</p>
                <p style={{ fontWeight: "bold" }}><a href="tel:+254724375662">(254)-724375662</a></p>
            </div>
            <div className="contact_form" style={{ marginLeft: "60px", marginRight:"60px" }}>
                <MDBCardHeader className="py-3">
                    <h3 className="mb-0">Submit a ticket</h3>
                </MDBCardHeader>
                <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                <label>First Name</label>
                <MDBInput  type='text' />
                  </MDBCol>
                  <MDBCol>
                  <label>Last Name</label>
                    <MDBInput type='text' />
                  </MDBCol>
                </MDBRow>
                <label required>Company Name</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='email' />
                    <label required>Email</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='email' />
                    <label required>Phone Number</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>Tocket Name</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>Ticket description</label>
                    <p style={{ color: "grey", fontSize: "12px" }}>Please include detailed steps on how to 
                    re-produce the issue you are having. 
                    We may not be able to assist without enough information.</p>
                    <MDBTextArea rows={4} className="mb-4" required /> <br/>
                    <p>Are you submitting this ticket on behalf of a Provider or Patient?</p>
                    <MDBCheckbox name='same' type="radio" id='flexCheckDefault' label='Provider' />
                    <MDBCheckbox name='same' type="radio" id='flexCheckDefault' label='Patient' /><br/>
                    <p>File upload (optional)</p>
                    <p style={{ color: "grey", fontSize: "11px" }}>Attaching screenshots is highly recommended and
                     can help us address the issue faster for you.</p>
                     <form action="/action_page.php">
                        <input type="file" id="myfile" name="myfile" multiple /><br/><br/>
                    </form>
                    <p>Category</p>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Product issue' />
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Billing issue' />
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Feature request' />
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='General inquiry' />
                    <br/>

                    <div className="d-flex">
                        <button type="submit" className="button1">Submit</button>
                    </div>
                </form>
            </div><br/>
            <Footer />
        </div>
    );
}
export default Support;