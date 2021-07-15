import React,{useState} from 'react';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
// import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Popup.css';
// import { motion, AnimatePresence } from "framer-motion";
import Fade from 'react-reveal/Fade';
import gmail from './Main/Header/gmail1.png'
function Popup(){
  let history = useHistory();
  const [openadd,setadd]=useState(true);
  const [input,setInput]=useState('');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const persist = (input)=>{
      // e.preventDefault();
      fetch(`http://localhost:4000/mailchimp`,{
        method: 'POST',
        headers: {"Content-Type":"application/json",
      },
      body: JSON.stringify({input}),
    })
    .then(()=>{})
    }

    
const handleSubmit = (e)=>{
  e.preventDefault();
  // setadd(false);
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(input);
  persist(input);
  setInput('');
  history.push('/');
}

const close=()=>{
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// overlay.addEventListener('click', close());
return(<>

  <div className="modal">

    <img style={{width:"200px",height:"150px",position:"relative",marginLeft:"-150px",bottom:"150px"}} src="https://i.ibb.co/52D2g38/Job-Interview-Illustration.png"/>

    <div className="modaltext">
    <h1 className="head1">REVIEW YOUR RESUME!</h1>
    <p style={{fontSize:"18px"}}>Provide your mail we will shortly contact you to review your resume and improve it</p>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="modalentrydiv">

    <img style={{width:"50px",height:"50px",marginRight:"10px",borderRadius:"50%"}} src={gmail}/>
    <input type="email" style={{borderRadius:"10px",border:"0.2px solid #8A7B7B",boxShadow: "0px 1px 2px 0px #00000040",width:"250px",marginRight:"20px"}} onChange={(e)=>{setInput(e.target.value)}} name="newitem" placeholder = "Enter Email id" value={input}/>

    <button className="modalsubscribe" type="submit">Subscribe</button>

    </div>
    </form>

    <CloseIcon style={{position:"absolute",right:"20",top:"21",cursor:"pointer"}} onClick={()=>{close(),history.push('/')}} ></CloseIcon>
  </div>

  <div onClick={()=>{close(),history.push('/')}} class="overlay"></div>
  </>)
}

export default Popup;
