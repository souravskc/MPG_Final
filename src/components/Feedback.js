import React from 'react'
import {Form,Button} from 'react-bootstrap'
const Feedback = () => {
    return (
        <div className="py-16">
        <div className="inline lg:flex">
            <div className="lg:w-1/2 flex items-center self-center justify-center justify-self-center">
                <p className="font-medium text-2xl py-3 px-5 pb-5 align-middle text-center lg:text-4xl lg:text-left lg:pl-32 lg:leading-normal" > We would like your Feedback to improve our website</p>
            </div>
            <div className="flex items-center justify-center m-2 lg:w-1/2 ">
                <Form action="https://formsubmit.co/vihardevalla@gmail.com" method="POST" className="w-3/4">
                        <div className="lg:flex justify-between ">
                        <Form.Group className="lg:w-1/2 lg:mr-7">
                        <Form.Control className="my-2 w-full p-2  border-gray-200 border-2 rounded-lg" type="text" name="name" placeholder="Name" required />
                        </Form.Group>

                        <Form.Group className="lg:w-1/2 lg:ml-3">
                        <Form.Control className="my-2 p-2 w-full border-gray-200 border-2 rounded-lg" type="email" name="email" placeholder="Email" required />
                        </Form.Group>
                        </div>

                        <Form.Group>
                        <Form.Control className="p-2 my-2 w-full border-2 rounded-lg " as="textarea" placeholder="Message" rows={3} required />
                        </Form.Group>
                    <div className="flex items-center self-center justify-center justify-self-center">
                        <Button type="submit" variant="primary" className="bg-blue-600 text-white p-2 px-3 rounded-md hover:bg-blue-700">Send</Button>
                    </div>
                </Form>
            </div>
        </div>
    </div> 
    )
}

export default Feedback
