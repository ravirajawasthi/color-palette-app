import React from 'react';
import styles from './styles/PaletteFooter'
import {withStyles} from '@material-ui/styles'

function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span className={classes.PaletteFooterEmoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);