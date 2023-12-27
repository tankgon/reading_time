import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonComponent from "../../../../pages/components/buttonComponent";
import NavChildren from "./NavChildren";
import NavItem from "./NavItem";

import DraftsIcon from "@mui/icons-material/Drafts";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";

import ListNav from "../ListNav";

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
}));

const listRouter = [
  {
    title: "Settings",
    url: "/setting/webSetting",
    list: [
      {
        title: "Web setting Management",
        url: "/setting/webSetting",
      },
      {
        title: "Terms Management",
        url: "/setting/terms",
      },
      {
        title: "Holiday Management",
        url: "/setting/holiday",
      },
      {
        title: "Menu Permission Management",
        url: "/setting/menu",
      },
    ],
  },
  {
    title: "Role Management",
    url: "/role/accountlist",
    list: [
      {
        title: "Account List",
        url: "/role/accountlist",
      },
      {
        title: "Add New Account",
        url: "/role/addnewaccount",
      },
    ],
  },
  {
    title: "User Management",
    url: "/user/accountlist",
    list: [
      {
        title: "Account List",
        url: "/user/accountlist",
      },
      {
        title: "Add New Account",
        url: "/user/addnewaccount",
      },
    ],
  },
  {
    title: "Teacher Management",
    url: "/teacher/accountlist",
    list: [
      {
        title: "Account List",
        url: "/teacher/accountlist",
      },
      {
        title: "Add New Account",
        url: "/teacher/addnewaccount",
      },
      {
        title: "Working Hours",
        url: "/teacher/workinghours",
      },
      {
        title: "Vacation and Resignation Management",
        url: "/teacher/vacationandresignation",
      },
      {
        title: "Point, Penalty Management",
        url: "/teacher/pointpenalty",
      },
      {
        title: "Class Feedback",
        url: "/teacher/classfeedback",
      },
      {
        title: "Payment",
        url: "/teacher/payment",
      },
    ],
  },
  {
    title: "Contents Management",
    url: "/contents/book",
    list: [
      {
        title: "Book",
        url: "/contents/book",
      },
      {
        title: "Curriculum",
        url: "/contents/curriculum",
      },
    ],
  },
  {
    title: "Product Management",
    url: "/product/regular",
    list: [
      {
        title: "Regular",
        url: "/product/regular",
      },
      {
        title: "Free-Trial",
        url: "/product/freetrial",
      },
    ],
  },
  {
    title: "Payment Management",
    url: "/payment/paymentmanagement",
    list: [
      {
        title: "Payment Management",
        url: "/payment/paymentmanagement",
      },
    ],
  },
  {
    title: "Assignment Management",
    url: "/assignment/dashboard/monthlydashboard",
    list: [
      {
        title: "Dashboard",
        url: "/assignment/dashboard/monthlydashboard",
      },
      {
        title: "Assignment",
        url: "/assignment/assignment/assignmentregular",
      },
    ],
  },
  {
    title: "Class Management",
    url: "/class/classregular",
    list: [
      {
        title: "Regular Class",
        url: "/class/classregular",
      },
      {
        title: "Free-Trial Class",
        url: "/class/classfreetrial",
      },
    ],
  },
  {
    title: "Website Management",
    url: "/website/coupon",
    list: [
      {
        title: "Coupon",
        url: "/website/coupon",
      },
      {
        title: "Banner",
        url: "/website/banner",
      },
      {
        title: "Board",
        url: "/website/board/notice",
      },
    ],
  },
  {
    title: "Reports",
    url: "/report/usereport",
    list: [
      {
        title: "User",
        url: "/report/usereport",
      },
      {
        title: "Teacher  ",
        url: "/report/teacherreport",
      },
    ],
  },
];

function Nav() {
  const location = useLocation();
  const pathName = location.pathname;
  var result = pathName.split("/")[1];

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const mobile = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
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
        }>
        {listRouter.map((item, index) => (
          <ListNav
            key={index}
            title={item.title}
            icon={<DraftsIcon />}
            list={item.list}
            url={item.url}
          />
        ))}
      </List>
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
              Admin
            </Link>
            <ButtonComponent title={"Logout"} />
          </Box>
        </Grid>

        <div class="hidden lg:block w-full" style={{ margin: "2rem 0" }}>
          <div class="w-full font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:mt-0 lg:border-0 lg:bg-white dark:border-gray-700">
            <Grid container spacing={1} sx={{ color: "white" }}>
              <Grid xs={1}>
                <Link
                  to={"/setting/webSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "setting" ? `8px solid #f4a5c7` : null,
                    }}>
                    Setting
                  </Item>
                </Link>
              </Grid>
              <Grid xs={1}>
                <Link
                  to={"/role/accountlist"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "role" ? `8px solid #f4a5c7` : null,
                    }}>
                    Role Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={1}>
                <Link
                  to={"/user/accountlist"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "user" ? `8px solid #f4a5c7` : null,
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
                        result === "teacher" ? `8px solid #f4a5c7` : null,
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
                        result === "contents" ? `8px solid #f4a5c7` : null,
                    }}>
                    Contents Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={1}>
                <Link
                  to={"/product/regular"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "product" ? `8px solid #f4a5c7` : null,
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
                        result === "payment" ? `8px solid #f4a5c7` : null,
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
                        result === "assignment" ? `8px solid #f4a5c7` : null,
                    }}>
                    Assignment Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={1}>
                <Link
                  to={"/class/classregular"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "class" ? `8px solid #f4a5c7` : null,
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
                        result === "website" ? `8px solid #f4a5c7` : null,
                    }}>
                    Website Management
                  </Item>
                </Link>
              </Grid>
              <Grid xs={1}>
                <Link
                  to={"/report/usereport"}
                  style={{ textDecoration: "none" }}>
                  <Item
                    sx={{
                      borderBottom:
                        result === "report" ? `8px solid #f4a5c7` : null,
                    }}>
                    Reports
                  </Item>
                </Link>
              </Grid>
            </Grid>
          </div>

          <NavItem children={<NavChildren />} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
