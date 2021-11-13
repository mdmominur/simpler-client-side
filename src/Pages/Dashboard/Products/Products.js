import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Spinner, Table } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const Products = ({handleShow}) => {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(true);
    const [deleteSuccessShow, setDeleteSuccessShow] = useState(false);
    const {url} = useRouteMatch();

    useEffect(()=>{
        axios.get('https://stark-plateau-07559.herokuapp.com/products?limit=all')
        .then(result => {
            setProducts(result.data);
            setLoadProducts(false);
        });
        
    }, [deleteSuccessShow]);

    const handleProductDelete = id =>{
        const con = window.confirm('Are you sure?');
        if(con){
            axios.delete(`https://stark-plateau-07559.herokuapp.com/products/${id}`)
            .then(res => {
                console.log(res.data);
                setDeleteSuccessShow(true);
            });
        }
    }
    return (
        <Card>
                        <Card.Header>
                        <Card.Title className="d-flex justify-content-between align-items-center py-3">
                            
                                <Button className="d-block d-md-none" variant="dark" onClick={handleShow}>
                                <i className="fas fa-bars"></i>
                                </Button> Products
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Link to={`${url}/add`}>
                           <Button variant="dark">Add Product</Button>
                            </Link>
                            {
                                deleteSuccessShow && <Alert variant="danger" onClose={() => setDeleteSuccessShow(false)} dismissible>
                                <Alert.Heading>Product Deleted</Alert.Heading>
                                
                                </Alert>
                            }
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Descriptions</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadProducts? <tr>
                                            <td colSpan="100" className="text-center"> <Spinner animation="grow" variant="secondary" /></td>
                                        </tr>
                                        :
                                        products.map((product) => <tr key={product._id}>
                                                <td>
                                                    <img width="100" src={product.imgUrl} alt="" />
                                                </td>
                                                <td>
                                                    {product.title}
                                                </td>
                                                <td>
                                                    {product.price}
                                                </td>
                                                <td style={{ minWidth: '350px' }}>
                                                    {product.description}
                                                </td>
                                                <td>
                                                   <Button variant="danger" onClick={() => handleProductDelete(product._id)}>Delete</Button> 
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

export default Products;