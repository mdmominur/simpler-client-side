import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const ProductSection = ({limit}) => {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(true);
    useEffect(()=>{
        axios.get(`https://stark-plateau-07559.herokuapp.com/products?limit=${limit}`)
        .then(result => {
            setProducts(result.data);
            setLoadProducts(false);
        });
        
    }, [limit]);
    return (
        <Container className="mt-5">
            <h1 className="display-4 fw-bold text-uppercase text-dark"><span className="border-bottom border-dark border-5">Products</span></h1>
            <Row className="g-4 mt-4">
                {
                    loadProducts ? 
                    <div className="text-center w-100">
                        <div>

                        <Spinner animation="grow" variant="secondary" />
                        </div>

                    </div>
                    :
                    products.map(product => <Col xs={12} md={3}>
                        <Card className="border">
                        <Card.Img variant="top" src={product.imgUrl} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description.slice(0, 60)}...
                            </Card.Text>
                            <Button variant="dark">Order</Button>
                        </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ProductSection;