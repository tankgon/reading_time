import Button from "@mui/material/Button";
import React from "react";

const ButtonDialog = ({ text, color, border, background }) => {
  console.log(color);
  return (
    <Button
      sx={{
        width: "100%",
        textTransform: "capitalize",
        m: "0 0 4px 0",
        color: color,
        border: border,
        background: background
      }}>
      {text}
    </Button>
  );
};

export default ButtonDialog;
