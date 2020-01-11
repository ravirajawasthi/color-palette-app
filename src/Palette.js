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
            level: 500
        }
        this.triggerCopy = this.triggerCopy.bind(this)
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(n) {
        this.setState({ level: n })
    }

    triggerCopy(color) {
        this.setState({ copied: true, copiedColor: color.hex }, () => setTimeout(() => {
            this.setState({ copied: false })
        }, 1100))

    }

    render() {
        const colorBoxes = this.props.colors[this.state.level].map(color => <ColorBox key={uuid()} triggerCopy={() => this.triggerCopy(color)} background={color.hex} name={color.name} />)
        const { copiedColor, copied } = this.state
        return (
            <div className='Palette'>
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
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
            </div>
        )
    }
}

export default Palette