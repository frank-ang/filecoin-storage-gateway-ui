import React from 'react';
import { Nav, NavDropdown, Navbar, Form, FormLabel } from 'react-bootstrap';

function Menubar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fixed="top" >
                <Navbar.Brand href="/">
                    &nbsp;&nbsp;
                    <img alt="Filecoin logo"
                        src="/filecoin-fil-logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    &nbsp;
                    Filecoin Storage Gateway
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link> &nbsp;
                        <Nav.Link href="/datasets">Data Sets</Nav.Link> &nbsp;
                        <NavDropdown title="Feature Backlog (coming soon! 🛠️🚧👷🏽)" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/datasets">Configure Data Sets</NavDropdown.Item>
                            <NavDropdown.Item href="/prep">Prepare Data Sets</NavDropdown.Item>
                            <NavDropdown.Item href="/repl">Replicate Data Sets</NavDropdown.Item>
                            <NavDropdown.Item href="/index">Index Data Sets</NavDropdown.Item>
                            <NavDropdown.Item href="/browse">Data Set Browser</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Item className="justify-content-end"><Navbar.Text>&nbsp;</Navbar.Text></Nav.Item>
                    </Nav>
                    text again.
                </Navbar.Collapse>
            </Navbar>

        </div>
    );

}
export default Menubar;