import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends Component {
    render() {
        let { level, changeLevel, changeColorFormat, format, handleSnackbar, snackbarBool } = this.props
        return (
            <header className="Navbar" >
                <div className="logo">
                    <Link to="/">reactcolorpicker</Link>
                    <div className="slider-container">
                        <div className="slider">
                            <span className="slider-level">Level : {level}</span>
                            <Slider step={100} defaultValue={level} min={100} max={900} onAfterChange={changeLevel} />
                        </div>
                    </div>
                </div>
                <Select className="select-menu" value={format} onChange={(e) => changeColorFormat(e)}>
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

export default Navbar