import React from 'react';
import hero from '../../../public/hero.png'
const HomeHeroSection = () => {
    return (
        <section className='py-5' style={{ backgroundColor: '#f9f9ff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='mt-5' style={{ height: '511px', width: '570px' }}>
                            <h2 style={{ fontSize: 80 }} className='fw-bolder'>One Step Closer To Your <span className='text-color'>Dream Job</span></h2>
                            <p className='fs-6 fw-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='bg-color py-2 px-3 mt-3 fs-6 text-white fw-bolder rounded'>Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className='img-fluid' src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;