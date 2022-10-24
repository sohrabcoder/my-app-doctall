import React from "react";
import qaz from './image/footer-logo.svg';
import plm from './image/app store.svg';
import mnb from './image/google store.png';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer">
                <div>
                    <img src={qaz} />
                    <p >
                        Components are independent and reusable bits of code.They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come  in two types, Class components and Function components,  in this tutorial we will concentrate on Function components.
                    </p>
                    <p>+234 9010996000</p>
                    <p>info@doctall.com</p>
                    <address>Block F, Flat 2, LSDPC Luxury Towers,<br />
                        18-24 Adeola Odeku Street, Victoria<br />
                        Island Lagos.</address>
                </div>


                <div>
                    <h4>COMMUNITY</h4>
                    <p>Doctall Foundation</p>

                    <h4>PRODUCTS</h4>
                    <p>Diagnostics</p>
                    <p>Book a Doctor</p>
                    <p>Home Care</p>
                    <img src={plm} className="app-store" />
                </div>

                <div>
                    <h4>CORPORATE</h4>
                    <p>Doctall Pro</p>

                    <h4>RESOURCES</h4>
                    <p>Doctallpedia</p>
                    <p>Doctall Living</p>

                    <img src={mnb} className="google-play" />
                </div>

                <div>
                    <h4>COMPANY</h4>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>

                <div>
                    <h4>POLICIES</h4>
                    <p>Refund/Cancellation Policy</p>
                    <p>Delivery Policy</p>
                    <p>FAQs</p>
                    <p>Privacy-Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                <div>


                </div>
            </div>

          <div className="footer-last-area">
            <hr className="footer-straight-line" />

            <p style={{marginBottom: "0"}}>© Doctall 2022. All Rights Reserved</p>
          </div>



        </div>
    )
};

export default Footer;