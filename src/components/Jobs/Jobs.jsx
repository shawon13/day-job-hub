import React from 'react';
import './Jobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { id, logo, company_name, job_type, remote_or_onsite, location, job_title, salary } = job;
    return (
        <div className="col">
            <div className="card p-4">
                <img className='job-img' src={logo} alt="" />
                <div className="card-body p-0">
                    <h5 className="card-title fs-4 fw-bolder mt-4">{job_title}</h5>
                    <p className="card-text description fs-5">{company_name}</p>
                    <div className='d-flex'>
                        <p className="border-job w-25 mb-0 text-center fs-6 fw-bold py-2 px-3 rounded">{remote_or_onsite}</p>
                        <p className="border-job w-25 mb-0 text-center fs-6 fw-bold py-2 px-3 rounded ms-3">{job_type}</p>
                    </div>
                    <div className='mt-3 d-flex'>
                        <p className='description'>
                            <FontAwesomeIcon icon={faLocationDot} /><span className='ms-1'>{location}</span>
                        </p>
                        <p className='description ms-3'>
                            <FontAwesomeIcon icon={faDollarSign} /><span className='ms-1'>{salary}</span>
                        </p>

                    </div>
                </div>
                <Link to={`/job/${id}`}><button className='text-white fs-5 fw-medium rounded text-capitalize p-2' style={{ background: 'linear-gradient(90deg, rgba(126,144,254,1) 35%, rgba(152,115,255,1) 100%)', width: '30%' }}>view details</button></Link>
            </div>
        </div>
    );
};

export default Jobs;