import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import ButtonComponent from "../../../../components/buttonComponent";

function TodayDashboardCS() {
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
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={1}>
                <strong style={{ color: "#7F7F7F" }}>TODAY (22.07.01)</strong>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default TodayDashboardCS;
