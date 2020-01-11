import React from 'react';
import './App.css';
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorHelpers'


function App() {
  return (
    <div className="App">
      {console.log(generatePalette(seedColors[Math.round(Math.random() * seedColors.length)]))}
      <Palette {...generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
