import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const dashboard = [
  {
    title: "Monthly Dashboard",
    url: "/assignment/dashboard/monthlydashboard",
  },
  {
    title: "Today Dashboard",
    url: "/assignment/dashboard/todaydashboard",
  },
];

const assignment = [
  {
    title: "Regular",
    url: "/assignment/assignment/assignmentregular",
  },
  {
    title: "Free-Trial",
    url: "/assignment/assignment/assignmentfreetrial",
  },
];

const board = [
  {
    title: "Notice",
    url: "/website/board/notice",
  },
  {
    title: "FAQ",
    url: "/website/board/FAQ",
  },
  {
    title: "Support",
    url: "/website/board/support",
  },
];

function NavChildren() {
  const [pathNameState, setPathNameState] = useState();
  const location = useLocation();
  var result = location.pathname.split("/")[2];

  useEffect(() => {
    switch (result) {
      case "dashboard":
        setPathNameState(dashboard);
        break;
      case "assignment":
        setPathNameState(assignment);
        break;
      case "board":
        setPathNameState(board);
        break;
      default:
        setPathNameState();
    }
  }, [location]);

  return (
    <Grid xs={12}>
      <ButtonGroup variant="text">
        {pathNameState
          ? pathNameState.map((item, index) => {
              return (
                <Link to={item.url} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      fontSize: "12px",
                      textTransform: "capitalize",
                      color: "white",
                    }}>
                    {item.title}
                  </Button>
                </Link>
              );
            })
          : null}
      </ButtonGroup>
    </Grid>
  );
}

export default NavChildren;
