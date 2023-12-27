import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../AdminLayout/components/Logo";
import Nav from "./components/Header/nav";

function TeacherLayout() {
  return (
    <Box sx={{ fontSize: "16px", fontFamily: "Calibri" }}>
      <Logo />
      <Nav />
      <Box sx={{ mb: "10%", p: "0px 20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default TeacherLayout;
