import TextField from "@mui/material/TextField";

const TextBox = ({ value, onChange, defaultValue, mr, ml, disabled }) => {
  return (
    <TextField
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
};

export default TextBox;
