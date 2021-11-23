import React, { Component } from 'react';



class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      isFetching:false,
      isError:false,
    }
  }
  componentDidMount(){
    this.setState({
      isFetching:true,
    })
    fetch('https://randomuser.me/api/?results=10&page=1&seed=users')
    .then((response)=>response.json())
    .then((data)=>this.setState({
      users:data.results
    }))
    .catch(()=>this.setState({
      isError:true,
    }))
    .finally(()=>this.setState({
      isFetching:false
    }))
  }
  render() {
    const {users, isFetching, isError} = this.state; 
      
        if (isError) {
          return <div>Error</div>
        }
        if(isFetching){
          return <div>Loading</div>
        }

        return <div>
          <h2>Users list</h2>
          <ul>
            {users.map((user)=>{
              return <li key={user.login.uuid}>{JSON.stringify(user, null, 7)}</li>})}
          </ul>
        </div>
    ;
  }
}


UserLoader.propTypes = {

};


export default UserLoader;
