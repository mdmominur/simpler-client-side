import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="vh-100 w-100 d-flex align-items-center justify-content-center text-center">
            <div className="">
                <h1 className="display-1 fw-bold">404 </h1>
                <p>Page Not Found</p>
                <Link to="/">
                <button className="btn btn-dark">BACK TO HOME</button>
                </Link>

                </div>
        </div>
    );
};

export default NotFound;