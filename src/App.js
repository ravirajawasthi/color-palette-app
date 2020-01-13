import React, { Component } from 'react';
import './App.css';
import PaletteList from './PaletteList'
import Palette from './Palette'
import seedColors from './seedColors'
import generatePalette from './colorHelpers'
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  findPalette(id) {
    for (let i = 0; i < seedColors.length; i += 1) {
      console.log(seedColors[i], id)
      if (seedColors[i].id === id) {
        return seedColors[i]
      }
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" ><PaletteList palettes={seedColors} /></Route>
        <Route exact path="/palette/:id" render={routeProps =>
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
        } />
      </Switch>
    );
  }
}

export default App;
