import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <>
            <div class="container">
                <div class="row justify-content-center align-items-center mt-5 pt-5">
                    <div class="col col-md-6 col-sm-12 col-xl-6 col-xxl-6 mainHeading">
                        <h1>Exclusive guide for <br /> your <span style={{color: 'orange'}}>Learning Journey.</span></h1>
                        <h2>Become proficient in <span style={{color: 'blue'}}>coding</span></h2>
                        <div className="mainHeadingContent">
                            Leatn Competitive Coding and Ace <span style={{color: 'orange', fontWeight:'900'}}>Technical Interviews</span> <br />
                            Best Resources at your <span style={{color: 'orange', fontWeight:'900'}}>fingertips</span> <br />
                            <span style={{color: 'orange', fontWeight:'900'}}>Handpicked</span> exercises to boost up your practise <br />
                            Tips from the <span style={{color: 'orange', fontWeight:'900'}}>expert</span> who are already in fortune companies
                        </div>
                        <div>
                            <button className="mainHeadingBtn">Learn Programming</button>
                        </div>
                    </div>
                    <div class="col col-md-6 col-sm-12 col-xl-6 col-xxl-6">
                        <img src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMain;