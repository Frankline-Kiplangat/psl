import React from "react";
import "../Resources/Resources.css";
function FAQ() {
    return (
        <div class="jumbotron">
            <h3 class="display-6">Frequently Asked Questions</h3>
            <div className="buttons">
                <a href="/" className="button1">Contact us</a>
            </div>
            <br/>
            <div bg="grey" className="container">
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
            <button class="accordion">I don’t have time for a 15-minute call...<span className="caret"></span></button>
            <div class="panel">
                <p>Pop us an email explaining what you’re looking for, and we’ll give you a free trial without the intro call.</p>
            </div>
    </div>
    </div>
    );
}
export default FAQ;