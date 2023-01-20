import React from "react";
import "../Resources/Resources.css";
import {
    MDBCardHeader,
    MDBInput,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import Footer from '../Footer'

function Contact() {
    return (
        <div class="jumbotron">
            <h3 class="display-6">Contact Us</h3>
            <div className="buttons">
                <p style={{ fontWeight: "bold" }}>Hey there! What a pleasure. We can’t wait to connect.</p>
                <a href="/" className="button1">Book a Demo</a>
            </div>
            <h3 class="display-5">Sales</h3>
            <div className="contact">
                <p style={{ color: "grey", fontFamily: "italic" }}>9AM-6PM EAT</p>
                <p style={{ fontWeight: "bold" }}><a href="tel:+254724375662">(254)-724375662</a></p>
            </div>
            <div className="contact_form" style={{ marginLeft: "60px", marginRight:"60px" }}>
                <MDBCardHeader className="py-3">
                    <h3 className="mb-0">Email Us</h3>
                </MDBCardHeader>
                <form>
                    <label required>Email</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='E-mail' />
                    <label Required>First name</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>Last name</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>Phone Number</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>EMR</label>
                    <MDBInput wrapperClass='mb-4' className="mb-4" type='text' />
                    <label required>Message</label>
                    <MDBTextArea rows={4} className="mb-4" required />
                    <div className="d-flex justify-content-center">
                        <a action="submit" className="button1">Submit</a>
                    </div>
                </form>
            </div>
            <br/>
            <Footer />
        </div>
    );
}
export default Contact;