import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductSection = ({limit}) => {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(true);
    useEffect(()=>{
        axios.get(`https://simpler-api.mominur.net/products?limit=${limit}`)
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
                    products.map(product => <Col xs={12} md={3} key={product._id}>
                        <Card className="border">
                        <Card.Img variant="top" src={product.imgUrl} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            <h1>${product.price}</h1>
                            {product.description.slice(0, 60)}...
                            </Card.Text>
                            <Link to={`/products/${product._id}`}>
                            <Button variant="dark">Buy Now</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ProductSection;