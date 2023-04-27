import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.svg";

import "./navbar.css";

// BEM --> Block Element Modifier

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT</a>
      </p>
      <p>
        <a href="#features">Open AI</a>
      </p>
      <p>
        <a href="/">Case Studies</a>
      </p>
      <p>
        <a href="/">Library</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign out</button>
      </div>
      <div className="gpt3__navbar-menu">
        {menu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />
        )}
        {menu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign out</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
