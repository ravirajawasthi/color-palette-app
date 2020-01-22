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
import { withStyles } from "@material-ui/core/styles";
import {arrayMove} from 'react-sortable-hoc';
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;
const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
	},
	colorPickerContainer: {
		width: "100%",
		padding: "0 5%",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

	},
	buttons: {
		width: "100%",
		margin: "10px 0 20px 0",
	},
	button: {
		width: "50%"
	}
});

class NewPaletteForm extends React.Component {
	static defaultProps = {
		maxColors: 20
	}
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
      
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearPalette = this.clearPalette.bind(this);
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

  handleSubmit(newPaletteName) {
    const { saveNewPalette } = this.props;
    saveNewPalette(this.state.colors, newPaletteName);
    this.props.history.push("/");
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  addNewColor(newColor) {
    let colorObj = {
      name: this.state.colorName,
      color: this.state.currentColor
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
		const allColors = this.props.palettes.map(palette => palette.colors).flat()
		const rand = Math.round(Math.random() * allColors.length)
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
					<ColorPickerForm isPaletteFull={isPaletteFull} colors={colors}/>
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
