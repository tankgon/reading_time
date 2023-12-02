import { Grid } from "@mui/material";
import Box from "@mui/system/Box";
import React, { Component } from "react";
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
          <Box
            onClick={this.btnClickedHandler}
            sx={{
              backgroundColor: "#6495ED",
              textAlign: "center",
              color: "white",
            }}>
            <strong>EDIT</strong>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            onClick={this.btnClickedHandler}
            sx={{
              backgroundColor: "#000",
              textAlign: "center",
              color: "white",
            }}>
            <strong>DELETE</strong>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default BtnCellRenderer;
