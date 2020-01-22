import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList'
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {arrayMove} from 'react-sortable-hoc';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
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
  }
});

class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      // currentColor is the current hex value in color picker
      currentColor: "teal",
      colors: [{ name: "blue", color: "blue" }],
      // the space is too make sure the user does not get isRequired warning
	  	colorName: "",
	  	paletteName: ""
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.updateNewColor = this.updateNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeColor = this.removeColor.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("uniqueName", colorName => {
      return this.state.colors.every(
        colorObj => colorObj.name.toLowerCase() !== colorName.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("uniqueColor", () => {
      return this.state.colors.every(
        colorObj => colorObj.color !== this.state.currentColor
      );
    });

    ValidatorForm.addValidationRule("uniquePaletteName", paletteName => {
      return this.props.palettes.every(
        paletteObj => paletteObj.paletteName !== paletteName
      );
    });
  }
	removeColor(colorName){
		this.setState(st => {
			let colors = st.colors.filter(colorObj => 
				(colorObj.name !== colorName)
			)
			return {colors: colors}
		})
	} 

  handleSubmit() {
    const { saveNewPalette } = this.props;
    saveNewPalette(this.state.colors, this.state.paletteName);
    this.props.history.push("/");
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateNewColor(newColor) {
    this.setState({ currentColor: newColor });
  }

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

  render() {
    const { classes } = this.props;
		const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator
								onChange={this.handleChange}
								name="paletteName"
								label="Palette Name"
								value={this.state.paletteName}
                validators={["required", "uniquePaletteName"]}
                errorMessages={[
                  "Palette Name is required",
                  "Palette Name is already used"
                ]}
              />
              <Button variant="contained" color="secondary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
          <Typography variant="h4">Design your Palette</Typography>
          <div>
            <Button variant="contained" color="primary">
              Clear Palette
            </Button>
            <Button variant="contained" color="secondary">
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={newColor => this.updateNewColor(newColor.hex)}
          />
          <ValidatorForm
            onSubmit={() => this.addNewColor(this.state.currentColor)}
          >
            <TextValidator
              label="Color Name"
              onChange={this.handleChange}
              name="colorName"
              value={this.state.colorName}
              validators={["required", "uniqueName", "uniqueColor"]}
              errorMessages={[
                "Name is required",
                "Name is already used",
                "Color is not unique"
              ]}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: this.state.currentColor }}
              color="primary"
              type="submit"
            >
              Add Color
            </Button>
          </ValidatorForm>
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
