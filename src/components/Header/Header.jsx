import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Header = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Statistics', path: '/statistics' },
        { id: 3, name: 'Applied Jobs', path: '/applied' },
        { id: 4, name: 'Blog', path: '/blog' }
    ]
    return (
        <section className='shadow-sm'>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h2 className='text-capitalize'>DayJobHub</h2>
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {
                            routes.map(navbar => <NavBar key={navbar.id} navbar={navbar}></NavBar>)
                        }
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="bg-color py-2 px-3 me-2 rounded text-white text-capitalize">star applying</button>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default Header;