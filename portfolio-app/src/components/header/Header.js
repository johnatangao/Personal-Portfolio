import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import './Header.css'

export default function Header(props) {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-center">
                        {
                            props.navbarContent.map( //this goes through everything and returns creates a Nav.Link
                                (item) => {
                                    return (
                                        <Nav.Link key={item} href={'#'+item}>{item}</Nav.Link>
                                    )
                                }
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}