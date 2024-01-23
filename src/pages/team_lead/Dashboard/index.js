import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Descriptions, List } from "antd";
import { default as React, useState } from "react";
import AccountListTable from "./Data/AccountListTable";

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
      <div className="flex justify-between">
        <p>0%: 2</p>
        <p>50%: 2</p>
        <p>100%: 3</p>
      </div>
    ),
  },
];

const itemsa = [
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
  },
  {
    label: "Teacher's name",
    children: "Cloud Database",
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

  const data123 = ["nguyenphuc", "phucthanh", "nguyethanh", "123", "456"];
  const items2 = [
    {
      key: "1",
      label: "Teacher",
      children: (
        <List
          size="large"
          bordered
          dataSource={data123}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ),
    },
    {
      key: "2",
      label: "Teacher",
      children: (
        <List
          size="large"
          bordered
          dataSource={data123}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ),
    },
  ];

  const items3 = [
    {
      key: "1",
      label: "Most Technical Issues No. 3",
      children: (
        <List
          size="large"
          bordered
          dataSource={data123}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ),
    },
    {
      key: "2",
      label: "Low amount of class No. 3",
      children: (
        <List
          size="large"
          bordered
          dataSource={data123}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ),
    },
    {
      key: "3",
      label: "High Penalty No. 3",
      children: (
        <List
          size="large"
          bordered
          dataSource={data123}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ),
    },
  ];

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} spacing={4}>
          <Descriptions title="23.07.01 [Yesterday]" bordered items={items} />

          <Descriptions
            title="23.07.02 [Today]"
            bordered
            items={items}
            className="py-12"
          />
          <div className="flex justify-between">
            <Descriptions
              title="New Student"
              layout="vertical"
              bordered
              items={items2}
            />
            <Descriptions
              title="Withdrawn student"
              layout="vertical"
              bordered
              items={items2}
            />
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography variant="subtitle2">Today ISSUE</Typography>
          <AccountListTable />

          <Typography variant="subtitle2" sx={{ marginTop: "48px" }}>
            Absenteeism/ Vacation/ Resignation Application List
          </Typography>
          <AccountListTable />

          <Descriptions
            title="Unconfirmed teacher check-in"
            items={itemsa}
            className="mt-12"
          />

          <Descriptions
            title="Withdrawn student"
            layout="vertical"
            bordered
            items={items3}
            className="mt-12"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default TeamLeadDashboard;
