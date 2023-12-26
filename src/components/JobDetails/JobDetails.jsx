import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faDollarSign, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { saveStoredJobApplications } from '../../utility/LocalStorage';
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const handleApplyJob = () => {
        saveStoredJobApplications(idInt);
        toast("You have applied successfully");
    }
    return (
        <>
            <section className='job-bg'>
                <div className="overlay" style={{ padding: '100px 0px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className='text-center fw-bolder text-white' style={{ fontSize: '52px' }}>Job Details</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div>
                                <p className='black-color fs-5 fw-bold'>Job Description: <span className='gray-color fs-6 fw-normal'>{job.job_description}</span></p>
                                <p className='black-color fs-5 fw-bold'>Job Responsibility: <span className='gray-color fs-6 fw-normal'>{job.job_responsibility}</span></p>
                                <p className='black-color fs-5 fw-bold d-grid lh-lg'>Educational Requirements: <span className='gray-color fs-6 fw-normal'>{job.educational_requirements}</span></p>
                                <p className='black-color fs-5 fw-bold d-grid lh-lg'>Experiences: <span className='gray-color fs-6 fw-normal'>{job.experiences}</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='job_detalis_bg p-3 rounded shadow-sm'>
                                <div>
                                    <h2 className='fs-5 border-bottom border-2 pb-3 fw-bolder'>Job details</h2>
                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <p className='black-color fs-5 fw-medium'><FontAwesomeIcon className='fs-5 me-2' style={{ color: 'rgba(126,144,254,1' }} icon={faDollarSign} /> Salary: <span className='fs-6 fw-normal'>{job.salary} (Per Month)</span></p>
                                        </li>
                                        <li>
                                            <p className='black-color fs-5 fw-medium'><FontAwesomeIcon className='fs-5 me-2' style={{ color: 'rgba(126,144,254,1' }} icon={faCalendarDays} /> Job Title: <span className='fs-6 fw-normal'>{job.job_title}</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='fs-5 border-bottom border-2 pb-3 fw-bolder'>Contact information</h2>
                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <p className='black-color fs-5 fw-medium'><FontAwesomeIcon className='fs-5 me-2' style={{ color: 'rgba(126,144,254,1' }} icon={faPhone} /> Phone: <span className='fs-6 fw-normal'>{job.contact_information?.phone}</span></p>
                                        </li>
                                        <li>
                                            <p className='black-color fs-5 fw-medium'><FontAwesomeIcon className='fs-5 me-2' style={{ color: 'rgba(126,144,254,1' }} icon={faEnvelope} /> Email: <span className='fs-6 fw-normal'>{job.contact_information?.email}</span></p>
                                        </li>
                                        <li>
                                            <p className='black-color fs-5 fw-medium mb-0'><FontAwesomeIcon className='fs-5 me-2' style={{ color: 'rgba(126,144,254,1' }} icon={faLocationDot} /> Address: <span className='fs-6 fw-normal'>{job.contact_information?.address}</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button onClick={handleApplyJob} className='text-white w-100 mt-3 fs-5 fw-medium rounded text-capitalize p-2' style={{ background: 'linear-gradient(90deg, rgba(126,144,254,1) 35%, rgba(152,115,255,1) 100%)', }}>Apply Now</button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    );
};

export default JobDetails;