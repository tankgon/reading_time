import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";
import * as React from "react";
import { useLocation } from "react-router-dom";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#33CC66",
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "40px",
}));

function Path(className) {
  const location = useLocation();
  
  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Admin {">"} {location.pathname}
    </Typography>
  );
}

export default Path;
