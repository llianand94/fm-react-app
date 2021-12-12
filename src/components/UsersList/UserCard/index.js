import React, { Component } from 'react';

function UserCard (props) { 
  
    const {id, fname, isSelected}= props.user;
    const userSelector = props;
    const style = {backgroundColor: isSelected?'red':'blue'}
    return (      
        <aticle style={style}>
        <h2><span>{id} </span> {fname}  <button onClick={()=>{userSelector(id)}}>Select</button></h2>         
      </aticle>
  )
}

export default UserCard;
