import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {

    render() {

        const content = this.props.navbarContent

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto text-center">
                            {
                                content.map( //this goes through everything and returns creates a Nav.Link
                                    (item) => {
                                        return (
                                            <Nav.Link key={item} href={"#"+item}>{item}</Nav.Link>
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
}
