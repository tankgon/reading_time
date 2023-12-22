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
      <Box
        onClick={this.btnClickedHandler}
        sx={{
          backgroundColor: "#6495ED",
          textAlign: "center",
          color: "white",
        }}>
        <strong>Detail</strong>
      </Box>
    );
  }
}

export default BtnCellRenderer;
