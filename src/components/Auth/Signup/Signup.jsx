import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
            <div className="loginContainer">
                <div className="formContainer">
                    <center><img src="" alt="Logo" /></center>
                    <div>
                        <form action="" className="formInputs">
                            <input type="text" placeholder="Name" /> <br />
                            <input type="email" placeholder="E-mail" /> <br />
                            <input type="password" placeholder="Password" /> <br />
                            <center><button className="loginBtn">Sign up</button></center>
                        </form>
                    </div>
                    <div className="signInBtn">
                        <center><p className="signInContent">OR</p></center>
                        <button className="googleSignIn">Continue with Google</button> <br />
                        <button className="facebookSignIn">Continue with Facebook</button>
                    </div>
                </div>
                <div className="loginImageContainer">
                    <div className="loginImage"></div>
                    {/* <img className="loginImage" src={`https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21va2UlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80`} alt="" /> */}
                </div>
            </div>
    );
};

export default Signup;