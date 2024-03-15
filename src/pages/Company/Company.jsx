import React from "react";
import "./Footer.css";

const Company = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-parent">
          <div className="footer-data-container">
            <div className="footer-heading-div">
              Corewelank
            </div>
            <div className="footer-logo-div">
              <div className="get-in-touch">Get in touch</div>
              <div className="emai">hello@mahameru.com</div>
              <div className="address-content">Address lorem ipsum dolo sit amet pratas lhadala malah penak tenan</div>
              <div className="logos">
              <img src="images/SocialMedia.png" alt="" />
              </div>
            </div>
            <div className="footer-info-div">
              <div className="title">Info</div>
              <div className="Services">Services</div>
              <div className="Support">Support</div>
              <div className="About-us">About us</div>
              <div className="Blog">Blog</div>

            </div>
            <div className="footer-privacy-div">
              <div className="Legal">Legal</div>
              <div className="Terms">Terms of use</div>
              <div className="Privacy-policy">Privacy policy</div>
            </div>
          </div>
        </div>
        <div className="footer-end-div">© 2023. Corewelank</div>
      </div>
    </>
  );
};

export default Company;
