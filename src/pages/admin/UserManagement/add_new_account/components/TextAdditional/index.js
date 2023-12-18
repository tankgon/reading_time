import { Box, Grid } from "@mui/material";
import React from "react";

const TextCheckBox = ({ text, children, classColor }) => {
  return (
    <Grid container spacing={2} sx={{p: "12px 0"}}>
      <Grid item xs={12} lg={10}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid
              container
              item
              xs={12}
              lg={2}
              justifyContent="center"
              alignItems="center"
              sx={{ justifyContent: "flex-start" }}>
              <div
                className="dot-text-container"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}>
                <div className={`dot-text ${classColor}`}>*</div>
                <Box sx={4} style={{ marginLeft: "8px" }}>
                  {text}
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} lg={10}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TextCheckBox;
