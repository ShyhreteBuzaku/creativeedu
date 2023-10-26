import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">CREATIVE EDU</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Lessons</Nav.Link>
                {/* <Nav.Link href="/grammar">Grammar</Nav.Link> */}
                <Nav.Link href="/result">Result</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Welcome: <a href="https://www.linkedin.com/in/shyhrete-buzaku-a3386615b/" target='_blank'>Shyhrete Buzaku</a>
              </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  )
}

export default Layout