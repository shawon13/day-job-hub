import React from 'react';
import './Error.css'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <div className='w-100 text-center mx-auto position-absolute top-50' id="error-page">
            <h1 className='fs-3 fw-bold'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/home' className='btn btn-outline-success'>Back to Home</Link>
        </div>
    );
};

export default Error;