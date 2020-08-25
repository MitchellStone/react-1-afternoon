// const { render } = require("react-dom")

import React, {Component} from 'react';

//extends simply means that TopicBrowser will Inherit from React.Component
class TopicBrowser extends Component {
    render() {
        return ( <p> Hello World </p>
        )
    }
}

export default TopicBrowser;


// export default class MyNavbar extends React.Component {
//     render(){
//       return (
//         <Navbar className="navbar-dark" fluid>
//         ...
//         </Navbar>
//       );
//     }
// }