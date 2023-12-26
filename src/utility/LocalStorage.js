const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem('job-applications');
    if (storedJobApplications) {
        return JSON.parse(storedJobApplications);
    }
    return [];
}

const saveStoredJobApplications = (id) => {
    const storedJobApplications = getStoredJobApplications();
    const extsis = storedJobApplications.find(jobId => jobId === id);
    if (!extsis) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export { getStoredJobApplications, saveStoredJobApplications }