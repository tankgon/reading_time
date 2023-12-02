import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const setting = [
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
];

const role = [
  {
    title: "Account List",
    url: "/role/accountlist",
  },
  {
    title: "Add New Account",
    url: "/role/addnewaccount",
  },
];

const user = [
  {
    title: "Account List",
    url: "/user/accountlist",
  },
  {
    title: "Add New Account",
    url: "/user/addnewaccount",
  },
];

const teacher = [
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
];

const contents = [
  {
    title: "Book",
    url: "/contents/book",
  },
  {
    title: "Curriculum",
    url: "/contents/curriculum",
  },
];

function Nav(className) {
  const [pathNameState, setPathNameState] = useState(setting);
  const location = useLocation();
  var result = location.pathname.split("/")[1];

  useEffect(() => {
    if (result == "setting") setPathNameState(setting);
    if (result == "role") setPathNameState(role);
    if (result == "user") setPathNameState(user);
    if (result == "teacher") setPathNameState(teacher);
    if (result == "contents") setPathNameState(contents);
  }, [location]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(51, 204, 102, 0.2)",
        borderTop: `1px solid #0077cc`,
        padding: "12px 0",
      }}>
      <Grid xs={12}>
        <ButtonGroup variant="text">
          {pathNameState.map((item, index) => {
            return (
              <Link to={item.url} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    color: "black",
                  }}>
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </ButtonGroup>
      </Grid>
    </Box>
  );
}

export default Nav;
