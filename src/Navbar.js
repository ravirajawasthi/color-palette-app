import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends Component {
    render() {
        let { level, changeLevel } = this.props
        return (
            <header className="Navbar" >
                <div className="logo">
                    <a href="3">reactcolorpicker</a>
                    <div className="slider-container">
                        <div className="slider">
                            <span>Level : {level}</span>
                            <Slider step={100} defaultValue={level} min={100} max={900} onAfterChange={changeLevel} />
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}

export default Navbar