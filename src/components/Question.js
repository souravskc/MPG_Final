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
                        <table className={props.resource ?"min-w-full table table-auto rounded-md bg-resource border-none":"min-w-full table table-auto rounded-md bg-question border-none"}>
                            <thead >
                                <tr className="border-none">
                                    <th className={props.resource ? "text-left pl-5 font-bold border-none text-white" : "text-left pl-5 font-bold border-none text-white"}>
                                        {heading}
                                    </th>
                                </tr>
                            </thead>
                            {
                                    list.map((value, index) =>{
                                        return(
                                            <tbody id={index} className="bg-content-background ">
                                                    <tr className="border-none">
                                                            <td className="pl-10 border-none border-b font-semibold" colSpan={2}><a href={value.link} className="text-white hover:text-white">{value.name}</a></td>
                                                            <td className="pl-5 border-none border-b" ><div className="text-white">{value.desc}</div></td>
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
        
