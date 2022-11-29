import React from "react";
import "../Resources/Resources.css";
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
            <p style={{ color: "grey", fontFamily:"italic"}}>9AM-6PM EAT</p>
            <p style={{ fontWeight: "bold"}}><a href="tel:+254724375662">(254) 724375662</a></p>
        </div>
        
        </div>
);
}
export default Contact;