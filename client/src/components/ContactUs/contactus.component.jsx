import React from "react";
import NavBar from "../navbar/navbar";
import "./contact_styles.css";

const ContactUs = () => {
    return(
        <div className="about-us-parent">
            <NavBar/>
            
            <div className="about-us">
                <h1 className="about-us-heading">About Us</h1>
                    <div className="about-us-first">
                        <h2>Our Vision</h2>
                    </div>
                <div className="about-us-second">
                    <ul>
                        <li>
                            <h3>Our vision is to provide a platform to the farmers to sell their crops at a fair price.</h3>
                        </li>
                        <li>
                            <h3>Provide every Indian with the power to grow their own crops and provide them with organically grown products which they can see growing right before their eyes</h3>
                        </li>
                    </ul>
                </div>  
                <div className="about-us-third">
                    <h2>Our Mission</h2>
                </div>
                <div className="about-us-fourth">
                    <ul>
                        <li>
                            <h3>Complete transparency between the farmers and the buyers.</h3>
                        </li>
                        <li>
                            <h3>To provide the farmers with the best quality seeds and fertilizers.</h3>
                        </li>
                        <li>
                            <h3>Make the dream of contract farming a reality.</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;