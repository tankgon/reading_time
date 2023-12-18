import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
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
        <Grid item xs={12} lg={12}>
          <Button
            onClick={this.btnClickedHandler}
            sx={{
              backgroundColor: "#6495ED",
              textAlign: "center",
              color: "white",
              textTransform: "capitalize",
            }}
            variant="contained">
            <strong>edit</strong>
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default BtnCellRenderer;
