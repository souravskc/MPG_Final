import React from 'react';
import './ContactPage.css';
const ContactPage = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="contactContainer">
                <div className="contactUsForm">
                    <div className="">
                        <div className="contactUsHeading">
                            <h3 style={{textAlign: 'center'}}>Contact US</h3>
                        </div>
                        <div>
                            <form action="" className="contactUsFormInput">
                                <input type="text" name="" id="" placeholder="Name" /> <br />
                                <input type="email" placeholder="Email" /> <br />
                                <textarea name="" id="" cols="30" rows="10" placeholder="Description any Help"></textarea> <br />
                                <center><button className="contactUsFormBtn">Send</button></center>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contactImages">
                    <img src="https://i.ibb.co/BnswDWd/m-contactus.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;<h1>Contact</h1>