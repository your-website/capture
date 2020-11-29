import React from "react";
import home1 from "../img/home1.png";

import { Layout, Description, Image, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Layout className="about">
      <Description className="desctiption">
        <Hide className="hide">
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
        </Hide>
        <Hide className="hide">
          <motion.h2 variants={titleAnim}>
            your <span>dreams</span> come
          </motion.h2>
        </Hide>
        <Hide className="hide">
          <motion.h2 variants={titleAnim}>true.</motion.h2>
        </Hide>
        <p>
          Contact us for any photography or videography ideas that yout have. We
          have professionals with amazing skills.
        </p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
