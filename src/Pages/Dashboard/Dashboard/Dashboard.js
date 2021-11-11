import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import Main from '../Main/Main';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../Products/AddProduct/AddProduct';
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    let { path } = useRouteMatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="container text-start">
            <Row>
                <Col md={2}>
               
                    <Sidebar show={show} handleClose={handleClose}></Sidebar>
                </Col>
                <Col xs={12} md={10} >
                <div className="vh-100 py-4">
                    <div className="overflow-auto h-100 shadow">
                        <Switch>
                            <Route exact path={path}>
                                <Main handleShow={handleShow}></Main>
                            </Route>
                            <Route exact path={`${path}/products`}>
                                <Products handleShow={handleShow}></Products>
                            </Route>
                            <Route path={`${path}/products/add`}>
                                <AddProduct handleShow={handleShow}></AddProduct>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin handleShow={handleShow}></MakeAdmin>
                            </Route>
                        </Switch>

                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;