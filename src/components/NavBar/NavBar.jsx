import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ navbar }) => {
    const { name, path } = navbar;
    return (
        <li className='me-5'>
            <Link className='text-decoration-none fs-6 fw-bold text-color' to={path}>{name}</Link>
        </li>
    );
};

export default NavBar;