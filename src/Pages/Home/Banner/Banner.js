import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/1bxtXN6/banner1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <div className="container h-100">
                        <Row className="g-4 h-100">
                            
                                <Col className="h-100" xs={12}>
                                    <div className="h-100 d-flex align-items-center text-center text-md-start">
                                        <div>
                                            <h1 className="display-5 fw-bold">Luxury Faucets Collections</h1>
                                            <h4 className="fw-bold d-none d-md-block">flat 60% off for first 30 Customer.</h4>
                                            <p className="fw-bold d-none d-md-block">Quis est tam dissimile homini. Quia dolori non voluptas.</p>
                                            <button className="btn btn-dark">Shop Now</button>

                                        </div>
                                    </div>
                                </Col>
                                <Col>
                            
                                </Col>
                        
                        </Row>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/88mnb3s/banner2.jpg"
                alt="Second slide"
                />

               
                <Carousel.Caption className="text-dark">
                    <div className="container h-100">
                        <Row className="g-4 h-100">
                            
                                <Col  xs={12} className="h-100">
                                    <div className="h-100 d-flex align-items-center text-center text-md-start">
                                        <div>
                                            <h1 className="display-5 fw-bold">Luxury Faucets Collections</h1>
                                            <h4 className="fw-bold d-none d-md-block">flat 60% off for first 30 Customer.</h4>
                                            <p className="fw-bold d-none d-md-block">Quis est tam dissimile homini. Quia dolori non voluptas.</p>
                                            <button className="btn btn-dark">Shop Now</button>

                                        </div>
                                    </div>
                                </Col>
                                <Col>
                            
                                </Col>
                        
                        </Row>

                    </div>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
                <img
                className="d-block w-100"
                src="https://i.ibb.co/ftfr8YB/banner3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <div className="container h-100">
                        <Row className="g-4 h-100">
                            
                                <Col className="h-100"  xs={12}>
                                    <div className="h-100 d-flex align-items-center text-center text-md-start">
                                        <div>
                                            <h1 className="display-5 fw-bold">Luxury Faucets Collections</h1>
                                            <h4 className="fw-bold d-none d-md-block mt-3">flat 60% off for first 30 Customer.</h4>
                                            <p className="fw-bold d-none d-md-block mb-3">Quis est tam dissimile homini. Quia dolori non voluptas.</p>
                                            <button className="btn btn-dark">Shop Now</button>

                                        </div>
                                    </div>
                                </Col>
                                <Col xs={1} md={2}>
                            
                                </Col>
                        
                        </Row>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    );
};

export default Banner;