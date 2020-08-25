import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Even and Odds </h4>
                <input className="inputLine"/>
                <button className="confirmationButton"> Split </button>
                <span className="resultBox"></span>
                <span className="resultBox"></span>

            </div>
            
        )
    }
}
 
constructor() {
     super();

     this.state = {
         evenArray: [],
         oddArray: [],
         userInput: ''
     }
 }