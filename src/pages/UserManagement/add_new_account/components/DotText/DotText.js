import { Box, Grid } from "@mui/material";
import React from "react";
import "./DotText.css";

const DotText = ({ text, children, itemButton, classColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="dot-text-container">
            <div className={`dot-text ${classColor}`}>*</div>
            <div className="text">{text}</div>
          </div>
          {children}
        </Box>
      </Grid>
      <Grid item xs={12} lg={2} sx={{ mt: "8px" }}>
        {itemButton}
      </Grid>
    </Grid>
  );
};

export default DotText;
