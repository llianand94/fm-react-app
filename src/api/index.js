import queryString from 'query-string';

/**
 * 
 * @param {*} options 
 * @param {number} options.page 
 * @param {number} options.res 
 * @param {string} options.ft 
 * @returns 
 */ 
export const getUsers = (options={}) =>{
  const {page=1, res=2, ft='json'} = options;
  return fetch(`https://randomuser.me/api/?format=${ft}&results=${res}&page=${page}&seed=users`)
      .then((response)=>response.json());
    }



