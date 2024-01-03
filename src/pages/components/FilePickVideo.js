import AttachFileIcon from "@mui/icons-material/AttachFile";
import { MuiFileInput } from "mui-file-input";
import React from "react";

const FilePickVideo = ({ inputProps, onChange, value }) => {
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

export default FilePickVideo;
