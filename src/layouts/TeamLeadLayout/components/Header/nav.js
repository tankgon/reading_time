import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonComponent from "../../../../pages/components/buttonComponent";
import NavItem from "./NavItem";

import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#50456a",
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
  borderRadius: "8px 8px 0 0", // Thêm dòng này để bo góc bên trên
}));

function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  var result = pathName.split("/")[1];

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type == "keydown" &&
      (event.key == "Tab" || event.key == "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const mobile = (anchor) => (
    <Box
      sx={{ width: anchor == "top" || anchor == "bottom" ? "auto" : 250 }}
      role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Logo />
            <Divider />
          </ListSubheader>
        }></List>
    </Box>
  );

  return (
    <nav class=" border-gray-200 bg-[#50456a] lg:bg-white p-4 lg:p-0 mb-4 lg:mb:0">
      <div class="flex flex-wrap items-center justify-between mx-auto lg:justify-end">
        <div class="lg:hidden block">
          <button
            onClick={toggleDrawer("left", true)}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="#f4a5c7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}>
            {mobile("left")}
          </SwipeableDrawer>
        </div>
        <Grid item xs={12} lg={12}>
          <Box
            style={{ textAlign: "right" }}
            display={"flex"}
            sx={{
              alignItems: "center",
              marginLeft: "auto",
            }}>
            <span className="text-white lg:text-black"> Welcome </span>

            <Link
              style={{
                margin: "0 8px",
                color: "blue",
                textDecoration: "underline",
              }}
              to="#">
              Team Leader Thanh
            </Link>

            <Link to={"/"}>
              <ButtonComponent title={"Logout"} />
            </Link>
          </Box>
        </Grid>

        <div class="hidden lg:block w-full" style={{ margin: "2rem 0" }}>
          <div class="w-full font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:mt-0 lg:border-0 lg:bg-white dark:border-gray-700">
            <Grid container spacing={1} sx={{ color: "white" }}>
              <Grid xs={2}>
                <Link
                  to={"dashboardTeamLead"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "dashboardTeamLead"
                          ? `8px solid #f4a5c7`
                          : null,
                    }}>
                    Dashboard
                  </Item>
                </Link>
              </Grid>
              <Grid xs={2}>
                <Link
                  to={"assignmentTeamLead/monthly"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "assignmentTeamLead"
                          ? `8px solid #f4a5c7`
                          : null,
                    }}>
                    Assignment Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={2}>
                <Link
                  to={"classmanagementTeamLead/classregular"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "classmanagementTeamLead"
                          ? `8px solid #f4a5c7`
                          : null,
                    }}>
                    Class Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={2}>
                <Link
                  to={"teachermanagement/account"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "teachermanagement"
                          ? `8px solid #f4a5c7`
                          : null,
                    }}>
                    Teacher management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={2}>
                <Link
                  to={"classfeedbackteamlead"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "classfeedbackteamlead"
                          ? `8px solid #f4a5c7`
                          : null,
                    }}>
                    Class Feedback
                  </Item>
                </Link>
              </Grid>
              <Grid xs={2}>
                <Link to={"mypage"} style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result == "mypage" ? `8px solid #f4a5c7` : null,
                    }}>
                    Mypage
                  </Item>
                </Link>
              </Grid>
            </Grid>
          </div>

          <NavItem />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
