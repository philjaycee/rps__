import React, { Component } from 'react'
import './Navbar_2.css'
import { useNavigate } from 'react-router-dom'
import {MenuItems } from './MenuItem'

import {
    Navbar,
    Nav,
    NavDropdown,
    Container, 
    
} from 'react-bootstrap'


const history = useNavigate
  
  function logOut() {
     history.push('/register')
  }



export default class Navbar_ extends Component {
  
  
  
  render() {
    return (
        <Navbar bg="dark" variant="dark"  expand="lg"  >
        <Container>
          
          <Navbar.Brand href="#home">Logo</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="me-auto mx-5 d-flex justify-content-end ">

            {MenuItems.map((item,index) => {
            return(
              <Nav.Link key={index} href={item.url}>
                {item.title}</Nav.Link>
                )
              })}
              
              <NavDropdown title="User Name" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Another Link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
