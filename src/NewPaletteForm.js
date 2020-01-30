import React from "react";
import classNames from "classnames";
import PaletteFormNav from './PaletteFormNav'
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList'
import ColorPickerForm from "./ColorPickerForm";
import styles from './styles/newPaletteFormStyles.js';
import { withStyles } from "@material-ui/core/styles";
import {arrayMove} from 'react-sortable-hoc';


class NewPaletteForm extends React.Component {
	static defaultProps = {
		maxColors: 20
	}
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.props.seedColors[0].colors,
    };
    this.addNewColor = this.addNewColor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeColor = this.removeColor.bind(this)
    this.clearPalette = this.clearPalette.bind(this)
    this.addNewColor = this.addNewColor.bind(this)
    this.randomColor = this.randomColor.bind(this)
  }

	removeColor(colorName){
		this.setState(st => {
			let colors = st.colors.filter(colorObj => 
				(colorObj.name !== colorName)
			)
			return {colors: colors}
		})
	} 

	clearPalette(){
		this.setState({colors: []})
	}

  handleSubmit(newPaletteName, emoji) {
    const newPaletteNameObj = {
      name: newPaletteName, emoji
    }
    const { saveNewPalette } = this.props;
    saveNewPalette(this.state.colors, newPaletteNameObj);
    this.props.history.push("/");
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  addNewColor(newColorObj) {
    let colorObj = {
      name: newColorObj.colorName,
      color: newColorObj.currentColor
    };
    this.setState(st => {
      return {
        colors: [...st.colors, colorObj],
        currentColor: "black",
        colorName: ""
      };
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
	}

	onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
	};
	
	randomColor(){
    let duplicate=true;
    const allColors = this.props.palettes.map(palette => palette.colors).flat()
    let rand;
    let pickedColor;
    while(duplicate){
      rand = Math.round(Math.random() * allColors.length)
      duplicate = this.state.colors.some(color => color.name === allColors[rand]);
    }
		this.setState({colors: [...this.state.colors, allColors[rand]]})
	}

  render() {
    const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const isPaletteFull = colors.length >= maxColors

    return (
      <div className={classes.root}>
      <PaletteFormNav open={open} palettes={palettes} handleSubmit={this.handleSubmit} handleDrawerOpen={this.handleDrawerOpen}/> 
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
					<div className={classes.colorPickerContainer}>
          <Typography variant="h4">Design your Palette</Typography>
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={this.clearPalette} className={classes.button}>
              Clear Palette
            </Button>
            <Button variant="contained" color={ isPaletteFull ? "grey" : "secondary" } onClick={this.randomColor} disabled={isPaletteFull} className={classes.button}>
              Random Color
            </Button>
          </div>
					<ColorPickerForm isPaletteFull={isPaletteFull} colors={colors} addNewColor={this.addNewColor}/>
				</div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
					<DraggableColorList onSortEnd={this.onSortEnd} axis="xy" removeColor={this.removeColor} colors={this.state.colors} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
