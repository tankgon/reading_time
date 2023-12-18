import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

function SelectBox({ data, onChange, value }) {
  return (
    <Box
      component="form"
      sx={{
        mt: "20px",
        mb: "20px",
      }}
      noValidate
      autoComplete="off">
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={value}
          defaultValue={value}
          onChange={onChange}>
          {data
            ? data.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.value}>
                    {item.title}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectBox;
