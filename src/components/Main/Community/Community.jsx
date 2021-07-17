import React from 'react';
import {Link } from 'react-router-dom';
import './Community.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faDiscord } from '@fortawesome/free-brands-svg-icons'

const Community = () => {
    return (
        <div>
            <div className="cardContainer">
               <div>
                    <h1>Community</h1>
               </div>
               <div>
                    <img src="https://i.ibb.co/fpZ3vSp/community-icon.png" alt="Community" />
               </div>
            </div>
            <div className="communityMainContainer">
                <div className="communityImageContainer">
                    <img src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt="" />
                </div>
                <div className="communityContentContainer">
                    <div>
                        <h1>Join Our Discord Server to <span style={{color:'#2C6EEF'}}>interact and grow</span> now. <Link><FontAwesomeIcon icon={faDiscord}/></Link></h1>

                        <h3 style={{color:'#2C6EEF'}}>Where Community meets Guides</h3>
                    </div>
                    <div className="comingSoonBtn">
				            <a  className="visitbutton" href="https://discord.gg/ucH5UY9xY5" target="_blank" >Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
