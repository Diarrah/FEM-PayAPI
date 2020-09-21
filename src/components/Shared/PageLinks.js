import React from 'react';
import { Link } from 'react-router-dom';

const PageLinks = () => {
    const links = ['pricing', 'about', 'contact'];

    return (
        <ul className="page__links">
            {links.map(link => (
                <li className="page__link" key={link}>
                    <Link to={`/${link}`}>{link}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks;