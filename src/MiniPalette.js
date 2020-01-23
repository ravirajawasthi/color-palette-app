import React from 'react'
import styles from './styles/MiniPaletteStyles'
import { withStyles } from '@material-ui/core/styles';



function MiniPalette(props) {
    const { palette, classes, handleClick } = props
    const MiniColorBoxes = palette.colors.map(color => <div style={{ backgroundColor: color.color }} key={color.name} className={classes.MiniBox}></div>)
    return (
        <div onClick={handleClick} className={classes.mainContainer}>
            <div className={classes.MiniPaletteContainer}>{MiniColorBoxes}</div>
            <h1 className={classes.title}>
                {palette.paletteName}
                <span>{palette.emoji}</span>
            </h1>
        </div>
    )
}



export default withStyles(styles)(MiniPalette);