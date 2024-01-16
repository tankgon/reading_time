import { Grid } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../components/buttonComponent";
import FeedbackListTable from "./Data/FeedbackListTable";
function ClassFeedbackTeacher() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid
        item
        xs={12}
        lg={12}
        style={{ textAlign: "right" }}
        sx={{ margin: " 20px 0" }}>
        <ButtonComponent title={"Excel Export"} />
      </Grid>

      <FeedbackListTable />
    </Grid>
  );
}

export default ClassFeedbackTeacher;
