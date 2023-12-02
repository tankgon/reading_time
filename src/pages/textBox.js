import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

function TextBox(className) {
  return (
    <Box
      component="form"
      sx={{
        border: "1px solid #C0C0C0",
        p: "8px",
        mt: "20px",
        mb: "20px",
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="standard-basic"
        variant="standard"
        fullWidth
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
}

export default TextBox;
