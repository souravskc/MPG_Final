import React,{useState} from 'react';
import './HeaderMain.css';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
const HeaderMain = () => {
  const customStyles = {
  content : {
    top                   : '40%',
    left                  : '40%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-40%',
    transform             : 'translate(-40%, -40%)'
  }
};
  const [openadd,setadd]=useState(true);
  const [input,setInput]=useState('');
  const handleSubmit = (e)=>{
  e.preventDefault();
}
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
                            <a href="docs/compi"><button className="mainHeadingBtn">Learn Programming</button></a>
                        </div>
                    </div>
                    <div className="mainHeadingImage">
                        <img src="https://i.ibb.co/sHShYNy/m-hero.png" alt="" />
                    </div>
                </div>
            </div>
            <Modal style={customStyles} isOpen={openadd} onRequestClose={()=>{setadd(false)}}>
              <h2>Review Your Resume</h2>
              <CloseIcon style={{position:"absolute",right:"20",top:"21",cursor:"pointer"}} onClick={()=>{setadd(false)}}></CloseIcon>
              <p>Provide your mail we will shortly contact you to review your resume and improve it</p>
              <form onSubmit={handleSubmit}>
              <input type="text" style={{marginTop:"10px"}} onChange={(e)=>{setInput(e.target.value)}} name="newitem" placeholder = "Enter Email id" value={input}/>

              <button type="submit">Subscribe</button>
              </form>
            </Modal>
        </>
    );
};

export default HeaderMain;
