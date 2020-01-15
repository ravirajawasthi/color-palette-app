import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'
import './ColorBox.css'

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.triggerCopy(this.props.background.color)
    }

    render() {
        const { name, background, paletteId, colorId, singleColorMode } = this.props
        const isDark = chroma(background).luminance() >= 0.08
        return (
            <CopyToClipboard text={background}>
                <div style={{ background }} className="ColorBox">
                    <span className={`ColorBox-name ${isDark ? "dark-text" : "white-text"}`}>{name}</span>
                    <button className={`copy-button ${isDark ? "dark-text" : "white-text"}`} onClick={(background) => this.props.triggerCopy(background)}>Copy</button>
                    {!singleColorMode && <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}><span className={`see-more ${isDark ? "dark-text" : "white-text"}`}>More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox