import React from "react";
import styled from "styled-components";
import "../assets/style.scss";
const Menu = ({ openMenu }) => {
  return (
    <StyleMenu className={`menu ${openMenu ? "open" : ""}`}>
      <div className="icon-E"></div>
      <div className="icon-X"></div>
    </StyleMenu>
  );
};

const StyleMenu = styled.div`
  display: none;

  @media (max-width: 450px) {
    display: block;
  }
`;

export default Menu;
