import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function CheckBox2Opstion({ title1, title2, value1, value2, onChange }) {
  return (
    <FormControl
      sx={{
        p: "8px",
        display: "flex",
      }}>
      <RadioGroup onChange={onChange} row name="row-radio-buttons-group">
        <FormControlLabel value={value1} control={<Radio />} label={title1} />
        <FormControlLabel value={value2} control={<Radio />} label={title2} />
      </RadioGroup>
    </FormControl>
  );
}

export default CheckBox2Opstion;
