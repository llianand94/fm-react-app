export const getJSONbyFetch= (path)=>fetch(path)
  .then((response) => response.json());
