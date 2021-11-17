import { Component } from "react";
import CiaoList from "./CiaoList";
// import Ciao from "../CiaoSection"

class CiaoSection extends Component{ 
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
      const sortUsers = JSON.parse(JSON.stringify(users));
      sortUsers.sort((a,b)=> {
        if(isAlphabet){ 
          return (a.fname<b.fname)? 1: -1; 
           }
          return (a.fname<b.fname)? -1: 1;    
      })
           
      this.setState({
        isAlphabet:!isAlphabet,
        users:sortUsers,
      })
    }
  
  
    
  render(){  
    const {users,isDirection,isAlphabet} = this.state;
    
    return <ul>
      <p>
      <button onClick={this.sortUsers}>SORT by Number {isDirection?'straight':'reverse'}</button>
      <button onClick={this.sortUsersByName}>SORT by Name {isAlphabet?'abc':'cba'}</button>
      </p>
      <CiaoList users={users}/>
    </ul>;
  }
}

export default CiaoSection;