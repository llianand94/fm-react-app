import React, { Component } from 'react';

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentWidth: window.innerWidth,
      currentHeight:window.innerHeight
    }
  }
  handlerOfSizeWindow=()=>{
    this.setState((state)=>{
      return{
      currentHeight:window.innerHeight,
      currentWidth:window.innerWidth,
  }}
  )}
  componentDidMount = () =>{
    window.addEventListener('resize', this.handlerOfSizeWindow)}
  
  componentWillUnmount = ()=>{
    window.removeEventListener('resize', this.handlerOfSizeWindow)
  }
  render() {
    const {currentHeight,currentWidth}=this.state;
    return (
      <div>
        <span> Current height of Blank : {currentHeight}</span> <br/>
        <span> Current width of Blank : {currentWidth}</span>
      </div>
    );
  }
}

export default WindowSizes;
