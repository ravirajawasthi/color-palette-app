import React, { PureComponent } from "react";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

class MiniPalette extends PureComponent {
  render() {
    console.log("RENDEING")
    const { palette, classes, handleClick, openDialog, id } = this.props;
    const MiniColorBoxes = palette.colors.map(color => (
      <div
        style={{ backgroundColor: color.color }}
        key={color.name}
        className={classes.MiniBox}
      ></div>
    ));
    return (
      <div onClick={() => handleClick(id)} className={classes.mainContainer}>
        <span className={classes.DeleteIconContainer}>
          <DeleteIcon
            className={classes.DeleteIcon}
            onClick={evt => openDialog(evt, id)}
          />
        </span>
        <div className={classes.MiniPaletteContainer}>{MiniColorBoxes}</div>
        <h1 className={classes.title}>
          {palette.paletteName}
          <span>{palette.emoji}</span>
        </h1>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
