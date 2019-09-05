import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App() {
  
    return (
      
        <div className="App">
          <SmurfList />
          <SmurfForm />
          
        </div>
      
    );
  
}

export default App;
