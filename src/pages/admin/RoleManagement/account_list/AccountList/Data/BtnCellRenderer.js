import Box from "@mui/system/Box";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/role/addnewaccount"}>
        <Box
          onClick={this.btnClickedHandler}
          sx={{
            backgroundColor: "#6495ED",
            textAlign: "center",
            color: "white",
          }}>
          <strong>Detail</strong>
        </Box>
      </Link>
    );
  }
}

export default BtnCellRenderer;
