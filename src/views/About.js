import React from "react";
import { Link } from "react-router-dom";
import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import whatsapp from "../icons/whatsapp.svg";
import youtube from "../icons/youtube.svg";

const About = () => {
  return (
    <section className="About">
      <div className="content">
        <div className="about">
          <h3>ABOUT</h3>

          <Link style={{ color: "white" }} to="/about">
            About Us
          </Link>
          {/* <p>Privacy Policy</p>
          <p>Terms</p> */}
        </div>

        <div className="socials">
          <h3>STAY CONNECTED</h3>
          <div className="socials-links">
            <a href="https://www.facebook.com/therealmedm">
              <img src={facebook} alt="facebook" />
            </a>
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
          </div>
          <h3>Work With Us</h3>
          <p>Contact: +234 814 9627 272</p>
        </div>
      </div>

      <div className="sign">
        © 2012–2020 TheRealMe Blog. All rights reserved. Made with Magic by The
        Computer Wizards
      </div>
    </section>
  );
};

export default About;
