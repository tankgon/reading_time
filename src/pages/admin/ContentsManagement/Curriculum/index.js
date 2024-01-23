import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./Data/AccountListTable";
import DialogCurri from "./components/DialogCurriculum";

//data
import ExportExcelButton from "../../../components/ExportExcelButton";
import data from "./Data";
import ImportExcelButton from "./components/ImportExcelButton";
function Curriculum() {
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
                <DialogCurri title={"Curriculum"} />
                {/* <ButtonComponent
                  fullWidth={"fullWidth"}
                  title={"Excel Upload"}
                  margin={"0px 12px"}
                  pading={"10px 0"}
                /> */}

                <ImportExcelButton />

                <ExportExcelButton
                  fullWidth={"fullWidth"}
                  data={listMenu}
                  filename={"curriculum_redingtime"}
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

export default Curriculum;
