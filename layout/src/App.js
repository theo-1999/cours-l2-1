import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import data from './user.js';



class App extends React.Component {
  
   
     

  

  render() {
    console.log('Les données',data);
    return (
      <div class="card m-5">
      <img class="card-img-top" src={data.picture.large} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{data.name.title} {data.name.first} {data.name.last}</h5>
            <p class="card-text">{data.email}</p>
           
          </div>
      </div>

    )
  
  }
  
}

export default App;
 