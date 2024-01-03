import Select from "@mui/material/Select";
import * as React from "react";

function SelectBox({
  defaultValue,
  onChange,
  value,
  fullWidth,
  sx,
  size,
  children,
  multiline,
}) {
  return (
    <Select
      multiline
      fullWidth={fullWidth}
      value={value}
      size={size}
      defaultValue={defaultValue}
      sx={sx}
      onChange={onChange}>
      {children}
    </Select>
  );
}

export default SelectBox;
