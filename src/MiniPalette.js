import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = {
    mainContainer: {
        border: "1px solid black",
        textTransform: "none",
        borderRadius: "5px",
        lineHeight: "2.2rem",
        padding: "5px"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1rem",
        fontWeight: "500"
    }
}


function MiniPalette(props) {
    const { palette, classes } = props
    return (
        <div className={classes.mainContainer}>
            <h1 className={classes.title}>
                {palette.paletteName}
                <span>{palette.emoji}</span>
            </h1>
        </div>
    )
}



export default withStyles(styles)(MiniPalette);