import React from 'react'
import header_icon from '../assets/icons8-gym-64.png';
import '../component/header-style.css'
let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="nav_heading navbar-brand" href="#">
            <img src={header_icon} alt="gym_icon" />
            Fitness Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav_elements collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="register">
          <button register_btn className="btn btn-light" type='button'>Register</button>
        </div>
      </nav>
    </>
  )
}

export default Header