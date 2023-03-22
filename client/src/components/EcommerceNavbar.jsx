import React from 'react'

/* BOOTSTRAP IMPORTS */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// ICONS
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

export default function EcommerceNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">FAKE BLOOD</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="links-navbar me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Shop"  id="navbarScrollingDropdown" style={{marginLeft: '80px'}}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Most wanted</Nav.Link>
                        <Nav.Link href="#action2">New Arrivals</Nav.Link>
                        
                        <Nav.Link href="#" >
                            Brands
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <AiOutlineShoppingCart className='navbar-icons' style={{fontSize: '30px', marginLeft: '15px'}}/>
                    <BiLogIn className='navbar-icons' style={{fontSize: '30px', marginLeft: '15px'}}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
