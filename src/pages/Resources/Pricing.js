import React from 'react'
import "../Resources/Resources.css";
import Footer from '../Footer'

function Pricing() {
    return (
        <div class="container-fluid">
            <div className="pricing">
                <h3>Pick Your Plan
                </h3>
                <label class="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <Footer />
        </div>
    );
}
export default Pricing;
