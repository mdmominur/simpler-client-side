import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Container, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);
    useEffect(()=>{
        axios.get('https://simpler-api.mominur.net/reviews')
        .then(res => {
            setReviews(res.data);
            setLoadingReviews(false);
        });
    }, []);
    return (
        <div className="mt-5 pt-5 bg-dark ">
            <h1 className="display-4 fw-bold text-uppercase text-light"><span className="border-bottom border-light border-5">Reviews</span></h1>
            <div className="py-5">
                <Container>
                    {
                        loadingReviews ? <div className="text-center w-100">
                                            <div>

                                            <Spinner animation="grow" variant="secondary" />
                                            </div>

                                        </div>

                                        :
                                        <Carousel className="text-light">

                                        {
                                            reviews.map(review => <Carousel.Item interval={5000} key={review._id}>
                                                    <div className="pb-5 text-center">
                                                        
                                                        <span className="col-md-6 d-inline-block">{review.review}</span>
                                                        <h5 className="text-light mt-3">Rating: &nbsp;
                                                        <Rating
                                                        readonly
                                                        emptySymbol="far fa-star"
                                                        fullSymbol="fas fa-star"
                                                        initialRating={review.rate}
                                                        />
                                                        </h5>
                                                        <h3 className="mt-3">{review.name}</h3>
                                                    </div>
                                                    
                                                </Carousel.Item>)
                                        } 
                                        
                                        </Carousel>
                    }

                </Container>

            </div>
        </div>
    );
};

export default Reviews;