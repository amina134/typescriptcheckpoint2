import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './greeting';
import Counter from './counter';

function App() {
  return (
    <div className="App">
     <Greeting name="amina"/>
     <Counter/>
    </div>
  );
}

export default App;
