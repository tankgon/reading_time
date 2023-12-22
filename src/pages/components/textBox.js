import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

function TextBox({ value, onChange, defaultValue }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        defaultValue={defaultValue}
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
