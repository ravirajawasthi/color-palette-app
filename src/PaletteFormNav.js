import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteNameNavForm from "./PaletteNameNavForm";
import Button from "@material-ui/core/Button";
import styles from './styles/PaletteFormNavStyles';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class PaletteFormNav extends Component {
  render() {
    const {
      open,
      classes,
      handleSubmit,
      handleDrawerOpen,
      palettes
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="inherit"
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
            <div className={classes.navbarMainContent}>
              <Typography variant="h6" color="inherit">
                Create Palette
              </Typography>
              <div className={classes.navForm}>
                <PaletteNameNavForm
                  classes={classes}
                  handleSubmit={handleSubmit}
                  palettes={palettes}
                />
                <Link to="/" className={classes.actionBtns}>
                  <Button variant="contained" color="primary">
                    GO BACK
                  </Button>
                </Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
