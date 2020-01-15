import React, { Component } from 'react';
import uuid from 'uuid';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import chroma from 'chroma-js'
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false,
            copiedColor: "#ffffff",
            level: 500,
            colorFormat: 'hex',
            snackbarBool: false
        }
        this.triggerCopy = this.triggerCopy.bind(this)
        this.changeLevel = this.changeLevel.bind(this)
        this.changeColorFormat = this.changeColorFormat.bind(this)
        this.handleSnackbar = this.handleSnackbar.bind(this)
    }

    changeLevel(n) {
        this.setState({ level: n })
    }

    changeColorFormat(e) {
        this.setState({ colorFormat: e.target.value, snackbarBool: true })
    }

    triggerCopy(color) {
        this.setState({ copied: true, copiedColor: color[this.state.colorFormat] }, () => setTimeout(() => {
            this.setState({ copied: false, })
        }, 1100))

    }

    handleSnackbar() {
        console.log("handle snackbar called")
        this.setState({ snackbarBool: false })
    }

    render() {
        const { copiedColor, copied, level, colorFormat, snackbarBool } = this.state
        const { colors, paletteName, emoji, id } = this.props.palette
        const isDark = chroma(copiedColor).luminance() >= 0.08
        const colorBoxes = colors[level].map(color => <ColorBox key={uuid()} triggerCopy={() => this.triggerCopy(color)} background={color[colorFormat]} name={color.name} paletteId={id} colorId={color.id} />)
        return (
            <div className='Palette'>
                <Navbar SingleColorMode={false} level={level} changeLevel={this.changeLevel} changeColorFormat={this.changeColorFormat} format={colorFormat} snackbarBool={snackbarBool} handleSnackbar={this.handleSnackbar} />
                <div className="Palette-colors">
                    <div style={{ background: copiedColor }} className={`copy-overlay ${copied ? "show" : ""}`}>

                        {
                            copied ?
                                <div className={`copy-overlay-message-container `}>
                                    <h1 className={`copy-overlay-message ${isDark >= 0.08 ? "dark-text" : "white-text"}`}>Copied</h1>
                                    <h3 className={`copy-overlay-color ${isDark >= 0.08 ? "dark-text" : "white-text"}`}>{copiedColor}</h3>
                                </div>
                                :
                                <span></span>

                        }
                    </div>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette