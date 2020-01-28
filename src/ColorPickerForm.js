import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from './styles/ColorPickerFormStyles'
import {withStyles} from '@material-ui/core/styles'
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";



class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentColor is the current hex value in color picker
      currentColor: "teal",
      // ColorName is the name given to color in color picker
      colorName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateNewColor = this.updateNewColor.bind(this);
  }
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("uniqueName", colorName => {
      return this.props.colors.every(
        colorObj => colorObj.name.toLowerCase() !== colorName.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("uniqueColor", () => {
      return this.props.colors.every(
        colorObj => colorObj.color !== this.state.currentColor
      );
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  updateNewColor(newColor) {
    this.setState({ currentColor: newColor });
  }

  render() {
      const {isPaletteFull, classes, addNewColor} = this.props
    return (
      <div className={classes.picker}>
        <ChromePicker
            className={classes.picker}
          color={this.state.currentColor}
          onChangeComplete={newColor => this.updateNewColor(newColor.hex)}
        />
        <ValidatorForm
          onSubmit={() => addNewColor({currentColor: this.state.currentColor, colorName: this.state.colorName})}
        >
          <TextValidator
          className={classes.colorName}
            label="Color Name"
            onChange={this.handleChange}
            name="colorName"
            variant="filled"
            margin="normal"
            value={this.state.colorName}
            validators={["required", "uniqueName", "uniqueColor"]}
            errorMessages={[
              "Name is required",
              "Name is already used",
              "Color is not unique"
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            style={{
              backgroundColor: isPaletteFull ? "grey" : this.state.currentColor
            }}
            color="primary"
            type="submit"
            disabled={isPaletteFull}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
