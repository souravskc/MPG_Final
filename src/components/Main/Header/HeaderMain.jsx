import React from 'react';
import './HeaderMain.css';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const HeaderMain = () => {
    return (
        <>
            <div className="mainHeadingContainer">
                <div className="mainHeaderBody">
                    <div className="mainHeading">
                        <h1>Exclusive guide for your  <br /> <span style={{ color: '#2C6EEF' }}>Learning Journey.</span></h1>
                        <h2>Become proficient in coding</h2>
                        <img className="mainHeadingImagesMobile" src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                        <div className="mainHeadingContent">
                            <p><img src="https://i.ibb.co/cbbQH8r/size2.png" alt="icon" /> Learn Competitive Programming and Ace <span style={{ color: 'black', fontWeight: '900' }}>Technical Interviews</span></p>
                            <p><img src="https://i.ibb.co/9h8cLL6/size3.png" alt="icon" /> Best Resources at your <span style={{ color: 'black', fontWeight: '900' }}>fingertips</span></p>
                            <p><img src="https://i.ibb.co/GPTNDYQ/size1.png" alt="icon" /> <span style={{ color: 'black', fontWeight: '900' }}>Handpicked</span> exercises to boost up your practise</p>
                            <p><img src="https://i.ibb.co/Kw2hVmw/size4.png" alt="icon" /> Tips from the <span style={{ color: 'black', fontWeight: '900' }}>experts</span> who are already in fortune companies</p>
                        </div>
                        <div className="mainHeadingBtnDiv">
				            <a href="docs/compi" className="mainHeadingBtn">Learn Programming</a>
                        </div>
                    </div>
                    <div className="mainHeadingImage">
                        <img src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMain;
