import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Descriptions } from "antd";
import { default as React, useState } from "react";
import AccountListTable from "./Data/AccountListTable";
import ListTableFull from "./Data/ListTableFull";

const items = [
  {
    label: "Student #",
    children: "100",
  },
  {
    label: "Class #",
    children: "100",
  },
  {
    label: "Time",
    children: "10",
  },
  {
    label: "Withdrawal",
    children: "20",
  },
  {
    label: "Complaint #",
    span: { xl: 2, xxl: 2 },
    children: "5",
  },
  {
    label: "Substitute",
    span: { xl: 2, xxl: 2 },
    children: "5",
  },
  {
    label: "Postpone",
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        0%: 2
        <br />
        50%: 2
        <br />
        100%: 3
      </>
    ),
  },
];

function TeamLeadDashboard() {
  const [imageSrc, setImageSrc] = useState();
  const [imageURL, setImageURL] = useState();

  const list = [
    { title: "Internet connection status:" },
    { title: "Zoom connection status:" },
  ];
  const list2 = [
    { title: "Did the student enter class on time?:" },
    { title: "Did the student pay attention during class?:" },
    { title: "Was the student＇s class attitude good?:" },
  ];
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Descriptions
            title="23.07.01 [Yesterday]"
            bordered
            column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            items={items}
          />

          <Descriptions
            title="23.07.02 [Today]"
            bordered
            column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            items={items}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography variant="subtitle2"  sx={{margin:"12px 0"}}>
            Today ISSUE
          </Typography>
          <AccountListTable />
          <Typography variant="subtitle2"  sx={{margin:"12px 0"}}>
            Absenteeism/ Vacation/ Resignation Application List
          </Typography>
          <AccountListTable />
        </Grid>

      </Grid>
    </>
  );
}

export default TeamLeadDashboard;
