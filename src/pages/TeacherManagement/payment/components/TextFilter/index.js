import { Box, Grid } from "@mui/material";
import React from "react";

const TextFilter = ({ text, children, itemButton }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid item xs={12} lg={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          <div className="dot-text-container">
            <div style={{ color: "#7F7F7F" }}>{text}</div>
          </div>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TextFilter;
