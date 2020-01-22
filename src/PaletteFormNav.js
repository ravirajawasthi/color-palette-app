import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

const drawerWidth = 400;
const styles = theme => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
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
      navForm: {
          marginLeft: "auto",

      }
})


class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paletteName: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("uniquePaletteName", paletteName => {
      return this.props.palettes.every(
        paletteObj => paletteObj.paletteName !== paletteName
      );
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { open, classes, handleSubmit, handleDrawerOpen } = this.props;
    const { paletteName } = this.state
    return (
      <div classesName={classes.root}>
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
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          <div className={classes.navForm}>
            <ValidatorForm onSubmit={() => handleSubmit(paletteName)}>
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
            <Link to="/"><Button variant="contained" color="primary">GO BACK</Button></Link>
        </div>
                </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav)

