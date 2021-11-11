import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const {handleGoogleSignIn, handleEmailLogin, error, setError} = useAuth();
    const { register, handleSubmit } = useForm();
    
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data =>{
        handleEmailLogin(data, location, history);
        setError('');
    };

    const loginWithGoogle = () => {
        handleGoogleSignIn(location, history);

    }

    return (
        <>
        <Navigation></Navigation>
        <Container className="mt-3">
            <div className="col-md-6 mx-auto shadow p-4">
                <h1>Login</h1>

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
                        <input placeholder="Email" type="email" className="form-control mt-2" {...register("email", { required: true })} />
                        <input placeholder="Password" type="password" className="form-control mt-2" {...register("password", { required: true })} />
                        <NavLink to="/register" className="text-dark">
                            Don't have an account ? Create one.
                        </NavLink><br />
                        <input type="submit" value='Login' className="btn btn-dark mt-2" />
                </form>
                <div>-----------------------------------</div>
                <button onClick={loginWithGoogle} className="btn btn-dark"> Login with google</button>
            </div>
        </Container>
        </>
    );
};

export default Login;