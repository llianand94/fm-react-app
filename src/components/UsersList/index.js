import React, { Component } from 'react';
import UserCard from './User';


class UsersList extends Component {
  
  userSelector = ({id})=>{
    const {users} = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    this.setState({
      users:newUsers.map((user)=>({...user,
        isSelected: user.id===id? !user.isSelected: user.isSelected
      }))
    })
  }
  mapUsers=(user)=>{
    return <UserCard key={user.id} user={user} userSelector={this.userSelector}/>
  }

  
  render(){
    const {users} = this.props;
    return (
      <section>
        <h1>List of users:</h1>        
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UsersList;
