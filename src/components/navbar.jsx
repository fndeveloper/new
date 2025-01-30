import React from "react";
import logo from "../assets/temp_logo.png"
const Navbar = () => {
  return (
    <div>
      {/* NAVBAR START */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <div className="container-fluid">
    {/* Left Side Nav Links */}
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About Us
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Services
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Catering
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Event Planning
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Menus
        </a>
      </li>
    </ul>
    {/* Brand (Logo in the center) */}

<img src={logo} alt="" className="img-fluid col-1 navbar-brand mx-auto" />

    {/* Right Side Nav Links */}
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Venues
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Blog
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Latest News
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Tips &amp; Tricks
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Page
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Contact
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact
        </a>
      </li>
    </ul>
    {/* Mobile Menu Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </div>
</nav>
 {/* NAVBAR END */}
{/* MOBILE NAV START */}
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav text-center bg-dark p-3">
    <li className="nav-item">
      <a className="nav-link" href="#">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        About Us
      </a>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        Services
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Catering
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Event Planning
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Menus
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Venues
      </a>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        Blog
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Latest News
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Tips &amp; Tricks
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        Page
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            FAQ
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Contact
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Contact
      </a>
    </li>
  </ul>
</div>

{/* MOBILE NAV END */}
</div>
  );
};

export default Navbar;