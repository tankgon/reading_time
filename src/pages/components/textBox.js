import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

function TextBox({
  value,
  onChange,
  defaultValue,
  mr,
  ml,
  disabled,
  onSubmit,
}) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        onSubmit={onSubmit}
        disabled={disabled}
        fullWidth
        defaultValue={defaultValue}
        size="small"
        sx={{ p: "8px 0", mr: mr, ml: ml }}
        id="outlined-basic"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default TextBox;
