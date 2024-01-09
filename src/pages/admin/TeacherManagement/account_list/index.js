import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ExportExcelButton from "../../../components/ExportExcelButton";
import ButtonComponent from "../../../components/buttonComponent";
import data from "../account_list/Data";
import AccountListTable from "./Data/AccountListTable";
//data
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
                {/* <ButtonComponent title={"Excel Export"} /> */}
                <ExportExcelButton
                  data={listMenu}
                  filename={"teacher_redingtime"}
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
