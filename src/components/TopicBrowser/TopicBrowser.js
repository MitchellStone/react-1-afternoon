// const { render } = require("react-dom")

import React, {Component} from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

//extends simply means that TopicBrowser will Inherit from React.Component
export default class TopicBrowser extends Component {
    render() {
        return ( 
            <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
            </div>
        )
    }
}




// export default class MyNavbar extends React.Component {
//     render(){
//       return (
//         <Navbar className="navbar-dark" fluid>
//         ...
//         </Navbar>
//       );
//     }
// }