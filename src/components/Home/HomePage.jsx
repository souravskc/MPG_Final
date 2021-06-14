import React from 'react';
import Login from '../Auth/Login/Login';
import ContactPage from '../Main/Contact/ContactPage';
import FeatureHomeCard from '../Main/Features/FeatureHomeCard';
import HeaderMain from '../Main/Header/HeaderMain';
import Signup from '../Auth/Signup/Signup';

const HomePage = () => {
    return (
        <>
            <div>
                <HeaderMain></HeaderMain>
            </div>
            <div>
                <FeatureHomeCard></FeatureHomeCard>
            </div>
            <div>
                <ContactPage></ContactPage>
            </div>
            <div className="mt-5 mb-5">
                {/* <Login></Login> */}
            </div>
            {/* <Signup></Signup> */}
        </>
    );
};

export default HomePage;