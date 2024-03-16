import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

const Navbar1 = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="py-4">
        <Link to="/">Task Duty</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-lg-grow-0 ">
          <Nav className="me-auto d-flex justify-content-end gap-4">
            {location.pathname === "/body" ? null : (
              <Link to="/body">All Task</Link>
            )}
            {location.pathname === "/new" ||
            location.pathname.includes("/edit/") ? null : (
              <Link to="/new">New Task</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
