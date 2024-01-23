import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "./components/Header/nav";
import Logo from "./components/Logo";

function AdminLayout() {
  return (
    <Box sx={{ fontSize: "16px", fontFamily: "Calibri" }}>
      <div className="hidden lg:block">
        <Logo />
      </div>

      <Nav />
      <Box sx={{ mb: "10%", p: "0px 20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;
