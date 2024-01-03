import { Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import FeedbackListTable from "./AccountList/Data/FeedbackListTable";
function ClassFeedback() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid item xs={12} lg={10}>
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
      </Grid>
      <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
        <ButtonComponent title={"Excel Export"} />
      </Grid>

      <FeedbackListTable />
    </Grid>
  );
}

export default ClassFeedback;
