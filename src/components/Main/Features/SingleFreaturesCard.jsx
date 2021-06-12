import React from 'react';
import './FeaturesCardStyle.css';
const SingleFreaturesCard = ({featureData}) => {
    console.log('FeatureData:',featureData.id)
    return (
        <div className="featureCardContainer" style={{backgroundColor : featureData.bgcolor}}>
              {
                  featureData.id ? 
                  <div className='featureCard'>
                    <div className="featureCardFullContent">
                        <div className="featureCardContentHeading">
                            <h1>{featureData.title}</h1>
                        </div>
                        <div className="featureCardContentParagraph">
                            <p>{featureData.description}</p>
                        </div>
                    </div>
                    <div className="featureCardImages">
                        <img src={featureData.imgUrl} alt="" style={{width: '100%'}} />
                    </div>
                </div> 
                :
                <div className='featureCardPro'>
                <div className="">
                    <div className="featureCardImages">
                        <img src={featureData.imgUrl} alt="" style={{width: '100%'}} />
                    </div>
                </div>
                    <div className="featureCardFullContent">
                        <div className="featureCardContentHeading">
                            <h1>{featureData.title}</h1>
                        </div>
                        <div className="featureCardContentParagraph">
                            <p>{featureData.description}</p>
                        </div>
                    </div>
                </div>
              }
        </div>
    );
};

export default SingleFreaturesCard;
