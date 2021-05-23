import React, { Component, useState} from 'react'

export class FeatureCard extends Component {
    constructor(){
        super();
        this.state = { showText: "none" , show: "Show More" }
        
    }
    showText(){
        
    }
    render() {
              
                return (
                    <div className={" mx-0 bg-gray-200 mx-7 px-7 my-7 rounded-2xl" } style={{backgroundColor : this.props.bgcolor}}>
                        <div className={`text-center py-5 mb-3 lg:mx-52 mx-7 px-7 `}>
                            <div className="m-0 lg:m-auto text-left ">
                                <div className={this.props.id ? "lg:flex  lg:flex-row" : "lg:flex  lg:flex-row-reverse"}>
                                    <div className="">
                                        <div className="p-5 md:p-24 lg:p-5">
                                            <img src={this.props.imgUrl} alt={this.props.title}></img>
                                        </div>
                                    </div>
                                    <div className=" text-center lg:text-left flex justify-center align-center flex-col ">
                                        <div className="mt-3 p-16 py-18">
                                        {/* <h2 className="header-h2">{this.props.titlesm}</h2> */}
                                            <h1 className="font-black  text-2xl lg:text-5xl pb-5 align-middle">{this.props.title}</h1>
                                            <span className=" align-middle mb-0 text-lg">{this.props.description}</span>
                                            <span className=" align-middle mb-0 text-lg mt-0" style={{display:this.state.showText}}><br />{this.props.more}</span><br />
                                            <span className="text-gray-700 cursor-pointer hover:text-gray-900" onClick={()=> {if(this.state.showText=="none"){this.setState({showText:"block",show:"Show Less"})}else{this.setState({showText:"none",show:"Show More"})}console.log(this.state.showText)}} >{this.state.show}</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )       
            }          
        }
export default FeatureCard