import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './SingleColorPalette.css'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false,
            copiedColor: "",
            level: 500,
            colorFormat: 'hex',
            snackbarBool: false
        }
        this.gatherShades = this.gatherShades.bind(this)
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

    gatherShades(palette, colorId) {
        let shades = []
        palette.colors.map((colorShade) => shades.push(colorShade.find(color => color.id === colorId)))
        shades.shift()
        return shades
    }

    render() {
        const { palette } = this.props
        const { copiedColor, copied, colorFormat, snackbarBool, level } = this.state
        let shades = this.gatherShades(palette, this.props.match.params.colorId)
        let colorBoxes = shades.map(color => <ColorBox singeColorMode={true} key={uuid()} triggerCopy={() => this.triggerCopy(color)} background={color[colorFormat]} name={color.name} />)
        return (
            <div className='Palette'>
                <Navbar SingleColorMode={true} level={level} changeLevel={this.changeLevel} changeColorFormat={this.changeColorFormat} format={colorFormat} snackbarBool={snackbarBool} handleSnackbar={this.handleSnackbar} />
                <div className="SinglePalette-colors">
                    <div style={{ background: copiedColor }} className={`copy-overlay ${copied ? "show" : ""}`}>
                        {
                            copied ?
                                <div className="copy-overlay-message-container">
                                    <h1 className="copy-overlay-message">Copied</h1>
                                    <h3 className="copy-overlay-color">{copiedColor}</h3>
                                </div>
                                :
                                <span></span>
                        }
                    </div>
                    {colorBoxes}
                    <div className="ColorBox go-back">
                        <Link className="back-button" to={`/palette/${palette.id}`}>Go Back!</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}


export default SingleColorPalette