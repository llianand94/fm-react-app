import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Ciao from './components/Ciao';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isAlphabet:true,
      isDirection:true,
      users:[        
        {
          id:1,
          fname:'Elon'
        },
        {
          id:2,
          fname:'Elen'
        },
        {
          id:3,
          fname:'Tim'
        },
        {
          id:4,
          fname:'Bob'
        },
        {
          id:5,
          fname:'Sasha'
        },
        {
          id:6,
          fname:'Rob'
        },
        {
          id:7,
          fname:'Alex'
        },
        {
          id:8,
          fname:'Rex'
        },
      ]
    }
  }
  sortUsers = () =>{
    const {users,isDirection} = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    sortUsers.sort((a,b)=>isDirection?a.id-b.id:b.id-a.id);
    this.setState({
      isDirection:!isDirection,
      users:sortUsers
    })
  }
  sortUsersByName = () =>{
    const {users,isAlphabet} = this.state;
    const sortUsers2 = JSON.parse(JSON.stringify(users));
    sortUsers2.sort((a,b)=> {
    if(a<b){
      return 1;
    }else{
      return -1;
    }
    },
    
    // isAlphabet?a.fname.slice(0,1)-b.fname.slice(0,1):b.fname.slice(0,1)-a.fname.slice(0,1)
    this.setState({
      isAlphabet:!isAlphabet,
      users:sortUsersByName,
    })
  }

  
  render(){
    const {users,isDirection,isAlphabet} = this.state;
    
    return <ul>
      <p>
      <button onClick={this.sortUsers}>SORT by Number {isDirection?'straight':'reverse'}</button>
      <button onClick={this.sortUsersByName}>SORT by Name {isAlphabet?'abc':'cba'}</button>
      </p>
      {users.map(({fname},i)=><li key={i}><Ciao name={fname} /></li>)}
    </ul>;
  }
}
export default App;