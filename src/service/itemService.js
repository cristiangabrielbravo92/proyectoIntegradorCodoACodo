//import fetch from 'node-fetch';

const  getItems  = () => {  
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/data/items.json')
    .then( response => response.json() )
    .then( response => resolve( response ) )
    // .then(response => { return (response) } )
    .catch(err => console.log('Solicitud fallida', err));
  }); 

}


  module.exports = {
    getItems
   
  }