import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import React from "react";
import AccountListTable from "./Data/AccountListTable";
//data
import ExportExcelButton from "../../../components/ExportExcelButton";
import data from "./Data";

function AccountList() {
  const { DatalistMenu: listMenu } = data();

  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mb: "20px",
              p: "8px 0",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={12} style={{ textAlign: "right" }}>
                <ExportExcelButton
                  data={listMenu}
                  filename={"user_redingtime"}
                />
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
