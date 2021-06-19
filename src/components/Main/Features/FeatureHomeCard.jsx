import React from 'react';
import FeatureCardData from '../../../../myPathGuiderData/FearuresCardData/FeaturesData.json';
import SingleFreaturesCard from './SingleFreaturesCard';
import './FeaturesCardStyle.css';
const FeatureHomeCard = () => {
    const featureData = FeatureCardData;
    // console.log(featureCardData);
    return (
        <div>
            <div className="">
                <div className="cardContainer">
                <div className="cardValue">
                        <h1>Our Feature</h1>
                </div>
                <div>
                        <img src="https://i.ibb.co/H2j7Grf/feature-icon.png" alt="Feature" />
                </div>
                </div>

                <div className="featureCardFullContainer">
                    {
                        featureData.map( data => <SingleFreaturesCard key={data.title} featureData={data}></SingleFreaturesCard>)
                    }           
                </div>
            </div>
        </div>
    );
};

export default FeatureHomeCard;
