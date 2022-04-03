import React, { useState, useEffect } from "react";
import "./Navbar_2.css";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItem";
import Logo__ from "../Dokumentasi/logo.png";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Navbar_() {
  let user = localStorage.getItem("username");

  const [isAuthenticated, setisAuthenticated] = useState(false);

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setisAuthenticated(true);
      }
    };
    checkUser();
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo__} height="25" width="25"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" px-5 mx-5">
            <Nav className=" px-5 mx-5">
              <Nav className="px-5">
                <Nav className="me-auto mx-5 px-5 d-flex justify-content-end ">
                  {MenuItems.map((item, index) => {
                    return (
                      <Nav.Link key={index} href={item.url}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}

                  <NavDropdown title={user} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profilepage">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Nav>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo__} height="25" width="25"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" px-5 mx-5">
            <Nav className=" px-5 mx-5">
              <Nav className=" px-5 ">
                <Nav className="me-auto mx-5 px-5 d-flex justify-content-end ">
                  {MenuItems.map((item, index) => {
                    return (
                      <Nav.Link key={index} href={item.url}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Nav>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_;
