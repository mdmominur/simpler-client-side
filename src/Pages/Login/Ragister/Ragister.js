import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Ragister = () => {
    const { register, handleSubmit } = useForm();
    const {handleSignUpEmailPassword, error, setError} = useAuth();

    const history = useHistory();
    const onSubmit = (data) => {
        handleSignUpEmailPassword(data, history);
        setError("");
    };
    return (
        <>
        <Navigation></Navigation>
        <Container className="mt-3">
            <div className="col-md-6 mx-auto shadow p-4">
                <h1>Registration</h1>
                {
                    error &&
                    <Alert variant="danger" onClick={()=> setError("")}  dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                        {error}
                        </p>
                    </Alert>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Full Name" className="form-control mt-2" {...register("name",  { required: true })} />
                        <input placeholder="Email" className="form-control mt-2" {...register("email",  { required: true })} />
                        <input placeholder="Password" type="password" className="form-control mt-2" {...register("password",  { required: true })} />
                        <input placeholder="Confirm Password" type="password" className="form-control mt-2" {...register("password2",  { required: true })} />
                        <NavLink to="/login" className="text-dark">
                            Don't have an account ? Create one.
                        </NavLink><br />
                        <input type="submit" className="btn btn-dark mt-2" />
                </form>
                
            </div>
        </Container>
        </>
    );
};

export default Ragister;