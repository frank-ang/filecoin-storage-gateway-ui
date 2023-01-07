import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Menubar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fixed="top" >
                <Navbar.Brand href="/">Filecoin Storage Gateway</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/feature1">Feature 1</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Item><Navbar.Text>Hello, Your name here.</Navbar.Text></Nav.Item>
                        <Nav.Item>some item</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}
export default Menubar;