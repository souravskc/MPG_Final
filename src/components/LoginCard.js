import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
//import { window, document } from 'ssr-window';

const LoginCard = () => {

    if (typeof window !== "undefined") {
        if(window.localStorage.getItem("token")){
            var token = jwt_decode(window.localStorage.getItem("token"))
          }
        else{
            var token = {"login":"False"}
        }
    
        var history = useHistory();
        const [email,setEmail] = useState()
        const [pass,setPass] = useState()
        async function onSubmit(){
            
            await axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/auth",{"email":email,"pass":pass}).then(function(response){
                alert(JSON.stringify(response));
                if(response.status === 200){
                    window.localStorage.setItem("token",response.data.token)
                    alert("Login Successful")
                    history.push('/');
                }
                else{
                    alert("Wrong Username or Password")
                    history.push('/docs/login');
                }
            });
        }
        
        async function Logout(){
            window.localStorage.removeItem("token")
            alert("You have successfully logged out");
            window.open("/","_self")
        }
        
            if(token.login === "False"){
                return (
                    <div className="bg-gray-800 rounded-lg lg:ml-96 p-16">
                            <div >
                                    <div className="">
                                        <h1 className="text-center text-white">Login</h1>
                                        <Form.Group>
                                            <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="email" name="email" placeholder="Email" value={email} onChange={({target}) => setEmail(target.value)} required />
                                        </Form.Group>
                                    </div>
                                        <Form.Group>
                                            <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="password" name="pass" placeholder="Password" value={pass} onChange={({target}) => setPass(target.value)} required />
                                        </Form.Group>
                                <div className="flex items-center self-center justify-center justify-self-center">
                                    <Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-3 rounded-md hover:bg-blue-700 border-none" onClick={() => onSubmit()}>Send</Button>
                                </div>
                                <div className="flex items-center self-center justify-center justify-self mt-5"><a href="/docs/register" className="">Create a new account</a></div>
                            </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="bg-gray-800 rounded-lg lg:ml-96 p-16 ">
                            <h1 className="text-center text-white">Login Successful</h1>
                            <div className="flex items-center self-center justify-center justify-self-center"><Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-3 rounded-md hover:bg-blue-700 border-none" onClick={() => Logout()}>Logout</Button></div>
                    </div>
                )
            }
      }
      else{
          return null
      }
}



export default LoginCard
