import React, {Component} from "react";

class Ciao extends Component{  
  constructor(props){
    super(props);
    this.state = {
      isHi:true
    };
  }
  hanlerButton=()=>{
    const {isHi} = this.state;   
    this.setState({
      isHi:!isHi  
    })
}
  render(){
    console.log(this.state.isHi);
    const {name} = this.props;
    const {isHi} = this.state;
   
    if(isHi){
      return <>
      <h2> Hello {name}!</h2>
      <button onClick={this.hanlerButton}> Ciao </button>
      </>;
    }
    return <>
      <h2> Bye {name}!</h2>
       </>;
    
        
    
  }
}

export default Ciao;