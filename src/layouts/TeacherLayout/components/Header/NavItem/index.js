import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const dashboard = [];

const assignment = [];

const classmanagement = [
  {
    title: "Regular Class",
    url: "classmanagement/classregular",
  },
  {
    title: "Free-Trial Class",
    url: "/classmanagement/classfreetrial",
  },
];

const classfeedbackteacher = [];

const mypage = [
  {
    title: "My Info",
    url: "mypage/myinfo",
  },
  {
    title: "Vacation and Resignation Management",
    url: "mypage/vacationandresignation",
  },
  {
    title: "Point, Penalty Management",
    url: "mypage/pointpenalty",
  },
  {
    title: "Status",
    url: "/mypage/status",
  },
  {
    title: "Payment",
    url: "/mypage/payment",
  },
];

function Nav() {
  const [pathNameState, setPathNameState] = useState(dashboard);
  const location = useLocation();
  var result = location.pathname.split("/")[1];

  useEffect(() => {
    if (result == "dashboard") setPathNameState(dashboard);
    if (result == "assignment") setPathNameState(assignment);
    if (result == "classmanagement") setPathNameState(classmanagement);
    if (result == "classfeedbackteacher")
      setPathNameState(classfeedbackteacher);
    if (result == "mypage") setPathNameState(mypage);
  }, [location]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ad9fcd",
        borderTop: `1px solid #f4a5c7`,
        padding: "12px 0",
        alignItems: "center",
      }}>
      <Grid xs={12}>
        <ButtonGroup variant="text">
          {pathNameState.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.url}
                style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    background:
                      location.pathname.split("/")[2] == item.url.split("/")[2]
                        ? "#f4a5c7"
                        : "transparent",
                    color: "white",
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
