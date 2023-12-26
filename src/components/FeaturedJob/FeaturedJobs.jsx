import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import Jobs from '../Jobs/Jobs';
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='title-size fw-bolder'>Featured Jobs</h2>
                        <p className='description fw-medium w-50 mx-auto'>A Featured Job Advertisement is prominently highlighted and promoted to the top of the relevant job channel pages in order to improve visibility within the search results.</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-3 mt-3">
                    {
                        jobs.slice(0, dataLength).map(job => <Jobs key={job.id} job={job}></Jobs>)
                    }
                </div>
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(jobs.length)} className='fs-5 fw-medium d-flex mx-auto text-white mt-4 rounded px-3 py-2' style={{ background: 'linear-gradient(90deg, rgba(126,144,254,1) 35%, rgba(152,115,255,1) 100%)' }}>See All Jobs</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedJobs;