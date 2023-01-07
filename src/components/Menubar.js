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
                    <NavDropdown title="Data Sets" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/datasets">Configure Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/prep">Prepare Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/repl">Replicate Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/index">Index Data Sets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Retrieve" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/browse">Data Set Browser</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/wallet">Wallet</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Item><Navbar.Text>Welcome, user.</Navbar.Text></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}
export default Menubar;