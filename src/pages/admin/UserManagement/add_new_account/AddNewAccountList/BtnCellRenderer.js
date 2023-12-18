import { Grid } from "@mui/material";
import React, { Component } from "react";
import ButtonComponent from "../../../../components/buttonComponent";
class BtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
    this.props.clicked(this.props.value);
  }
  render() {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={6}>
          <ButtonComponent onClick={this.btnClickedHandler} title={"Cancel"} />
        </Grid>
      </Grid>
    );
  }
}

export default BtnCellRenderer;
