
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageOrders = ({handleShow}) => {
    const {user,} = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteSuccessShow, setDeleteSuccessShow] = useState(false);
    const [updateSuccessShow, setUpdateSuccessShow] = useState(false);

    useEffect(()=>{
        axios.get(`https://stark-plateau-07559.herokuapp.com/orders/`)
        .then(res=>{
            setOrders(res.data);
            setIsLoading(false);
        });
    }, [user.email, deleteSuccessShow, updateSuccessShow]);

    const cancelOrder = id => {
        const con = window.confirm('Are you sure?');
        if(con){
            axios.delete(`https://stark-plateau-07559.herokuapp.com/orders/${id}`)
            .then(res => setDeleteSuccessShow(true));
        }
    }
    const updateStatus = id => {
        axios.put(`https://stark-plateau-07559.herokuapp.com/orders/${id}`)
        .then(res => {
            setUpdateSuccessShow(true);
        });
        
    }
    return (
        <Card>
                        <Card.Header>
                        <Card.Title className="d-flex justify-content-between align-items-center py-3">
                            
                                <Button className="d-block d-md-none" variant="dark" onClick={handleShow}>
                                <i className="fas fa-bars"></i>
                                </Button> My Orders
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {
                                deleteSuccessShow && <Alert variant="danger" onClose={() => setDeleteSuccessShow(false)} dismissible>
                                <Alert.Heading>Order Cancelled</Alert.Heading>
                                
                                </Alert>
                            }
                            {
                                updateSuccessShow && <Alert variant="success" onClose={() => setUpdateSuccessShow(false)} dismissible>
                                <Alert.Heading>Status Updated</Alert.Heading>
                                
                                </Alert>
                            }
                        <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Customer Name</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        isLoading? <tr>
                                            <td colSpan="100" className="text-center"> <Spinner animation="grow" variant="secondary" /></td>
                                        </tr>
                                        :
                                        orders.map((order) => <tr key={order._id}>
                                                <td>
                                                <img height="100" src={order.imgUrl} alt="" />
                                                </td>
                                                <td>
                                                {order.product_name}
                                                </td>
                                                <td>
                                                    ${order.product_price}
                                                </td>
                                                <td>
                                                    {order.name}
                                                </td>
                                                
                                                <td>
                                                    {order.phone}
                                                </td>
                                                <td>
                                                    {order.address}
                                                </td>
                                                <td>
                                                    {order.status ? <span className="badge bg-success">Shipped</span> : <span className="badge bg-danger">Pending</span>}
                                                </td>
                                                
                                                <td>
                                                  {
                                                        !order.status && <Button variant="success" size="sm" className="mb-2" onClick={() => updateStatus(order._id)}>Approve</Button>
                                                  }
                                                    
                                                </td>
                                               
                                                <td>
                                                    <Button variant="danger" size="sm" className="ms-2" onClick={() => cancelOrder(order._id)}>Cancel</Button>
                                                </td>
                                                
                                            </tr>
                                        )
                                    }
                                   
                                </tbody>
                            </Table>

                       
                        </Card.Body>
                    </Card>
    );
};

export default ManageOrders;