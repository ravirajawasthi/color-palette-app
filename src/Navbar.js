import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import {withStyles} from '@material-ui/styles';
import styles from './styles/NavbarStyles'
import 'rc-slider/assets/index.css';



class Navbar extends Component {
    render() {
        let { level, changeLevel, changeColorFormat, format, handleSnackbar, snackbarBool, SingleColorMode, classes } = this.props
        return (
            <header className={classes.Navbar} >
                <div className={classes.logo}>
                    <Link to="/">reactcolorpicker</Link>
                    <div>
                    </div>
                </div>
                {!SingleColorMode && <div className={classes.slider}>
                    <span className="slider-level">Level : {level}</span>
                    <Slider step={100} defaultValue={level} min={100} max={900} onAfterChange={changeLevel} />
                </div>}
                <Select className={classes.selectMenu} value={format} onChange={(e) => changeColorFormat(e)}>
                    <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
                    <MenuItem value={"rgb"}>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value={"rgba"}>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={3000}
                    message="Color format changed!"
                    open={snackbarBool}
                    onClose={handleSnackbar}
                    action={
                        <IconButton color="inherit" onClick={handleSnackbar}>
                            <CloseIcon ></CloseIcon>
                        </IconButton>
                    }
                />

            </header >
        )
    }
}

export default withStyles(styles)(Navbar)