import React from 'react'
import logo from "../assets/temp_logo.png"
export default function Footer() {
  return (

      <footer className="py-5">
  <div className="container">
    <div className="row">

      <div className="col-12 col-md-4 mb-4 mb-md-0">
     
        <h2 className="mb-0">
            <img src={logo} alt="" />

        </h2>
        <h6 className="text-uppercase pt-3">Event Planner</h6>

        <p className="mt-3 fw-medium">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
     
      <div className="col-12 col-md-2 mb-4 mb-md-0 text-white">
        <h5 className="mb-3">Explore</h5>
        <ul className="list-unstyled">
          <li>
            <a href="Link">About Us</a>
          </li>
          <li>
            <a href="Link">Services</a>
          </li>
          <li>
            <a href="Link">Gallery</a>
          </li>
          <li>
            <a href="Link">Blog</a>
          </li>
          <li>
            <a href="Link">Contact</a>
          </li>
        </ul>
     
      </div>
      <div className="col-12 col-md-2 mb-4 mb-md-0 text-white">
        <h5 className="mb-3">Explore</h5>
        <ul className="list-unstyled text-white">
          <li>
            <a href="Link">About Us</a>
          </li>
          <li>
            <a href="Link">Services</a>
          </li>
          <li>
            <a href="Link">Gallery</a>
          </li>
          <li>
            <a href="Link">Blog</a>
          </li>
          <li>
            <a href="Link">Contact</a>
          </li>
        </ul>
      </div>
      {/* Right Column: Mailing List Signup */}
      <div className="col-12 col-md-4">
        <h5 className="mb-3">Join Our Mailing List</h5>
        <p>Receive invitations, updates and bonuses for purchasing</p>
        <form className="d-flex flex-column flex-sm-row">
          <input
            type="email"
            className="form-control mb-2 mb-sm-0 me-sm-2"
            placeholder="Enter Email..."
            required=""
          />
          <button type="submit" className="btn btn-primary">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </div>


    </footer>
  )
}
