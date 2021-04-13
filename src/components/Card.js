import React, { Component, useState} from 'react'

export class Card extends Component {
    render() {
                return (
                    <div className="border-8 border-blue-600">
                        <div className="p-5 font-semibold bg-gray-800 rounded-md text-white">
                        <div className="flex">
                        <div className="text-2xl" ><a href="https://www.geeksforgeeks.org/program-count-digits-integer-3-different-methods/" className="hover:no-underline hover:text-blue-400 text-white">{this.props.title}</a></div>
                        <svg class="text-gray-300 h-5 w-5 ml-1 mt-2" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </div>
                        <div className="text-lg text-gray-400 pb-2">{this.props.titles}</div>
                        <div className="text-sm text-gray-300">{this.props.description}</div>
                        </div>
                    </div>
                
                )       
            }          
        }
export default Card