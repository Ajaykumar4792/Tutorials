import React from 'react';
import './App.css';
import Tutorials from './Components/Tutorials';
const App = () => {
  return (
    <div>
      <div className='title'>
      <h1>Learning Web</h1>
      <p>Learn and Explore</p>
      </div>
      <main><Tutorials/></main>
    </div> 
  );
}

export default App;
