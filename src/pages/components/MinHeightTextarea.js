import Textarea from "@mui/joy/Textarea";
import * as React from "react";

export default function MinHeightTextarea({
  placeholder,
  minRows,
  onChange,
  value,
}) {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      minLength={100}
      aria-label="minimum height"
      minRows={minRows}
      placeholder={placeholder}
      style={{ width: "100%" }}
    />
  );
}
