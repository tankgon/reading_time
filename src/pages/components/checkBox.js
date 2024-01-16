import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function CheckBox2Opstion({ title1, title2, onChange, value }) {
  return (
    <FormControl
      sx={{
        p: "8px",
        display: "flex",
      }}>
      <RadioGroup
        value={value}
        onChange={onChange}
        row
        name="row-radio-buttons-group">
        <FormControlLabel value={true} control={<Radio />} label={title1} />
        <FormControlLabel value={false} control={<Radio />} label={title2} />
      </RadioGroup>
    </FormControl>
  );
}

export default CheckBox2Opstion;
