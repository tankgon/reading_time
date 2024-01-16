import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AssignmentRegularTableList from "./Data/AssignmentRegularTableList";
function ClassRegularTeacher() {
  return (
    <MDBox>
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
              <ButtonComponent title={"Excel Export"} />
            </Grid>
          </Grid>
        </Box>
        <AssignmentRegularTableList />
      </Grid>
    </MDBox>
  );
}

export default ClassRegularTeacher;
