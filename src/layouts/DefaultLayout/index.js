import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "~/layouts/components/Header/nav";
import Logo from "../components/Logo";

function DefaultLayout() {
  return (
    <Box sx={{ fontSize: "16px", fontFamily: "Calibri" }}>
      <Logo />
      <Nav />
      <Box sx={{mb:"10%"}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default DefaultLayout;
