import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Main from '../Main/Main';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import AddProduct from '../Products/AddProduct/AddProduct';
import Products from '../Products/Products';
import Review from '../Review/Review';
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
                            <PrivateRoute exact path={path}>
                                <Main handleShow={handleShow}></Main>
                            </PrivateRoute>
                            <PrivateRoute exact path={`${path}/pay`}>
                                <Pay handleShow={handleShow}></Pay>
                            </PrivateRoute>
                            <PrivateRoute exact path={`${path}/myOrders`}>
                                <MyOrders handleShow={handleShow}></MyOrders>
                            </PrivateRoute>
                            <PrivateRoute exact path={`${path}/review`}>
                                <Review handleShow={handleShow}></Review>
                            </PrivateRoute>

                            <AdminRoute exact path={`${path}/mangeOrders`}>
                                <ManageOrders handleShow={handleShow}></ManageOrders>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/products`}>
                                <Products handleShow={handleShow}></Products>
                            </AdminRoute>
                            <AdminRoute path={`${path}/products/add`}>
                                <AddProduct handleShow={handleShow}></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin handleShow={handleShow}></MakeAdmin>
                            </AdminRoute>
                        </Switch>

                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;