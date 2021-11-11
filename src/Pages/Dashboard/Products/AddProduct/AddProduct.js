import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = ({handleShow}) => {
    const { register, handleSubmit, reset } = useForm();
    const [aletShow, setAlertShow] = useState(false);

    const onSubmit = data => {
        axios.post('https://stark-plateau-07559.herokuapp.com/products', data)
        .then(result => {
            if(result.data.insertedId){
                setAlertShow(true);
                reset();
            }
        });
    };
    return (
        <Card>
                        <Card.Header>
                        <Card.Title className="d-flex justify-content-between align-items-center py-3">
                            
                                <Button className="d-block d-md-none" variant="dark" onClick={handleShow}>
                                <i className="fas fa-bars"></i>
                                </Button> Add Products
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {
                                aletShow && <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
                                            <Alert.Heading>Product Added</Alert.Heading>
                                            
                                        </Alert>
                        
                            }
                            <Link to={`/dashboard/products`}>
                           <Button variant="dark">Back to Products</Button>
                            </Link>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Col md={6}>
                                    <input placeholder="Product Title" className="form-control mt-4"  {...register("title", {required: true})} />
                                </Col>
                                <Col md={6}>
                                    <input placeholder="Product Price" type="number" className="form-control mt-2"  {...register("price", {required: true})} />
                                </Col>
                            </Row>
                            <textarea placeholder="Product Descriptions" className="form-control mt-2"  {...register("description", {required: true})}></textarea>
                        
                            <input placeholder="Image Url" className="form-control mt-2"  {...register("imgUrl", {required: true})} />
                            
                           <Button type="submit" variant="dark" className="mt-4">Add Product</Button>
                            </form>
                        </Card.Body>
         </Card>
    );
};

export default AddProduct;