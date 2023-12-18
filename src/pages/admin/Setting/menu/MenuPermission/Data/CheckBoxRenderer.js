import Checkbox from "@mui/material/Checkbox";
import React, { Component } from "react";
class CheckBoxRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
    this.props.clicked(this.props.value);
  }
  render() {
    return <Checkbox defaultChecked />;
  }
}

export default CheckBoxRenderer;
