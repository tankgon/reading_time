import { Grid } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Grid item xs={12} lg={12}>
          <Link to={"/contents/curriculum/page"}>link</Link>
        </Grid>
      </Grid>
    );
  }
}

export default LinkContact;
