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
      {/* <Grid item xs={12} lg={10}>
        <TextFilter
          children={
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="From date"
                  // defaultValue={tuNgay}
                  // onChange={(day) => setRecentFrom(day)}
                  format="DD-MM-YYYY"
                />
                <DatePicker
                  label="To date"
                  // defaultValue={denNgay}
                  // onChange={(day) => setRecentTo(day)}
                  format="DD-MM-YYYY"
                />
                <ButtonComponent title={"Add Filter"} />
              </DemoContainer>
            </LocalizationProvider>
          }
          text="Start Date"
        />
      </Grid> */}
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
