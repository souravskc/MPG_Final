import React from 'react';
import './HeaderMain.css';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const HeaderMain = () => {
    return (
        <>
            <div class="container">
                <div class="mainHeaderBody">
                    <div class="mainHeading">
                        <h1>Exclusive guide for your  <br /> <span style={{color: '#2C6EEF'}}>Learning Journey.</span></h1>
                        <h2>Become proficient in coding</h2>
                        <img className="mainHeadingImagesMobile" src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                        <div className="mainHeadingContent">
                            <LibraryAddCheckIcon color="primary" className=""  />Learn Competitive Coding and Ace <span style={{color: 'black', fontWeight:'900'}}>Technical Interviews</span> <br />
                            <SettingsApplicationsIcon color="#2C6EEF" /> Best Resources at your <span style={{color: 'black', fontWeight:'900'}}>fingertips</span> <br />
                            <ThumbUpIcon color="#2C6EEF" />  <span style={{color: 'black', fontWeight:'900'}}>Handpicked</span> exercises to boost up your practise <br />
                            <PeopleAltIcon color="#2C6EEF" />   Tips from the <span style={{color: 'black', fontWeight:'900'}}>expert</span> who are already in fortune companies
                        </div>
                        <div className="mainHeadingBtnDiv">
                            <button className="mainHeadingBtn">Learn Programming</button>
                        </div>
                    </div>
                    <div class="mainHeadingImage">
                        <img src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMain;