import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useRouteMatch, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Sidebar.css';
const Sidebar = ({show, handleClose}) => {
    const {user, handleLogout} = useAuth();
    let { url } = useRouteMatch();

    return (
        <div>
            <div className="d-none d-md-block menu">
                <ul className="pt-5">
                    <li>
                        <NavLink exact to="/" activeClassName="active">Website</NavLink>
                    </li>

                    <li>
                        <NavLink exact to={url} activeClassName="active">Dashboard</NavLink>
                    </li>
                    
                    <li>
                        <NavLink exact to={`${url}/products`} activeClassName="active">Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={`${url}/makeAdmin`} activeClassName="active">Make Admin</NavLink>
                    </li>

                    <hr />
                    <div className="w-100 text-center">
                    <h6>{user.displayName}</h6>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

                    </div>
                </ul>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className="menu pe-5">
                <ul className="pt-5">
                    <li>
                        <NavLink exact to="/" activeClassName="active">Website</NavLink>
                    </li>

                    <li>
                        <NavLink exact to={url} activeClassName="active">Dashboard</NavLink>
                    </li>
                    
                    <li>
                        <NavLink exact to={`${url}/products`} activeClassName="active">Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact to={`${url}/makeAdmin`} activeClassName="active">Make Admin</NavLink>
                    </li>

                    <hr />
                    <div className="w-100 text-center">
                    <h6>{user.displayName}</h6>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

                    </div>
                </ul>
                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Sidebar;