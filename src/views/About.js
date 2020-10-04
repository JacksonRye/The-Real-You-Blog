import React from "react";
import facebook from "../icons/facebook.svg"
import instagram from "../icons/instagram.svg"
import whatsapp from "../icons/whatsapp.svg"
import youtube from "../icons/youtube.svg"

const About = () => {
  return (
    <section className="About">

        <div className="content">
            <div className="about">
                <h3>ABOUT</h3>

                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms</p>
            </div>

            <div className="socials">
                <h3>STAY CONNECTED</h3>
                <div className="socials-links">

                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                    <img src={whatsapp} alt="whatsapp" />

                </div>
                <p>Work With Us</p>
                <p>Contact</p>
            </div>
        </div>

      <div className="sign">
        © 2012–2020 The Real You Blog. All rights reserved. Made with Magic by The
        Computer Wizards
      </div>
    </section>
  );
};

export default About;
