import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function CheckBox(className) {
  return (
    <FormControl
      sx={{
        p: "8px",
        mt: "20px",
        mb: "20px",
        display: "flex"
      }}>
      <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}

export default CheckBox;
