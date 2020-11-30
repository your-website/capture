import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

const Nav = () => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuTransfromX, setMenuTransfromX] = useState("0%");

  const menuIsOpenOrClose = () => {
    setOpenMenu(!openMenu);

    if (menuTransfromX === "0%") {
      setMenuTransfromX("100%");
    } else {
      setMenuTransfromX("0%");
    }
  };

  const toNewPage = (to) => {
    if (pathname !== to && openMenu) {
      setOpenMenu(false);
    }
  };

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/capture/">
          Capture
        </Link>
      </h1>
      <div style={{ position: "relative" }} onClick={menuIsOpenOrClose}>
        <Menu openMenu={openMenu} />
      </div>
      <ul className={openMenu ? "open" : ""}>
        <li>
          <Link onClick={() => toNewPage("/")} to="/">
            1. About Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link onClick={() => toNewPage("/work")} to="/work">
            2. Our Work
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link onClick={() => toNewPage("/contact")} to="/contact">
            3. Contact Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 5;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }

  @media (max-width: 450px) {
    flex-direction: row;

    ul {
      position: absolute;
      top: 12vh;
      right: 0;
      height: 88vh;
      background: #282828;
      transition: all 1s ease;
      flex-direction: column;
      transform: translateX(100%);

      &.open {
        transform: translateX(0%);
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  max-width: 45%;

  @media (max-width: 1300px) {
    max-width: 100%;
    left: 0%;
  }
`;

export default Nav;
