import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from './Spinner';
import config from '../../config';


class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      isFetching: false,
      isError: false,
      currentPage: 1,
      currentResults:config.DEFAULT_AMOUNT,
      currentNat:'gb'
    }
  }

  load = () => {
    const {currentPage:page, currentResults:results, currentNat:nat} = this.state;
    getUsers({page,results, nat})
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
    const {currentPage,currentResults, currentNat} = this.state;
    const isUpdate = currentPage!==prevState.currentPage||
          currentResults!==prevState.currentResults||currentNat!==prevState.currentNat;
    if(isUpdate){
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

  createUser= (user) => <li key={user.login.uuid}>{JSON.stringify(user.name,null, 7)} {user.nat}</li>
    
  radioHandler = (e) =>{       
    this.setState({currentResults: e.target.value})     
  }
  checkChecked = (value) =>{    
    if(this.state.currentResults===value){
      return true
    }    
  }
  selectHandler = (e) =>{
    this.setState({currentNat: e.target.value})
  }
  render() {
    const {users, isFetching, isError, currentPage, currrentNat} = this.state;
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
      <select value={currrentNat} onChange={this.selectHandler}>
        <option value="au">AU</option>
        <option value="br">BR</option>
        <option value="fr">FR</option>
        <option value="gb">GB</option>
      </select>
      <div>
        <label><input type="radio" name="results" checked={this.checkChecked(5)} value={5} onChange={this.radioHandler}/>5</label>
        <label><input type="radio" name="results" value={10} onChange={this.radioHandler} checked={this.checkChecked(10)}/>10</label>
        <label><input type="radio" name="results" value={15} onChange={this.radioHandler} checked={this.checkChecked(15)}/>15</label>
      </div>
      <ul>
        {users.map(this.createUser)}
      </ul>
    </div>;

  }
}



export default UsersLoader;