import React from 'react';
import Header from '../Header/Header';
import HomeHeroSection from '../HomeHeroSection/HomeHeroSection';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <HomeHeroSection />
            <Category />
        </div>
    );
};

export default Home;