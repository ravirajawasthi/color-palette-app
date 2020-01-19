import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/core/styles';

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props
        return (
            <div className={classes.mainContainer}>
                <div className={classes.listContainer}>
                    <div className={classes.nav}>
                        <h1 className={classes.navTitle}>React Colors</h1>
                    </div>
                    <div className={classes.palettesContainer}>
                        {palettes.map(palette => (
                            <MiniPalette key={palette.id} palette={palette} handleClick={() => { this.goToPalette(palette.id) }} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);