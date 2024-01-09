import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogCurri from "./components/DialogCurriculum";
function Book() {
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
                <DialogCurri />
                <ButtonComponent
                  title={"Excel Upload"}
                  pading={"10px 0"}
                  margin={"8px 12px"}
                  width={"90%"}
                />
                <ButtonComponent
                  title={"Excel Export"}
                  pading={"10px 0"}
                  margin={"8px 12px"}
                  width={"90%"}
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
