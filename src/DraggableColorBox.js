import React from 'react'
import {withStyles} from '@material-ui/styles'

const styles={
    root:{
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative;  ",
        margin: "0 auto",
        cursor: "pointer",
        marginBottom: "-3.7px",
    }
}

function DraggableColorBox(props){
    const {name, color, classes} = props
    return <div className={classes.root} style={{backgroundColor: color}}>{name}</div>
}

export default withStyles(styles)(DraggableColorBox)