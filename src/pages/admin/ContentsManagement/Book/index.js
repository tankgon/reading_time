import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ExportExcelButton from "../../../components/ExportExcelButton";
import data from "./Data";
import AccountListTable from "./Data/AccountListTable";
import DialogBook from "./components/DialogBook";
import ImportExcelButton from "./components/ImportExcelButton";
function Book() {
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
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={6} display={"flex"}>
                <div></div>
                <DialogBook title={"Book"} />
                {/* <ButtonComponent
                  title={"Excel Upload"}
                  pading={"10px 0"}
                  margin={"0px 12px"}
                  width={"90%"}
                /> */}
                <ImportExcelButton />

                <ExportExcelButton
                  fullWidth={"fullWidth"}
                  data={listMenu}
                  filename={"book_redingtime"}
                />
                {/* <DialogAddPoint /> */}
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Book;
