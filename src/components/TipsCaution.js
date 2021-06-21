import React, { Component, useState} from 'react'
import FeatureCard from './FeatureCard';
import '../css/customContainer.css';


export default function TipsCaution(props) {

    // console.log(props.list)

    var heading;
    if(props.tip == "true"){
        heading='Tips';
    }
    else{
        heading='Caution';
    }
    const content = props.content
    const list = props.list
        if(content){
            return (
                <div>
                    <div className="flex flex-col min-w-full tipAndCaution" style={{marginBottom: '30px'}}>
                            <div className={props.tip == "true"? 'tipsColor' : 'cautionsColor'}>
                                {/* Color Green and Dark Conditionally Change the Class */}
                            </div>
                            <div>
                                <div className="tipsAndCautionContent">
                                    <h4> <b>{heading}</b> </h4>
                                    <p>{content}</p>
                                        {
                                            list?.map((value, index) =>{
                                                return(
                                                    <div id={index} className="questionContent">
                                                        <div className="">
                                                            <div className="questionAndResourceContentLink"><a href={value.link}>{value.name}</a></div>
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
        
