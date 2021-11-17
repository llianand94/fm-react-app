import React, { Component } from 'react';

class UserCard extends Component {
 
  render() {
    const {id, fname, isSelected}= this.props.user;
    const userSelector = this.props;
    const style = {backgroundColor: isSelected?'red':'blue'}
    return (      
        <aticle style={style}>
        <h2><span>{id}) </span> {fname}  <button onClick={()=>{userSelector(id)}}>Select</button></h2>         
      </aticle>
      
    );
  }
}

export default UserCard;
