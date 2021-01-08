import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {

    const fontSizeMenu = { fontSize: 'larger' };
    const marginMenu = { marginRight: '8em' };
    const logo = { width: '10ex', marginLeft: '8em' };
    const navbarShadow = {
        webKitBoxShadow: '0px 3px 6px -2px rgba(0,0,0,0.6)',
        boxShadow: '0px 3px 6px -2px rgba(0,0,0,0.6)'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 py-md-2 fixed-top" style={navbarShadow}>
                <Link className="navbar-brand" to="/">
                    <img style={logo} src="img\bass-logo-store.png" alt="" />
                </Link>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={fontSizeMenu}>
                    <div className="navbar-nav ml-auto text-right" style={marginMenu}>
                        <NavLink className="nav-item nav-link mr-3" to="/bass" exact>Bass Store</NavLink>
                        <NavLink className="nav-item nav-link mr-3" to="/login" exact>Login</NavLink>
                        <a className="nav-item nav-link mr-3" type="button">Close Session</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
