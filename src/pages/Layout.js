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
                <Nav.Link href="/">Lections</Nav.Link>
                <Nav.Link href="#grammar">Grammar</Nav.Link>
                <Nav.Link href="#dictionary">Dictionary</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  )
}

export default Layout