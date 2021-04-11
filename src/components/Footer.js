import React from 'react'
import Facebook from "../img/footer/facebook.webp"
import GitHub from "../img/footer/github.webp"
import Gmail from "../img/footer/gmail.webp"
import Linkedin from "../img/footer/linkedin.webp"
import Twitter from "../img/footer/twitter.webp"
import Instagram from "../img/footer/instagram.webp"


function Footer() {
    return (
        <div class="footer">
            <div class="contain">
                {/*<div class="col">
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                         <a href="/docs/mission"><li>Mission</li></a>
                         <li>Services</li>
                        <li>Social</li> 
                        <li>Get in touch</li>
                    </ul>
                </div>*/}
                {/* <div class="col">
                    <h1>Domains</h1>
                    <ul>
                        <a href="/docs/ml"><li>Machine Learning</li></a>
                        <a href="/docs/webd"><li>Web Development</li></a>
                    </ul>
                </div> */}
                <div class="col">
                    <h1>Competitive Coding</h1>
                    <ul>
                        <li><a style={{color: 'white'}} href="/docs/compi">Documentation</a></li>
                        {/* <li>Arrays</li>
                        <li>Strings</li>
                        <li>Searching and Sorting</li>
                        <li>Advanced Topics</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li> */}
                    </ul>
                </div>
                <div class="col">
                    <h1>Bootcamp</h1>
                    <ul>
                        <li><a style={{color: 'white'}} href="/docs/bootcamp">Details</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Support</h1>
                    <ul>
                        <li><a style={{color: 'white'}} href="mailto:mypathguider@gmail.com">Contact us</a></li>
                        {/* <li>Web chat</li> */}
                    </ul>
                </div>
                <div class="col social">
                    <h1>Social</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/Mypathguider-111127487744228"><img src={Facebook}  className="htry"/></a></li>
                        <li><a href="https://twitter.com/guider_my"><img src={Twitter} className="htry" /></a></li>
                        {/* <li><a href=""><img src={GitHub}  className="htry" /></a></li> */}
                        <li><a href="https://www.linkedin.com/company/mypathguider"><img src={Linkedin} className="htry" /></a></li>
                        <li><a href="https://www.instagram.com/mpg_mypathguider/"><img src={Instagram} className="htry" /></a></li>
                        <li><a className="footer-icon" href="mailto:mypathguider@gmail.com"><img src={Gmail} className="htry" /></a></li>
                    </ul>
                </div>
                
                <div class="clearfix">
                    <h6>Copyright © 2021 MyPathGuider</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
