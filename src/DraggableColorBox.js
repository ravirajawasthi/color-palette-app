import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc';
import {withStyles} from '@material-ui/styles'

const styles={
    root: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        position: "relative;  ",
        margin: "0 auto",
        cursor: "pointer",
        marginBottom: "-6px",
    },
    boxContainer:{
        position: "absolute",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
    },
    boxContent: {
        marginBottom: "5px",
        boxSizing: "border-box",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        color: "rgb(0,0,0,0.5)",
        "& svg:hover":{
            color: "white",
            transform: "scale(1.4)"
        }
    },
    boxName: {
        fontSize: "1rem",
        textTransform: "uppercase"
    },
    boxDelete: {
        transition: "all 0.3s ease-in-out"
    }
}

const DraggableColorBox = SortableElement((props) => {
    const {name, color, classes, removeColor} = props
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContainer}>
                <div className={classes.boxContent}><span className={classes.boxName}>{name}</span>
                <DeleteIcon onClick={() => removeColor(name)} className={classes.boxDelete}/></div>
            </div>
        </div>)
})
export default withStyles(styles)(DraggableColorBox)