import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles'
import {SortableElement} from 'react-sortable-hoc';
import {withStyles} from '@material-ui/styles'


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