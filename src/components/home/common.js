import React, { useState } from "react";
import NavbarMenu from "../common/navbarmenu.js";
import HeaderLogo from "../../images/jeveline.png";

export default function Common() {
  const [Navbar, setNavbar] = useState(false);
  const BurgerNavbar = () => {
    setNavbar(true);
  };
  const CloseMenu = () => {
    setNavbar(false);
  };
  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={HeaderLogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={BurgerNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarMenu />
          </div>
        </div>
      </nav>
      {Navbar ? (
        <div className="burger-navbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            id="menu-close"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={CloseMenu}
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
          <div className="burger-menu">
            <a style={{ color: "black" }} className="nav-link" href="/">
              Home
            </a>

            <a style={{ color: "black" }} className="nav-link" href="/about">
              About
            </a>

            <a style={{ color: "black" }} className="nav-link" href="/services">
              Services
            </a>
            <a
              style={{ color: "black" }}
              className="nav-link "
              href="/department"
            >
              Department
            </a>
            <a style={{ color: "black" }} className="nav-link " href="/Doctor">
              Doctor
            </a>
            <a style={{ color: "black" }} className="nav-link " href="/offers">
              Offers
            </a>
            <a style={{ color: "black" }} className="nav-link" href="/faq">
              FAQ
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
