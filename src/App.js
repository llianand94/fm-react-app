
import './App.css';
import React from 'react';
import Ciao from './components/Ciao';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname:'Cubert',
      sname:'Marshal'
    }
  }
  // const user = ;
  render(){
    const {fname, sname} = this.state;
    return<>
    <Ciao name={`${fname} ${sname}`}/>  
    <Ciao name='PewPew'/>  
    <Ciao name='Horse'/>
    </>;
  }
  
}

export default App;
