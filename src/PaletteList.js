import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes, deletePalette } = this.props
        return (
            <div className={classes.mainContainer}>
                <div className={classes.listContainer}>
                    <div className={classes.nav}>
                        <h1 className={classes.navTitle}>React Colors</h1>
                        <Link to="/palette/new">Create new Palette</Link>
                    </div>
                    <div className={classes.palettesContainer}>
                        {palettes.map(palette => (
                            <MiniPalette deletePalette={deletePalette} id={palette.id} key={palette.id} palette={palette} handleClick={() => { this.goToPalette(palette.id) }} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);