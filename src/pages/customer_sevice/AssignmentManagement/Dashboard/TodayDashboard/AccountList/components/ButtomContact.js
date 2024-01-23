import { Grid } from "@mui/material";
import React, { Component } from "react";
import DialogPayment from "../../components/DialogPayment";
class LinkContact extends Component {
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
        <Grid item xs={12} lg={12} sx={{ display: "flex" }}>
          <DialogPayment title={"Cancel/Refund"} />
          <DialogPayment title={"Change"} />
        </Grid>
      </Grid>
    );
  }
}

export default LinkContact;
