import React, { PureComponent } from "react";
import MiniPalette from "./MiniPalette";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

class PaletteList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      DialogOpen: false,
    //   Palette id that has to be deleted
      paletteId: ""
    };
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handlePaletteDelete = this.handlePaletteDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this)
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleDialogOpen(evt, id) {
    evt.stopPropagation()
    this.setState({ DialogOpen: true , paletteId: id});
  }
  handleDialogClose() {
    this.setState({ DialogOpen: false, paletteId: "" });
  }
  handlePaletteDelete(){
      this.props.deletePalette(this.state.paletteId);
      this.handleDialogClose()
  }
  render() {
    const { palettes, classes } = this.props;
    const {DialogOpen} = this.state
    return (
      <div className={classes.mainContainer}>
        <div className={classes.listContainer}>
          <div className={classes.nav}>
            <h1 className={classes.navTitle}>React Colors</h1>
            <Link to="/palette/new">Create new Palette</Link>
          </div>

          <TransitionGroup className={classes.palettesContainer}>
            {palettes.map(palette => (
              <CSSTransition classNames="fade" timeout={300} key={palette.id}>
                <MiniPalette
                  openDialog={this.handleDialogOpen}
                  id={palette.id}
                  key={palette.id}
                  palette={palette}
                  handleClick={this.goToPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog onClose = {this.handleDialogClose} open={DialogOpen}>
          <DialogTitle>Delete palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.handlePaletteDelete}>
              <ListItemAvatar   >
                <Avatar className={classes.DeleteDialog}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Delete"} />
            </ListItem>
            <ListItem button onClick={this.handleDialogClose}>
              <ListItemAvatar>
                <Avatar className={classes.CancelDialog}>
                  <ClearIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Cancel"} />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
