import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

function TextBox({ value, onChange }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        size="small"
        sx={{ p: "8px 0" }}
        id="outlined-basic"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default TextBox;
