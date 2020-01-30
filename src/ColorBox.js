import React, { Component } from 'react'
import styles from './styles/ColorBoxStyles'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from "@material-ui/styles"
import { Link } from 'react-router-dom';



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
        const { name, background, paletteId, colorId, singleColorMode, classes } = this.props
        return (
            <CopyToClipboard text={background}>
                <div style={{ background }} className={classes.ColorBox}>
                    <span className={`${classes.ColorBoxName} ${classes.textColor}`}>{name}</span>
                    <button className={`${classes.copyButton} ${classes.textColor}`} onClick={(background) => this.props.triggerCopy(background)}>Copy</button>
                    {!singleColorMode && <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}><span className={`${classes.seeMore} ${classes.textColor}`}>More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);