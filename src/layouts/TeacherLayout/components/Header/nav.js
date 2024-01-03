import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import NavChildren from "./NavChildren";
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
  height: "60px",
  paddingBottom: "8px",
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
                    result == "setting" ? `8px solid #0077cc` : null,
                }}>
                Setting
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/role/accountlist"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result == "role" ? `8px solid #0077cc` : null,
                }}>
                Role Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/user/accountlist"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result == "user" ? `8px solid #0077cc` : null,
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
                    result == "teacher" ? `8px solid #0077cc` : null,
                }}>
                Teacher Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/contents/book"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result == "contents" ? `8px solid #0077cc` : null,
                }}>
                Contents Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/product/regular"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result == "product" ? `8px solid #0077cc` : null,
                }}>
                Product Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link
              to={"/payment/paymentmanagement"}
              style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result == "payment" ? `8px solid #0077cc` : null,
                }}>
                Payment Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={2}>
            <Link
              to={"/assignment/dashboard/monthlydashboard"}
              style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result == "assignment" ? `8px solid #0077cc` : null,
                }}>
                Assignment Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/class/classregular"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result == "class" ? `8px solid #0077cc` : null,
                }}>
                Class Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/website/coupon"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom:
                    result == "website" ? `8px solid #0077cc` : null,
                }}>
                Website Management
              </Item>
            </Link>
          </Grid>
          <Grid xs={1}>
            <Link to={"/report/usereport"} style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  borderBottom: result == "report" ? `8px solid #0077cc` : null,
                }}>
                Reports
              </Item>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <NavItem children={<NavChildren />} />
    </div>
  );
}

export default Nav;
