import React, { Component } from "react";
import { Navbar, Nav, NavLink, Container, FormControl, Form, Button } from 'react-bootstrap'
import logo from "./logo192.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height={"30"}
                                width={"30"}
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Web3 Squad
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <NavLink href="/"> Home </NavLink>
                                <NavLink href="/about"> About us </NavLink>
                                <NavLink href="/contacts"> Contacts </NavLink>
                                <NavLink href="/blog"> Blog </NavLink>
                            </Nav>
                            <Form className="d-flex" >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Form>
                            <Button variant="outline-info"> Search </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <BrowserRouter>
                    <Routes>
                       <Route exact path="/" element={<Home />} />
                       <Route exact path="/about" element={<About />} /> 
                       <Route exact path="/contacts" element={<Contacts />} /> 
                       <Route exact path="/blog" element={<Blog />} /> 
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
} 