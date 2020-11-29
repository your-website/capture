import React from "react";
import home1 from "../img/home1.png";

import { Layout, Description, Image, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  return (
    <Layout className="about">
      <Description className="desctiption">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
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
            Contact us for any photography or videography ideas that yout have.
            We have professionals with amazing skills.
          </p>
        </motion.div>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
