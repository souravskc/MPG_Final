import React, { Component, useState} from 'react'
import FeatureCard from './FeatureCard';
import '../css/question.css';

/* const list = [
    { link : 'hello', desc : 'there'},
    { link : 'hello', desc : 'there'}
] */

export default function TipsCaution(props) {

    // console.log("TipsCaution.JS",props.content);
    
    var heading;
    if(props.resource){
        heading='RESOURCES';
    }
    else{
        heading='QUESTION'
    }
    const content = props.content
        if(content){
            return (
                <div>
                    <div className="flex flex-col min-w-full tipAndCaution" style={{marginBottom: '30px'}}>
                            <div className={props.resource ? 'tipsColor' : 'cautionsColor'}>
                                {/* Color Green and Dark Conditionally Change the Class */}
                            </div>
                            <div>
                                <div className="tipsAndCautionContent">
                                    <h4> <b>TIP</b> </h4>
                                    <p>{content}</p>
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
        
