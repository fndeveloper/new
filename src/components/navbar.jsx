import React from "react";
import logo from "../assets/temp_logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* NAVBAR START */}
      <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    {/* Left Side Nav Links */}
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Home
       </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/about"}>
          About Us
           </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to={"/"}
          role="button"
          data-bs-toggle="dropdown"
        >
          Services
           </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to={"/catering"}>
              Catering
               </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"/birthday"}>
            Birthday
               </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"/corporate"}>
            Corporate
               </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"/parties"}>
              Parties
               </Link>
               <Link className="dropdown-item" to={"/Wedding"}>
            Wedding
               </Link>
          </li>
        </ul>
      </li>
  
    </ul>
    {/* Brand (Logo in the center) */}

<img src={logo} alt="" className="img-fluid col-1 navbar-brand mx-auto" />

    {/* Right Side Nav Links */}
    <ul className="navbar-nav d-none d-lg-flex">
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Venues
           </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Menus
           </Link>
      </li>
   
      <li className="nav-item">
        <Link className="nav-link" to={"/contact"}>
          Contact
           </Link>
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

<button className="btnfix">
  <Link to={"/calculator"}>
  <i className="fa-solid fa-calculator "></i>
  </Link>
</button>
 {/* NAVBAR END */}
{/* MOBILE NAV START */}
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav text-center bg-dark p-3">
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        Home
         </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        About Us
         </Link>
    </li>
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to={"/"}
        role="button"
        data-bs-toggle="dropdown"
      >
        Services
         </Link>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/"}>
            Catering
             </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/"}>
            Event Planning
             </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        Menus
         </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        Venues
         </Link>
    </li>
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to={"/"}
        role="button"
        data-bs-toggle="dropdown"
      >
        Blog
         </Link>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/"}>
            Latest News
             </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/"}>
            Tips &amp; Tricks
             </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        to={"/"}
        role="button"
        data-bs-toggle="dropdown"
      >
        Page
         </Link>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/"}>
            FAQ
             </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/"}>
            Contact
             </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        Contact
         </Link>
    </li>
  </ul>
</div>

{/* MOBILE NAV END */}
</div>
  );
};

export default Navbar;