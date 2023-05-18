import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logo.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#f1f3ff"}} >
    <Link to="/" className="square"></Link>
        <div className="container-fluid nav_utama">
          <a className="navbar-brand" href="#">
          <Link to="/"><img src={logo} alt="" width="100" height="34" /></Link>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="offcanvas offcanvas-end off-navbar" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel"><strong>BCR</strong></h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
  
            <div className="offcanvas-body">
              <div className="navbar-nav ms-auto navigation">
                <a className="nav-link" href="#Our-Services-Section">Our Services</a>
                <a className="nav-link" href="#Why-Us-Section">Why Us</a>
                <a className="nav-link" href="#Testimonial-Section">Testimonial</a>
                <a className="nav-link" href="#FAQ-Section">FAQ</a>
                <button className="btn btn-md text-white nav_btn" type="button">Register</button>
              </div>
            </div>
          </div>
  
        </div>
      </nav>
      </>
      
  )
}

export default Navbar