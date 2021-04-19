import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const Register = () => {
    var history = useHistory();
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    if(window.localStorage.getItem("token")){
        var token = jwt_decode(window.localStorage.getItem("token"))
      }
    else{
        var token = {"login":"False"}
    }
    async function onSubmit(){
        
        await axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/auth",{"email":email,"pass":pass}).then(function(response){
            alert(JSON.stringify(response));
            if(response.status === 204){
                axios.post("https://us-central1-mpg-backend.cloudfunctions.net/mpg/users",{"email":email,"pass":pass}).then(function(res){
                    if(res.status == 200){
                        alert("Account Creation Successful");
                        history.push('/docs/login');
                    }
                    else{
                        alert("Account Creation Error");
                        history.push('/docs/register');
                    }
                })
            }
            else{
                alert("Account already exists")
                history.push('/docs/login');
            }
        });
        history.push('/docs/login')
    }
    async function Logout(){
        window.localStorage.removeItem("token")
        alert("You have successfully logged out");
        window.open("/","_self")
    }

    if(token.login === "False"){
        return (
            <div className="bg-gray-600 rounded-lg lg:ml-96 p-16">
                <div >
                        <div className="">
                            <h1 className="text-center text-white">Signup</h1>
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



export default Register
