import React from 'react';
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
                    <Nav.Link href="/datasets">Data Sets</Nav.Link>

                    <NavDropdown title="Feature Backlog" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/datasets">Configure Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/prep">Prepare Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/repl">Replicate Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/index">Index Data Sets</NavDropdown.Item>
                        <NavDropdown.Item href="/browse">Data Set Browser</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
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