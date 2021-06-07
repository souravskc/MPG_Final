import React from 'react';
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
        </>
    );
};

export default HomePage;