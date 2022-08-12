import React from 'react';
import NavigationBar from '../NavigatitonBar/NavigationBar';
import TopSearchBar from '../TopSearchBar';
import Banner from './Banner';
import OurCommitment from './OurCommitment';

const Home = () => {
    return (
        <div>
            <TopSearchBar></TopSearchBar>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <OurCommitment></OurCommitment>
        </div>
    );
};

export default Home;