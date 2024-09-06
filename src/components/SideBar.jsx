import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Collapse,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <aside className="col col-2">
      <Navbar
        expand="md"
        className="navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-expanded="false"
            aria-controls="navbarNavAltMarkup"
            onClick={() => setOpen(!open)}
          />
          <span className="navbar-toggler-icon"></span>
          <Collapse in={open}>
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="flex-column">
                <ul>
                  <li>
                    <Nav.Link
                      href="#"
                      className="nav-item d-flex align-items-center"
                    >
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      href="#"
                      className="nav-item d-flex align-items-center"
                    >
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </Nav.Link>
                  </li>
                  <li>
                    <InputGroup className="mt-3">
                      <FormControl
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <Button className="btn btn-outline-secondary btn-sm">
                        GO
                      </Button>
                    </InputGroup>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </div>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </aside>
    </>
  );
};

export default Sidebar;
