import React, { Component, useState} from 'react'
import FeatureCard from './FeatureCard';
import '../css/question.css';
/* const list = [
    { link : 'hello', desc : 'there'},
    { link : 'hello', desc : 'there'}
] */

export default function Question(props) {
    // console.log("Question.JS",props.list);
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
                    <div className="flex flex-col min-w-full" style={{marginBottom: '30px'}}>
                        <div>
                            <div className={props.resource? 'resourcesHeading' : 'questionHeading' }>
                                <h3>{heading}</h3>
                            </div>
                            <div className="questionContentArea">
                                {
                                        list.map((value, index) =>{
                                            return(
                                                <div id={index} className="questionContent">
                                                        <div className="">
                                                                <div className="questionContentLink"><a href={value.link}>{value.name}</a></div>
                                                                <div className="" ><p>{value.desc}</p></div>
                                                        </div>
                                                </div>
                                                )
                                        })
                                }
                        </div>
                        </div>
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
        
