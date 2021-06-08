import React from 'react';
import ContactPage from '../Main/Contact/ContactPage';
import FeatureHomeCard from '../Main/Features/FeatureHomeCard';
import HeaderMain from '../Main/Header/HeaderMain';

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
        </>
    );
};

export default HomePage;