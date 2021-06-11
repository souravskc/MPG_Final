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
                        <h1>Exclusive guide for <br /> your <span style={{color: 'orange'}}>Learning Journey.</span></h1>
                        <h2>Become proficient in <span style={{color: 'blue'}}>coding</span></h2>
                        <img className="mainHeadingImagesMobile" src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                        <div className="mainHeadingContent">
                            <div className="d-flex align-item-center"> 
                                <span><LibraryAddCheckIcon color="primary" className=""  /></span>Learn Competitive Coding and Ace <span style={{color: 'orange', fontWeight:'900'}}>Technical Interviews</span>
                            </div>
                            <SettingsApplicationsIcon color="primary" /> Best Resources at your <span style={{color: 'orange', fontWeight:'900'}}>fingertips</span> <br />
                            <ThumbUpIcon color="primary" />  <span style={{color: 'orange', fontWeight:'900'}}>Handpicked</span> exercises to boost up your practise <br />
                            <PeopleAltIcon color="primary" />   Tips from the <span style={{color: 'orange', fontWeight:'900'}}>expert</span> who are already in fortune companies
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