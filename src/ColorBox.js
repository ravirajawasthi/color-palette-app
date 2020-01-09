import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css'

class ColorBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            copied : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.triggerCopy(this.props.background.color)
    }

    render(){
        const {name, background} = this.props
        return(
            <CopyToClipboard text={background}>
                <div style={{background}} className = "ColorBox">
                    <span className = "ColorBox-name">{name}</span>
                    <button className = "copy-button" onClick={(background) => this.props.triggerCopy(background)}>Copy</button>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox