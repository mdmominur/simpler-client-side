
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = ({handleShow}) => {
    const {user,} = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteSuccessShow, setDeleteSuccessShow] = useState(false);

    useEffect(()=>{
        axios.get(`https://simpler-api.mominur.net/orders/${user.email}`)
        .then(res=>{
            setOrders(res.data);
            setIsLoading(false);
        });
    }, [user.email, deleteSuccessShow]);

    const cancelOrder = id => {
        const con = window.confirm('Are you sure?');
        if(con){
            axios.delete(`https://simpler-api.mominur.net/orders/${id}`)
            .then(res => setDeleteSuccessShow(true));
        }
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
                        <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Action</th>
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
                                                    {order.phone}
                                                </td>
                                                <td>
                                                    {order.address}
                                                </td>
                                                <td>
                                                    {order.status ? <span className="badge bg-success">Approved</span> : <span className="badge bg-danger">Pending</span>}
                                                </td>
                                                <td>
                                                    <Button variant="danger" size="sm" onClick={() => cancelOrder(order._id)}>Cancel</Button>
                                                   
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

export default MyOrders;