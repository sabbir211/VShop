import React from 'react';
import NavigationBar from '../NavigatitonBar/NavigationBar';
import TopSearchBar from '../TopSearchBar';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <TopSearchBar></TopSearchBar>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;