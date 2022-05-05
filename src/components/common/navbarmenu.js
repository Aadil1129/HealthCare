import React from "react";

export default function NavbarMenu() {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="/department">
            Department
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="/doctor">
            Doctors
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link " href="/offers">
            Offers
          </a>
        </li>
        <li>
          <a className="nav-link" href="/faq">
            FAQ
          </a>
        </li>
      </ul>
    </>
  );
}
