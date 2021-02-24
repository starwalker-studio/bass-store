import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logUserAction, closeSession } from '../redux/userDucks';

import { auth } from '../firebase';

import '../styles/nav-style.css';


const Navbar = () => {

    const dispatch = useDispatch();

    const loading = useSelector(store => store.googleUser.loading);
    const active = useSelector(store => store.googleUser.active);
    const userDisplay = useSelector(store => store.googleUser.user.displayName);
    const userImg = useSelector(store => store.googleUser.user.display);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 py-md-2 fixed-top navbar-shadow" >
                <Link className="navbar-brand" to="/">
                    <img className="logo-navbar" src="img\bass-logo-store.png" alt="" />
                </Link>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse font-menu-navbar" id="navbarNav" >
                    <div className="navbar-nav ml-auto " >
                        {
                            active ? (
                                <div className="d-flex justify-content-end mr-5">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-item nav-link mr-3">
                                                {userDisplay}
                                                <img className="img-display ml-2" src={userImg} alt="" /></a>

                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-item nav-link mr-3" to="/bass" exact>
                                                My cart
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ml-2 bi bi-cart4" viewBox="0 1.5 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dot noti-icon-badge" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                    </svg></span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-item nav-link mr-3" type="button"
                                                onClick={() => dispatch(closeSession())}>Close Session</a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                    <div className="d-flex justify-content-end margin-menu-navbar">
                                        <button className="btn btn-dark log-out-button"
                                            type="button"
                                            onClick={() => dispatch(logUserAction())}
                                            disabled={loading}>Login</button>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
