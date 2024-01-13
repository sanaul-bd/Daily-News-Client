import React from 'react';
import './Main.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Pages/Shared/RightSidenav/RightSideNav';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='pt-3'>
                <Row className='m-0 p-0 justify-content-center'>
                    <Col className='p-0 d-none d-lg-block' lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col className='p-0 mx-1' lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col className='p-0' lg="2">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;