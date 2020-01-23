import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";

class PaletteNameNavForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paletteName: "",
      stage: "close"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openNameForm = this.openNameForm.bind(this);
    this.openEmojiForm = this.openEmojiForm.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("uniquePaletteName", paletteName => {
      return this.props.palettes.every(
        paletteObj => paletteObj.paletteName !== paletteName
      );
    });
  }

  handleClose() {
    this.setState({ stage: "close" });
  }
  openNameForm() {
    this.setState({ stage: "nameForm" });
  }
  openEmojiForm() {
    this.setState({ stage: "emojiForm" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { paletteName, stage } = this.state;
    const { handleSubmit, classes } = this.props;
    return (
      <div className={classes.actionBtns}>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.openNameForm}
        >
          Save
        </Button>
        <Dialog open={stage === "emojiForm"} onClose={this.handleClose}>
          <Picker
            title="Pick your emoji…"
            emoji="point_up"
            onSelect={emoji => handleSubmit(paletteName, emoji.native)}
          />
        </Dialog>
        <Dialog
          open={stage === "nameForm"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <ValidatorForm onSubmit={this.openEmojiForm}>
            <DialogContent>
              <DialogContentText>
                Enter a unique name for youe beautiful palette. This palette
                looks pretty cool
              </DialogContentText>
              <TextValidator
                onChange={this.handleChange}
                name="paletteName"
                label="Palette Name"
                fullWidth
                margin="normal"
                value={paletteName}
                validators={["required", "uniquePaletteName"]}
                errorMessages={[
                  "Palette Name is required",
                  "Palette Name is already used"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="secondary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteNameNavForm;
