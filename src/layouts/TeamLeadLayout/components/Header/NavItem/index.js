import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const dashboard = [];

const assignment = [
  {
    title: "Monthly Dashboard",
    url: "assignmentTeamLead/monthly",
  },
  {
    title: "Today Dashboard",
    url: "assignmentTeamLead/today",
  },
];

const classmanagement = [
  {
    title: "Regular Class",
    url: "classmanagement/classregular",
  },
  {
    title: "Free-Trial Class",
    url: "classmanagement/classfreetrial",
  },
];

const classfeedbackteacher = [];

const mypage = [];

const teachermanagement = [
  {
    title: "Accounts",
    url: "teachermanagement/account",
  },
  {
    title: "Vacation and Resignation Management",
    url: "teachermanagement/vacationandresignation",
  },
  {
    title: "Point, Penalty Management",
    url: "teachermanagement/pointpenalty",
  },
  {
    title: "Working Hour",
    url: "teachermanagement/workinghours",
  },
];

function Nav() {
  const [pathNameState, setPathNameState] = useState(dashboard);
  const location = useLocation();
  var result = location.pathname.split("/")[1];

  useEffect(() => {
    if (result == "dashboardTeamLead") setPathNameState(dashboard);
    if (result == "assignmentTeamLead") setPathNameState(assignment);
    if (result == "classmanagementTeamLead") setPathNameState(classmanagement);
    if (result == "teachermanagement") setPathNameState(teachermanagement);
    if (result == "classfeedbackteamlead")
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
