import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = {
    mainContainer: {
        border: "1px solid black",
        textTransform: "none",
        borderRadius: "5px",
        lineHeight: "2.2rem",
        padding: "5px",
        backgroundColor: "white"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1rem",
        fontWeight: "500",
        cursor: "pointer"
    },
    MiniPaletteContainer: {
        height: "150px",
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        boxSizing: "border-box",
        border: "1px solid black",
        borderRadius: "2px"

    },
    MiniBox: {
        height: "20%",
        width: "25%",
        display: "inline-block",
        margin: "0",
        padding: "0",
    },
}


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