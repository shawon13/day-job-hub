import React from 'react';
import Header from '../Header/Header';
import HomeHeroSection from '../HomeHeroSection/HomeHeroSection';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJob/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HomeHeroSection />
            <Category />
            <FeaturedJobs />
        </div>
    );
};

export default Home;