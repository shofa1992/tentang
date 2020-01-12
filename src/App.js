import React from 'react';
import  { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutMe from './komponen/AboutMe';

function App() {
  return (
    <div className="App">
     
   
        <Router>
          <div>
            <Route exact path="/" component={ AboutMe }/>
          </div>
        </Router>
      
    </div>
  );
}

export default App;
