import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Descriptions, List } from "antd";
import { default as React } from "react";
import AccountListTable from "./Data/AccountListTable";
import VacationTable from "./Data/VacationTable";
import WithdrawnTable from "./Data/WithdrawnTable";

function CustomerSeviceDashboard() {
  const data123 = ["nguyenphuc", "phucthanh", "nguyethanh", "123", "456"];

  const items1 = [
    {
      key: "1",
      label: "Student’s Name",
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
      label: "Top 3 Low Class Counts",
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
      label: "Top 3 High Penalty Teachers",
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
      label: "Top 3 Tech Issue Teachers",
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
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <Typography variant="subtitle2">Today ISSUE</Typography>
        <AccountListTable />
        {/* 
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
        /> */}
      </Grid>

      <Grid item xs={12} lg={7}>
        <Typography variant="subtitle2">
          Vacation and Resignation List
        </Typography>
        <VacationTable />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Typography variant="subtitle2">New/Withdrawn Student</Typography>
        <WithdrawnTable />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Descriptions
          title="No Clock-in List"
          layout="vertical"
          bordered
          items={items1}
          className="mt-12"
        />
      </Grid>

      <Grid item xs={12} lg={7}>
        <Descriptions
          title="Withdrawn student"
          layout="vertical"
          bordered
          items={items3}
          className="mt-12"
        />
      </Grid>
    </Grid>
  );
}

export default CustomerSeviceDashboard;
