import React,{useState} from 'react';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
import './Popup.css';
import gmail from './Main/Header/gmail2.png'
function Popup(){
  // let history = useHistory();
  const [openadd,setadd]=useState(true);
  const [input,setInput]=useState('');
  // const modal = document.querySelector('.modal');
  // const overlay = document.querySelector('.overlay');
  const persist = (input)=>{
      // e.preventDefault();
      fetch(`http://mpg-backend.herokuapp.com/mailchimp`,{
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
  if(!input){
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}else{
  console.log(input);

  const success = document.querySelector('.success');
  const formm = document.querySelector('.formm');
  success.classList.remove('hidden');
  formm.classList.add('hidden');
  persist(input);
  setInput('');
}
  // history.push('/');
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

    <img id="modalimg1"  src="https://i.ibb.co/52D2g38/Job-Interview-Illustration.png"/>

    <div className="modaltext">
    <h1 className="head1">Resume Review Offer!</h1>
    <p >Is your resume strong enough to land your next job? Get your resume reviewed by experts for FREE, and make a bold statement with your resume. Limited Time Service</p>
    </div>
    <form className="formm" onSubmit={handleSubmit}>
    <div className="modalentrydiv">
    <img className="modalmailimage" src={gmail}/>
    <input type="email" className="modalforminput" onChange={(e)=>{setInput(e.target.value)}} name="newitem" placeholder = "Enter Email id" value={input}/>

    <button className="modalsubscribe" type="submit">Send</button>

    </div>
    </form>
    <div className="success hidden">
    </div>
    <CloseIcon style={{position:"absolute",right:"20",top:"21",cursor:"pointer"}} onClick={()=>{close()}} ></CloseIcon>
  </div>



  <div onClick={()=>{close()}} class="overlay"></div>

  </>)
}

export default Popup;
