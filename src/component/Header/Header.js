import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from "react";
import "./Header.scss"
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login');
    }
    return (
        <div className='header-body'>
            <Navbar expand="lg" className="">
                <Container fluid>
                    <NavLink className='ms-3 navbar-brand' to="/">Logo Page</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                            <NavLink to="/users" className='nav-link'>Users</NavLink>
                            <NavLink to="/admins" className='nav-link'>Admins</NavLink>
                            <NavLink to="/clients" className='nav-link'>Clients</NavLink>
                            {/* <NavDropdown title="Setting" className='ms-3 mb-2' id="navbarScrollingDropdown">
                                <NavDropdown.Item >Change Password</NavDropdown.Item>
                                <NavDropdown.Item >Update Infor</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Sign Out </NavDropdown.Item>

                            </NavDropdown> */}

                        </Nav>

                        <Nav className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success" className='ms-3'>Search</Button>
                            </Form>
                        </Nav>

                        <Nav className="ms-3 my-2 my-lg-0 content-right"
                        >
                            <button className='btn-login'
                                onClick={() => handleLogin()}
                            >Log in</button>
                            <button className='btn-signup'>Sign up</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>

    );
}

export default Header;