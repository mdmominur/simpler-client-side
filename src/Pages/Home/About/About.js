import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container className="mt-5 mt-md-0">
            <Row>
                <Col xs={12} md={6}>
                    <div>

                    <img className="img-fluid" src="https://i.ibb.co/3drcxG3/img-13-27d06db9-016c-4037-aa0a-4ba1183bdffd-1920-X.jpg" alt="" />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="text-start d-flex align-items-center h-100">
                        <div>
                            <h4 className="bg-dark text-light d-block d-md-inline-block px-4 mb-5 py-2 py-md-0" style={{ letterSpacing: '7px' }}>WELCOME TO OUR SHOP!</h4>
                            <h4>We offer extensive branded bath fixture</h4>
                            <p className="mt-4" style={{ color: '#3e454c', lineHeight: '1.8' }}>Improve the water and sanitation situation in rural India for among women and girls. Shramik Bharti envisions a healthier future for people in rural India. Donate Now. Make a difference. Join Us. Volunteer Now. Contribute what you can. Support our initiatives. Take Action.</p>

                            <Link to="/products">
                            <Button variant="dark">Explor Our Collections</Button>
                            </Link>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;