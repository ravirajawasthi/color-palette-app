import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    mainContainer: {
        width: "50%",
        margin: "auto",
        backgroundColor: "lightblue",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2rem 0"
    },
    palettesContainer: {
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "7% 3%"
    },

}

class PaletteList extends Component {
    render() {
        const { palettes, classes } = this.props
        return (
            <div className={classes.mainContainer}>
                <div className={classes.nav}>
                    <h1 className={classes.navTitle}>React Colors</h1>
                </div>
                <div className={classes.palettesContainer}>
                    {palettes.map(palette => (
                        <Link style={{ textDecoration: "none", color: "black" }} to={`/palette/${palette.id}`}><MiniPalette palette={palette} /></Link>
                    ))}
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);