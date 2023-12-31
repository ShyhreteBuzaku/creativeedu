import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CREATIVE EDU</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: '250px' }}
              navbarScroll
            >
              <Nav.Link href="/">Lessons</Nav.Link>
              <Nav.Link href="/grammar">Grammar</Nav.Link>
              <Nav.Link href="/time">Time</Nav.Link>
              {/* <Nav.Link href="/result">Result</Nav.Link> */}
            </Nav>
            <Navbar.Text>
              <a href="https://www.linkedin.com/in/shyhrete-buzaku-a3386615b/" target='_blank'>Shyhrete Buzaku</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default Layout
