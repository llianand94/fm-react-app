import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';


function App() {
  return <React.Fragment>
    <Greeting word='first' name='Name'/>  
    <Greeting word='two' name='Name2'/>  
  </React.Fragment>
  ;
}

export default App;
