<<<<<<< HEAD
import React from 'react';
import Ciao from '../Ciao';

const CiaoList = (props)=>{
  const {users} = props;
  const mapUsersCiao = ({id, fname})=><Ciao key={id} id={id} name={fname} />;

  return <div>
    {users.map(mapUsersCiao)}
  </div>;
=======
import React from "react";
import Ciao from "../Ciao";
import PropTypes from 'prop-types';
/**
* @param {array} props.users 
*/
const CiaoList =(props)=> {
  
  const {users} = props;
  const mapUsersCiao=({fname,id})=>
    <Ciao key={id} id={id} name={fname} />;
    
  return <>
  <div>{users.map(mapUsersCiao)}</div>
  </>
}


CiaoList.propTypes = {
  users:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string
  })

  )
>>>>>>> 122cc596227f86e27d5b120b210dafa27c32c9de
}

export default CiaoList;