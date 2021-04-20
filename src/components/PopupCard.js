import React,{useState,useEffect} from 'react'
import LoginCard from './LoginCard'
import jwt_decode from 'jwt-decode'

function PopupCard() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);


    if (typeof window !== "undefined") {

        if(window.localStorage.getItem("token")){
            var token = jwt_decode(window.localStorage.getItem("token"))
        }
        else{
            var token = {"login":"False"}
        }

        useEffect(()=>{
            if(token.login === "False"){
                setShow(true);
            }
            else{
                setShow(false);console.log(show)
            }
        })
        

        return (
            <div className={show ? "w-full h-full z-10 fixed align flex items-center self-center justify-center justify-self-center bg-gray-900 bg-opacity-75 lg:-my-10" : "hidden"} >
                <div className="bg-gray-800 h-auto m-auto p-3 -mt-1/3 border-3 block rounded-lg">
                    {/* <span className={"text-gray-500 float-right text-3xl font-bold hover:text-black cursor-pointer -mt-2"} onClick={()=>{setShow(!show);console.log(show)}}>&times;</span> */}
                    <LoginCard />
                </div>
            </div>
        )
    }
    else{
        return null;
    }
    
}

export default PopupCard