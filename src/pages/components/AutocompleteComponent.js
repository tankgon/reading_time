import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";

function AutocompleteComponent({ optionSelect, sx, size, onChange }) {
  const handleSelect = (event, value) => {
    if (value) {
      console.log("123");
    }
  };

  return (
    <Autocomplete
      sx={sx}
      size={size}
      freeSolo
      disableClearable
      options={optionSelect}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  );
}

export default AutocompleteComponent;
