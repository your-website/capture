import React from "react";
import home1 from "../img/home1.png";

import { Layout, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <Layout className="about">
      <Description className="desctiption">
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that yout have.
            We have professionals with amazing skills.
          </p>
        </div>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
