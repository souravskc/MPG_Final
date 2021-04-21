import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import jwt_decode from 'jwt-decode'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
        const [show, setShow] = useState(false);
        async function onSubmit(){
            
            await axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/auth",{"email":email,"pass":pass}).then(function(response){
                //alert(JSON.stringify(response));
                alert("Verifying credentials ...")
                if(response.status === 200){
                    window.localStorage.setItem("token",response.data.token)
                    alert("Login Successful")
                    setShow(false);
                    window.open("/","_self")
                }
                else{
                    alert("Wrong Username or Password")
                    setShow(false);
                    window.open("/","_self")
                }
            });
        }

        async function onSubmit2(){
            await axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/auth",{"email":email,"pass":pass}).then(function(response){
                alert(JSON.stringify(response));
                alert("Registering Account");
                if(response.status === 204){
                    axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/users",{"email":email,"pass":pass}).then(function(res){
                        if(res.status == 200){
                            alert("Account Creation Successful");
                            setShow(false);
                            window.open("/","_self")
                        }
                        else{
                            alert("Account Creation Error");
                            setShow(false);
                            window.open("/","_self")
                        }
                    })
                }
                else{
                    alert("Account already exists")
                    setShow(false);
                    window.open("/","_self")
                }
            });
            setShow(false);
            window.open("/","_self")
        }

        async function Logout(){
            window.localStorage.removeItem("token")
            alert("You have successfully logged out");
            window.open("/","_self")
        }
            return(
                <Tabs defaultValue="login"
                values={[
                    {label: 'Login', value: 'login'},
                    {label: 'Register', value: 'register'},
                ]}>
                    <TabItem value='login'>
                        <div className="bg-gray-800 rounded-lg lg:mx-36 lg:my-16 lg:ml-0 p-5 w-full ">
                            
                            <h1 className="text-center text-white lg:text-5xl pb-5">Login</h1>
                            <div className = {show ? "flex items-center self-center justify-center justify-self-center pb-5" :"hidden"} >
                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing
                                </button>
                            </div>

                            <Form.Group>
                                <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="email" name="email" placeholder="Email" value={email} onChange={({target}) => setEmail(target.value)} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="password" name="pass" placeholder="Password" value={pass} onChange={({target}) => setPass(target.value)} required />
                            </Form.Group>
                        <div className="flex items-center self-center justify-center justify-self-center">
                        <Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-4 rounded-md hover:bg-blue-700 border-none " onClick={() => {setShow(true);onSubmit2()}}><div className="text-lg">Submit</div></Button>
                        
                        </div>
                        
                        {/* <div className="flex items-center self-center justify-center justify-self mt-5"><a href="/docs/register" className="">Create a new account</a></div> */}
                        </div>
                    </TabItem>

                    <TabItem value='register'>
                        <div className="bg-gray-800 rounded-lg lg:mx-36 lg:my-16 lg:ml-0 p-5 w-full">
                            <div>
                                <h1 className="text-center text-blue-500 lg:text-5xl pb-5">Signup</h1>
                                    <div className={show ? "flex items-center self-center justify-center justify-self-center pb-5" :"hidden"}>
                                        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing
                                        </button>
                                    </div>
                                <Form.Group>
                                    <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="email" name="email" placeholder="Email" value={email} onChange={({target}) => setEmail(target.value)} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="password" name="pass" placeholder="Password" value={pass} onChange={({target}) => setPass(target.value)} required />
                                </Form.Group>
                                <div className="flex items-center self-center justify-center justify-self-center">
                                    <Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-4 rounded-md hover:bg-blue-700 border-none " onClick={() => {setShow(true);onSubmit2()}}><div className="text-lg">Submit</div></Button>
                                </div>
                            </div>
                        </div>

                    </TabItem>
                </Tabs>
                )
            /* }
            else{
                return (
                    <div className="bg-gray-800 rounded-lg lg:ml-96 p-16 ">
                            <h1 className="text-center text-white">Login Successful</h1>
                            <div className="flex items-center self-center justify-center justify-self-center"><Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-3 rounded-md hover:bg-blue-700 border-none" onClick={() => Logout()}>Logout</Button></div>
                    </div>
                )
            } */
      }
      else{
          return null
      }
}

export default LoginCard
