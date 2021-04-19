import React from 'react'
import {Form,Button} from 'react-bootstrap'


function LoginCard() {
    return (
        <div className="bg-gray-800 rounded-lg p-16 lg:ml-96">
                <Form onSubmit={onSubmit()}>
                        <div className="">
                            <h1 className="text-center text-white">Login / Signup</h1>
                            <Form.Group className=''>
                                <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="email" name="email" placeholder="Email" required />
                            </Form.Group>
                        </div>
                            <Form.Group>
                                <Form.Control className="my-2 p-3 w-full border-none rounded-lg mb-5" type="password" name="pass" placeholder="Password" required />
                            </Form.Group>
                    <div className="flex items-center self-center justify-center justify-self-center">
                        <Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-3 rounded-md hover:bg-blue-700 border-none">Send</Button>
                    </div>
                </Form>
        </div>
    )
}

function onSubmit(){
    console.log('hello there')
}

export default LoginCard
