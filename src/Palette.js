import React, { Component } from 'react';
import uuid from 'uuid';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends Component{
    constructor(props){
        super(props)
        this.state = {
            copied : false,
            copiedColor: ""
        }
        this.triggerCopy = this.triggerCopy.bind(this)
    }

    triggerCopy(color){
        this.setState({copied: true, copiedColor: color.color}, () => setTimeout(()=>{
            this.setState({copied: false, copiedColor: ""})
        }, 1500))

    }

    render(){
        const colorBoxes = this.props.colors.map( color =>  <ColorBox key = {uuid()} triggerCopy = {() => this.triggerCopy(color)} background={color.color} name={color.name}/>) 
        const {copiedColor, copied} = this.state
        return (
            <div className='Palette'>
                <div className="Palette-colors">
                    <div style={{background: copiedColor}} className = {`copy-overlay ${copied? "show" : ""}`}>
                        <div className="copy-overlay-message-container">
                            <h1 className = "copy-overlay-message">Copied</h1>
                            <h3 className = "copy-overlay-color">{copiedColor}</h3>
                        </div>
                    </div>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette