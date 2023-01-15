import React from 'react';
import { Nav, NavDropdown, Navbar, } from 'react-bootstrap';

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
                        <Nav.Link href="/DataSets">DataSets</Nav.Link> &nbsp;
                        <Nav.Link href="/DataSetConfigEditor">DataSet Configurator</Nav.Link> &nbsp;
                        <Nav.Link href="/SPCatalog">SP Catalog</Nav.Link> &nbsp;
                        <Nav.Link href="/DataSetBrowser">DataSet Browser</Nav.Link> &nbsp;
                        <NavDropdown title="Feature Backlog 🛠️🚧👷🏽" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/datasets">Configure DataSets</NavDropdown.Item>
                            <NavDropdown.Item href="/">Preparation Jobs</NavDropdown.Item>
                            <NavDropdown.Item href="/">Replication Jobs</NavDropdown.Item>
                            <NavDropdown.Item href="/">SP Catalog</NavDropdown.Item>
                            <NavDropdown.Item href="/">Retrieval Indexer</NavDropdown.Item>
                            <NavDropdown.Item href="/">Retrieval Browser</NavDropdown.Item>
                            <NavDropdown.Item href="/">Fund Wallet!</NavDropdown.Item>
                            <NavDropdown.Item href="/">Backup/Restore Wallet</NavDropdown.Item>
                            <NavDropdown.Item href="/">Backup/Restore Gateway</NavDropdown.Item>
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