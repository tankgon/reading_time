import { Grid } from "@mui/material";
import React from "react";

const DotText = ({ text, children, itemButton, classColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <span className={`text-red ${classColor}`}>*</span>
            <span className="">{text}</span>
          </Grid>
          <Grid item xs={12} lg={7}>
            {children}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        lg={2}
        sx={{ mt: "8px", mb: "8px", display: "flex", justifyContent: "end" }}>
        {itemButton}
      </Grid>
    </Grid>
  );
};

export default DotText;
