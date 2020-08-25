import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';


// render() {
//   return [
//     <ChildA key="key1" />,
//     <ChildB key="key2" />,
//     <ChildC key="key3" />,
//   ];
// }

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    );
    
  }
}

export default App;

