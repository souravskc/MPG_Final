import React from 'react';

import './ContactUSVTWO.css';

const ContactUSVTWO = () => {
    return (
        <div>
            <div className="cardContainer">
               <div>
                    <h1>Feedback</h1>
               </div>
               <div>
                    <img src="https://i.ibb.co/b6HRzRJ/feedback-icon.png" alt="FeedbackLogo" />
               </div>
            </div>
            <div className="contactUsMainContainer">
                <div className="contactUsContentContainer">
                    <div className="formInputContainer">
                        <form action="" className="formInputField">
                            <input type="text" placeholder="Name" /> <br />
                            <input type="text" placeholder="Email" /> <br />
                            <textarea name="" id="" cols="30" rows="10" placeholder=" Description or any help" ></textarea>
                            <div className="formFooter">
                                <div className="formFooterIcons">
                                    <a href="mailto:mypathguider@gmail.com"><img src="https://i.ibb.co/3ch8h34/final3.png" alt="ICONEmail" /></a>
                                    <a href="https://www.instagram.com/mpg_mypathguider/"><img src="https://i.ibb.co/fnXb66N/final4.png" alt="Iconinsta" /></a>
                                    <a href="https://www.linkedin.com/company/mypathguider"><img src="https://i.ibb.co/NTbw0Bz/final5.png" alt="ICONLinekdIn" /></a>

                                </div>
                                <div className="sendBtnContainer">
                                    <button className="sendBtn">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contactUsImageContainer">
                    <img src="https://i.ibb.co/dQ3W26Z/feedback-illus.png" alt="Images" />
                </div>
            </div>
        </div>
    );
};

export default ContactUSVTWO;