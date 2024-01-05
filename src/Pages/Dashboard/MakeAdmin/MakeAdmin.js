import axios from 'axios';
import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = ({handleShow}) => {
    const { register, handleSubmit, reset } = useForm();
    const [aletShow, setAlertShow] = useState(false);
    const onSubmit = data => {
        axios.put('https://simpler-api.mominur.net/user/makeAdmin', data)
        .then(result => {
            if(result.data.modifiedCount){
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
                                </Button> Make an admin
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {
                                aletShow && <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
                                            <Alert.Heading>Promoted To Admin</Alert.Heading>
                                            
                                        </Alert>
                        
                            }
                           
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Email" className="form-control mt-2"  {...register("email", {required: true})} />
                            
                           <Button type="submit" variant="dark" className="mt-4">Make Admin</Button>
                            </form>
                        </Card.Body>
         </Card>
    );
};

export default MakeAdmin;