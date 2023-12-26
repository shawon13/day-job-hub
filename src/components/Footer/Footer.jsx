import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <section className='py-5' style={{ backgroundColor: '#1a1919' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='text-white'>
                            <h2 className='text-capitalize fw-bold'>day job hub</h2>
                            <p className='fw-normal'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <ul className='d-flex list-unstyled mb-0'>
                                <li className='fs-3'><FontAwesomeIcon icon={faFacebookSquare} /></li>
                                <li className='ms-3 fs-3'><FontAwesomeIcon icon={faTwitterSquare} /></li>
                                <li className='ms-3 fs-3'><FontAwesomeIcon icon={faInstagramSquare} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h5 className='text-white fw-bold'>Company</h5>
                            <ul className='list-unstyled'>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">About Us</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Work</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Latest News</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h5 className='text-white fw-bold'>Product</h5>
                            <ul className='list-unstyled'>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Prototype</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Plans & Pricing</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Customers</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Integrations</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h5 className='text-white fw-bold'>Support</h5>
                            <ul className='list-unstyled'>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Help Desk</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Sales</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Become a Partner</a></li>
                                <li className='my-2'><a className='text-white text-decoration-none fw-normal' href="">Developers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <h5 className='text-white fw-bold'>Contact</h5>
                            <ul className='list-unstyled'>
                                <li className='my-2'><a href="" className='text-white text-decoration-none fw-normal'>524 Broadway , NYC</a></li>
                                <li className='my-2'><a href="" className='text-white text-decoration-none fw-normal'>+1 777 - 978 - 5570</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;