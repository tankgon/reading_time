import TextField from "@mui/material/TextField";

export default function TextBox({
  value,
  onChange,
  defaultValue,
  mr,
  ml,
  disabled,
  onSubmit,
}) {
  return (
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
  );
}


