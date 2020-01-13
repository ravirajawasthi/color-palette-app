import React, { Component } from 'react';
import uuid from 'uuid';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import './Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false,
            copiedColor: "",
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
        const { colors, paletteName, emoji, color } = this.props.palette
        console.log(color, colors)
        const colorBoxes = colors[level].map(color => <ColorBox key={uuid()} triggerCopy={() => this.triggerCopy(color)} background={color[colorFormat]} name={color.name} />)
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} changeColorFormat={this.changeColorFormat} format={colorFormat} snackbarBool={snackbarBool} handleSnackbar={this.handleSnackbar} />
                <div className="Palette-colors">
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
                </div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="Palette-footer-emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette