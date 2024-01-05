import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer'
import { Col, Container, Row, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const SingleProduct = () => {
    const {user} = useAuth();
    const [product, setProduct] = useState({});
    const [aletShow, setAlertShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const {id} = useParams();
    useEffect(()=>{
        axios(`https://simpler-api.mominur.net/products/${id}`)
        .then(res => setProduct(res.data));
    }, [id]);
    const onSubmit = data => {
       data.imgUrl = product.imgUrl;
        data.product_id = product._id;
        data.product_name = product.title;
        data.product_price = product.price;
        axios.post('https://simpler-api.mominur.net/orders', data)
        .then(result => {
            if(result.data.insertedId){
                setAlertShow(true);
                reset();
            }
        });
    };
    return (
        <div>
            <Navigation></Navigation>
            <Container className="text-start  my-5" >
              
                        <Row>
                            <Col xs={12} md={6}>
                                <div>
                                    <img className="img-fluid" src={product.imgUrl} alt="" />
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <h1>{product.title}</h1>
                                    <h2>Price: {product.price}</h2>
                                    <p>{product.description}</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    {
                                            aletShow && <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
                                                        <Alert.Heading>Order Successful</Alert.Heading>
                                                        
                                                    </Alert>
                                    
                                        }

                                        <input placeholder="Email" className="form-control" readOnly {...register("email", {required: true})} defaultValue={user.email} />
                                    
                                        <input placeholder="Name" className="form-control mt-2" readOnly {...register("name", {required: true})}  defaultValue={user.displayName}  />
                                        <input placeholder="Phone" type="number"  className="form-control mt-2"  {...register("phone", {required: true})} />
                                        <textarea placeholder="Address" className="form-control mt-2"  {...register("address", {required: true})}></textarea>
                                    
                                            
                                        <Button type="submit" variant="dark" className="mt-4">purchase</Button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                   
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;