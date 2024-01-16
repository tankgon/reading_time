import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import React from "react";

function ButtonComponent({
  title,
  pading,
  margin,
  marginLeft,
  marginRight,
  icon,
  fileUpload,
  onClick,
  width,
  fullWidth,
  type,
}) {
  const CustomButton = styled(Button)`
    &:hover {
      background-color: #eb5f9b;
    }
  `;

  return (
    <CustomButton
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      component="label"
      variant="contained"
      startIcon={icon}
      sx={{
        background: "#f4a5c7",
        textTransform: "capitalize",
        p: pading,
        ml: marginLeft,
        mr: marginRight,
        m: margin,
        width: width,
      }}>
      <strong>{title}</strong>
      {fileUpload}
    </CustomButton>
  );
}

export default ButtonComponent;
