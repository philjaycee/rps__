import React, {useState,useEffect} from 'react'
import './Navbar_2.css'
import { useNavigate } from 'react-router-dom'
import {MenuItems } from './MenuItem'

import {
    Navbar,
    Nav,
    NavDropdown,
    Container, 
    
} from 'react-bootstrap'



 //if (!isAuthenticated) return 
 //navigate('/login')






 /*
 useEffect(() => {
        
  const checkUser = () => {
    const token = localStorage.getItem('token')
    if(!!token) {
       setisAuthenticated(true)
    }
  }
  
  checkUser()

}, [isAuthenticated])
*/


/*

 useEffect(() => {
        
  const checkUser = () => {
    const token = localStorage.getItem('token')
    if(token) {
       setisAuthenticated(true)
    }
    console.log(isAuthenticated)
  }
  
  checkUser()

}, [isAuthenticated])

*/



function Navbar_() {

  const [isAuthenticated, setisAuthenticated] = useState(false)

  const navigate = useNavigate()
  
  function logOut() {
    localStorage.clear()
    navigate('/login')
 } 



 useEffect(() => {
        
  const usermustLogin = () => {
    const token = localStorage.getItem('token')
    if(!token) {
       navigate('/login')
    }
    console.log(isAuthenticated)
  }
  usermustLogin()
},[isAuthenticated])
 

useEffect(() => {
        
  const checkUser = () => {
    const token = localStorage.getItem('token')
    if(token) {
       setisAuthenticated(true)
    }
  }
  
  checkUser()

},[isAuthenticated])

    
   

  
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
              
              <NavDropdown title="username" id="basic-nav-dropdown">
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

export default Navbar_
