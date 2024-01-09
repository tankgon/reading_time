import AttachFileIcon from "@mui/icons-material/AttachFile";
import { MuiFileInput } from "mui-file-input";
import React from "react";

const FilePick = ({ inputProps, onChange, value }) => {
  return (
    <MuiFileInput
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        inputProps: inputProps,
        startAdornment: <AttachFileIcon />,
      }}
    />
  );
};

export default FilePick;
