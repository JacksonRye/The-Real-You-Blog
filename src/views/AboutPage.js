import React from "react";
import reinvent from "../img/reinvent-yourself.jpg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <h1>ABOUT US</h1>

      <p>
        At THEREALME we are constantly iterating, solving problems and coming up
        with solutions to give tertiary students and young entreprenuers in
        Nigeria and other parts of the world access to the right information
        through our community, digital products and online seminars to enable
        them get rid of uncertainty in an era of increasing result based
        learning
      </p>

      <div className="image-container">
        <img src={reinvent} alt="about" />
      </div>

      <h3>WHAT WE BELIEVE ...</h3>

      <p>
        TheRealMe as a brand believes that every person is unique and original
        but in a fast changing world we must constantly improve and open our
        mind to new realities to enable us succeed.
      </p>
    </div>
  );
};

export default AboutPage;
