import queryString from 'query-string';
import config from '../config';

/**
 * 
 * @param {*} options 
 * @param {number} options.page 
 * @param {number} options.results 
 * @param {string} options.format 
 * @param {string} options.seed 
 * @param {string} options.nat
 * @param {string} options.inc  
 * @returns {Propmise}
 */ 
export const getUsers = (options={}) =>{  
  const defaultOptions = {
    page:1,
    results:config.DEFAULT_AMOUNT,
    format:config.DEFAULT_FORMAT,
    seed:config.API_KEY,
    nat:'gb',
    inc:'gender,name,login,nat'
  } 
  const finalyOptions= {
    ...defaultOptions,
    ...options
  }
  const query = queryString.stringify(finalyOptions)
  return fetch(`${config.BASE_URL}?${query}`)
      .then((response)=>response.json());
    }



