import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    // get user name from state by using context
    const { user, logOut } = useContext(AuthContext)
    console.log("getting user for header", user?.displayName);

    // logOut handle mathod 
    const handleLogOut = () => {
        logOut()
            .then(() => { console.log("log out success") })
            .catch((error) => { console.error(error) })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='px-5 py-2'>
                <Navbar.Brand><Link to='/'>Daily News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link ><Link to='/MyLocation'>Map</Link> </Nav.Link>
                        <Nav.Link href="#pricing">Hot News</Nav.Link>
                        <Nav.Link href="#pricing">BBC</Nav.Link>
                        <Nav.Link href="#pricing">CNN</Nav.Link>
                        <NavDropdown title="Categoris" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Something
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user ?
                                    <>
                                        <span className='text-primary font-weight-bold text d-flex align-items-center'>
                                            {user?.displayName}
                                        </span>
                                        <Link
                                            className='image-nav userProfile d-flex align-items-center ms-4'
                                            /*[its commented] eventKey={2} href="#memes"*/
                                            to='/profile'
                                        >
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        className='image'
                                                        style={{ height: '30px' }}
                                                        src={user.photoURL}
                                                        roundedCircle
                                                    ></Image>
                                                    :
                                                    <AiOutlineUser></AiOutlineUser>
                                            }
                                        </Link>
                                        <button
                                            onClick={handleLogOut}
                                            className='logOutBtn'
                                        >
                                            <FiLogOut></FiLogOut>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link
                                            to='/login'>
                                            Login
                                        </Link>
                                        <Link
                                            className='ms-3'
                                            to='/register'>
                                            Register
                                        </Link>
                                    </>
                            }

                        </>
                    </Nav>
                    {/* import leftNavbar, block-sm, none-lg */}
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;