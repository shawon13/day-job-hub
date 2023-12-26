import React from 'react';
import './Applied.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Applied = ({ job }) => {
    const { id, logo, company_name, job_type, remote_or_onsite, location, job_title, salary } = job;
    return (
        <div className="col">
            <div className=" row border-2 border rounded mb-4 p-3">
                <div className='col-md-3 ps-0'>
                    <div className='bg-light rounded h-100 d-flex align-items-center justify-content-center'>
                        <img className='job-img' src={logo} alt="" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <h5 className="card-title fs-4 fw-bolder">{job_title}</h5>
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
                <div className='col-md-3 d-flex align-items-center justify-content-end'>
                    <Link to={`/job/${id}`}><button className='text-white fs-5 fw-medium rounded text-capitalize p-2' style={{ background: 'linear-gradient(90deg, rgba(126,144,254,1) 35%, rgba(152,115,255,1) 100%)' }}>view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Applied;