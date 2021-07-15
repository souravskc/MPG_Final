import React, { useState,history } from 'react';
import Login from '../Auth/Login/Login';
import ContactPage from '../Main/Contact/ContactPage';
import FeatureHomeCard from '../Main/Features/FeatureHomeCard';
import HeaderMain from '../Main/Header/HeaderMain';
import Signup from '../Auth/Signup/Signup';
import ContactUSVTWO from '../Main/Contact/ContactV2/ContactUSVTWO';
import Community from '../Main/Community/Community';


const HomePage = () => {

    // ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <>
            <div>
                <HeaderMain></HeaderMain>
            </div>
            <div>
                <FeatureHomeCard></FeatureHomeCard>
            </div>
            <div>
                <Community></Community>
            </div>
            <div>
                {/* <ContactPage></ContactPage> */}
                <ContactUSVTWO></ContactUSVTWO>
            </div>
            <div className="mt-5 mb-5">
                {/* <Login></Login> */}
            </div>
            {/* <Signup></Signup> */}
        </>
    );
};

export default HomePage;
