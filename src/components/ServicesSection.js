import React from "react";

// icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

// styles
import { Layout, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
const SrvicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      className="services"
    >
      <Description className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="icon clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="icon money" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image className="image">
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  overflow: hidden;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;

    @media (max-width: 520px) {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 19rem;
  .icon {
    display: flex;
    align-items: center;
    @media (max-width: 520px) {
      justify-content: space-between;
    }
    h3 {
      margin-left: 3rem;
      background: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default SrvicesSection;
