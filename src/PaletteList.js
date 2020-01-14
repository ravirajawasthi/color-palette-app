import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    mainContainer: {
        backgroundColor: "lightblue",
        height: "100vh",

    },
    listContainer: {
        width: "50%",
        margin: "auto",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem"
    },
    palettesContainer: {
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "7% 3%"
    },

}

class PaletteList extends Component {
    goToPalette(id) {
        console.log("onClick on minipalette called")
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