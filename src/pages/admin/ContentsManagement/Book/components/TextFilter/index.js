import { Grid } from "@mui/material";
import React from "react";

const TextFilter = ({ text, children, itemButton }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        p: "8px 0",
      }}>
      <Grid item xs={12} lg={2}>
        <div style={{ color: "#7F7F7F" }}>{text}</div>
      </Grid>
      <Grid item xs={12} lg={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TextFilter;