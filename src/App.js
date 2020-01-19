import React, { Component } from 'react';
import './App.css';
import PaletteList from './PaletteList'
import Palette from './Palette'
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors'
import generatePalette from './colorHelpers'
import NewPaletteForm from './NewPaletteForm'
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
        {/* new palette name should not be new */}
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm {...routeProps}/>} />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} ></Route>
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette {...routeProps} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
    );
  }
}

export default App;
