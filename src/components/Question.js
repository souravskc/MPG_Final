import React, { Component, useState} from 'react'
import FeatureCard from './FeatureCard'

/* const list = [
    { link : 'hello', desc : 'there'},
    { link : 'hello', desc : 'there'}
] */

export default function Question(props) {
    var heading;
    if(props.resource){
        heading='RESOURCES';
    }
    else{
        heading='QUESTION'
    }
    const list = props.list
        if(list){
            return (
                <div >
                    <div className="flex flex-col mt-2 min-w-full rounded-lg">
                        <table className={props.resource ?"min-w-full table table-auto rounded-md bg-purple-800 border-none":"min-w-full table table-auto rounded-md bg-yellow-800 border-none"}>
                            <thead >
                                <tr className="border-none">
                                    <th className={props.resource ? "text-left pl-5 font-normal border-none text-purple-200" : "text-left pl-5 font-normal border-none text-yellow-200"}>
                                        {heading}
                                    </th>
                                </tr>
                            </thead>
                            {
                                    list.map((value, index) =>{
                                        return(
                                            <tbody id={index} className="bg-gray-900 ">
                                                    <tr className="border-none">
                                                            <td className="pl-10 border-none border-b font-semibold" colSpan={2}><a href={value.link} className="text-blue-300 hover:text-blue-500">{value.name}</a></td>
                                                            <td className="pl-5 border-none border-b" ><div className="text-gray-300">{value.desc}</div></td>
                                                    </tr>
                                            </tbody>
                                            )
                                    })
                            }
                        </table>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
       
}
        