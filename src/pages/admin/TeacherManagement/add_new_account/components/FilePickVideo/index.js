import { MuiFileInput } from "mui-file-input";
import React from "react";

const FilePickVideo = () => {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return <MuiFileInput value={file} onChange={handleChange} />;
};

export default FilePickVideo;
