import React from 'react';
import './App.css';
import {Header} from './Header';
import {AdDesigner} from './AdDesigner';
import {Votes} from './Votes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;