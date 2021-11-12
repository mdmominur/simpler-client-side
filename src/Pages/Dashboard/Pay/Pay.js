
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Pay = ({handleShow}) => {
    return (
        <Card>
                        <Card.Header>
                        <Card.Title className="d-flex justify-content-between align-items-center py-3">
                            
                                <Button className="d-block d-md-none" variant="dark" onClick={handleShow}>
                                <i className="fas fa-bars"></i>
                                </Button> Pay
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                            Payment System Comming soon
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
    );
};

export default Pay;