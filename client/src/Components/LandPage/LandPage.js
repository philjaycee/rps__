import React, { Component, Fragment } from 'react'
import Navbar from '../Navbar_2/Navbar'
import './landpage.css'


/*
<ul>
              <li><a href="#" className="kolom_1">Home</a></li>
              <li><a href="#" className="kolom_1">Work</a></li>
              <li><a href="#" className="kolom_1">Contact</a></li>
              <li><a href="#" className="kolom_1">About Me</a></li>
              <li><a href="#" className="kolom_1">Q & A</a></li>
            </ul>
            <li><a href="#" className = "link_2" >Login</a></li>



            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <a className="navbar-brand" href="#">Web Zone</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
*/


export default class LandPage extends Component {
  render() {
    return (
        <div className="banner-area">  
        <Navbar />
          <div className ="container py-5">
              <div className = "py-5">
              <div className = "content align-items-center justify-content-center text-center p-5">
                  <h2> Play Traditional Game</h2>
                  <p> Experience New Traditional Game</p>
                  <ul>
                    <li className="nav-item">
                  <button className = "btn btn-warning"> <a href="/choicegame">Play Now</a></button>
                  </li>
                  </ul>
                  </div>
                  </div>
               </div>
            </div>    
    )
  }
}
