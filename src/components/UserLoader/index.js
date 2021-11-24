import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api';
import Spinner from './Spinner';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      isFetching: false,
      isError: false,
      currentPage: 1,
    }
  }

  load = () => {
    const {currentPage:page} = this.state;
    getUsers({page,res:3})
      .then((data)=>{
      if(data.error){
        return this.setState({
          isError: true
        })
      }
        return this.setState({
          users:data.results,
        })
      })
      .catch(()=>this.setState({
        isError: true
      }))
      .finally(()=>this.setState({
        isFetching: false,
      }))
  }

  componentDidMount(){
    this.setState({
      isFetching: true,
    })
    this.load();
  }
  componentDidUpdate(prevProps, prevState){
    const {currentPage} = this.state;
    if(currentPage!==prevState.currentPage){
      this.load();
    }
  }

  prevPage = () => {
    if(this.state.currentPage>1){
      this.setState((state,props)=>
      ({currentPage:state.currentPage-1})
      );
    }
  }
  nextPage = () => this.setState((state,props)=>({currentPage:state.currentPage+1}));

  createUser= (user) => <li key={user.login.uuid}>{JSON.stringify(user,null, 7)}</li>
    
  
  render() {
    const {users, isFetching, isError, currentPage} = this.state;
    // if(isError){
    //   return <div>Error</div>;
    // }
    // if(isFetching){
    //   return <div>Loading...</div>;
    // } ниже тоже самое
    return <div>
      {isError && <div>Error</div>}
      {isFetching && <div><Spinner/></div>}
      <h2>Users list</h2>
      <button onClick={this.prevPage}>&lt;</button>
      <button onClick={this.nextPage}>&gt;</button>
      <p>current page: {currentPage}</p>
      <ul>
        {users.map(this.createUser)}
      </ul>
    </div>;

  }
}


UsersLoader.propTypes = {};


export default UsersLoader;