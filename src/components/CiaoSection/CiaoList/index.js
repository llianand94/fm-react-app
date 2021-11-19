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
}

export default CiaoList;