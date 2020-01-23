import React, { Component } from "react";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    super(props);
    this.state = {
      palettes: savedPalettes || seedColors
    };
    this.saveNewPalette = this.saveNewPalette.bind(this);
  }
  
  saveToLocalStorage(){
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  saveNewPalette(colors, nameObj) {
    let paletteObj = {
      paletteName: nameObj.name,
      id: nameObj.name.toLowerCase().replace(/ /g, "-"),
      emoji: nameObj.emoji,
      colors: colors
    };
    this.setState(st => {
      return { palettes: [...st.palettes, paletteObj] };
    }, this.saveToLocalStorage);
  }

  findPalette(id) {
    const palettes = this.state.palettes;
    for (let i = 0; i < palettes.length; i += 1) {
      console.log(palettes[i], id);
      if (palettes[i].id === id) {
        return palettes[i];
      }
    }
  }
  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        {/* new palette name should not be new */}
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              {...routeProps}
              saveNewPalette={this.saveNewPalette}
              palettes={this.state.palettes}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        ></Route>
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              {...routeProps}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
