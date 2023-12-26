import React, { useEffect, useState } from 'react';
import './AppliedJob.css';
import { useLoaderData } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { getStoredJobApplications } from '../../utility/LocalStorage';
import Applied from '../Applied/Applied';

const AppliedJob = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'Onsite') {
            const OnsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(OnsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobId = getStoredJobApplications();
        if (jobs.length > 0) {
            const appliedJobs = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    appliedJobs.push(job);
                }
            }
            setAppliedJobs(appliedJobs);
            setDisplayJobs(appliedJobs);
        }
    }, [jobs])
    return (
        <>
            <section className='applied-bg'>
                <div className="overlay" style={{ padding: '100px 0px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className='text-center fw-bolder text-white' style={{ fontSize: '52px' }}>Applied Job</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <NavDropdown className='btn btn-light float-end fs-6 fw-bolder' title="Filter" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => handleJobsFilter('All')}>All</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleJobsFilter('Remote')}>Remote</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleJobsFilter('Onsite')}>Onsite</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className="row row-cols-1 mt-5">
                        {
                            displayJobs.map(job => <Applied key={job.id} job={job}></Applied>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppliedJob;