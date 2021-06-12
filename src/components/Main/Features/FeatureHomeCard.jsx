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
                <div className= "mainContainer">
                    <h1>Our Features</h1>
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
