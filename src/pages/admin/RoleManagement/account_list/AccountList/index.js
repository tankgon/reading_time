import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import ExportExcelButton from "../../../../components/ExportExcelButton";
import ButtonComponent from "../../../../components/buttonComponent";
import AccountListTable from "./Data/AccountListTable";
//data
import data from "../../account_list/AccountList/Data/index";
function AccountList() {
  const { DatalistRole: listRole } = data();
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={"/role/addnewaccount"}>
                  <ButtonComponent title={"Add"} />
                </Link>
                <ExportExcelButton
                  data={listRole}
                  filename={"role_redingtime"}
                />
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <AccountListTable />
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
