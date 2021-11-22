
import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import Ciao from './components/CiaoSection/Ciao';





class App extends React.Component{
  
 render(){
 
  return <>   
  <Calendar/>
  <Ciao id={1} name='easy'/>    
  </>
 }
 
}   
  
export default App;