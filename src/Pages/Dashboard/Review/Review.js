import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';
import './Reivew.css';

const Review = ({handleShow}) => {
    const {user} = useAuth();
    const [aletShow, setAlertShow] = useState(false);
    const [rate, setRate] = useState(0);
    const [review, setReview] = useState('');
    
    const handleRatingData = e =>{
        
        setReview(e.target.value)
    }

    const handleReviewSubmit = e => {
        e.preventDefault();
        if(rate !== 0 && review !== ''){
            axios.post('https://stark-plateau-07559.herokuapp.com/reviews', {email:user.email, name:user.displayName, rate: rate, review:review})
            .then(res => {
                if(res.data.insertedId){
                    setAlertShow(true);
                    document.getElementById('reviewField').value = ""
                }
            });
        }else{
            alert('Rating or Review can not be empty');
        }
        
    }
    return (
        <Card>
                        <Card.Header>
                        <Card.Title className="d-flex justify-content-between align-items-center py-3">
                            
                                <Button className="d-block d-md-none" variant="dark" onClick={handleShow}>
                                <i className="fas fa-bars"></i>
                                </Button> My Reviews
                        </Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <h1>Add a review</h1>  
                        <form onSubmit={handleReviewSubmit}>
                                    {
                                            aletShow && <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
                                                        <Alert.Heading>Review Added to the home page</Alert.Heading>
                                                        
                                                    </Alert>
                                    
                                        }

                                        <input placeholder="Email" className="form-control" readOnly defaultValue={user.email} />
                                    
                                        <input placeholder="Name" className="form-control mt-2" readOnly   defaultValue={user.displayName}  />
                                        <span className="fw-bold fs-2">Rating:</span>
                                        <Rating
                                            name="rating"
                                            onClick={setRate}
                                            emptySymbol="far fa-star fa-2x "
                                            fullSymbol="fas fa-star fa-2x"
                                            fractions={2}
                                            />
                                        <textarea placeholder="Review" onBlur={handleRatingData} className="form-control mt-2" id="reviewField"></textarea>
                                    
                                            
                                        <Button type="submit" variant="dark" className="mt-4">Add</Button>
                                    </form>
                            
                        </Card.Body>
                    </Card>
    );
};

export default Review;