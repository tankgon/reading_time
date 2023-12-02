import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#6FAC46",
  fontWeight: 600,
  cursor: "pointer",
  color: "white",
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function Nav(className) {
  const location = useLocation();
  const pathName = location.pathname;
  var result = pathName.split("/")[1];

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{ color: "white" }}>
          <Grid xs={1}>
            <Link to={"/setting/webSetting"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result === "setting" ? `8px solid #0077cc` : null,
                }}>
                Setting
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/role/accountlist"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result === "role" ? `8px solid #0077cc` : null,
                }}>
                Role Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/user/accountlist"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result === "user" ? `8px solid #0077cc` : null,
                }}>
                User Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link
              to={"/teacher/accountlist"}
              style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result === "teacher" ? `8px solid #0077cc` : null,
                }}>
                Teacher Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link
              to={"/contents/book"}
              style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result === "contents" ? `8px solid #0077cc` : null,
                }}>
                Contents Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Item>Product Management</Item>
          </Grid>
          <Grid xs={1}>
            <Item>Payment Management</Item>
          </Grid>
          <Grid xs={2}>
            <Item>Assignment Management</Item>
          </Grid>
          <Grid xs={1}>
            <Item>Class Management</Item>
          </Grid>
          <Grid xs={1}>
            <Item>Website Management</Item>
          </Grid>
          <Grid xs={1}>
            <Item>Reports</Item>
          </Grid>
        </Grid>
      </Box>
      <NavItem />
    </div>
  );
}

export default Nav;
