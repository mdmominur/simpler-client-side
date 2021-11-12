import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin} = useAuth();
    if(!admin){
        return <Spinner animation="grow" variant="secondary" />;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
      user.email && admin ? (
            children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;