import React from 'react';
import { Link } from 'react-router-dom';
import { PageLinks, Button } from '../';
import logo from '../../images/shared/desktop/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="PayAPI company logo" />
            </Link>
            <div className="navbar__links">
                <PageLinks />
            </div>
            <Button text="Schedule a Demo" href="/contact" color="pink" />
        </div>
    )
}

export default Navbar