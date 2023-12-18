import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FeedbackListTable from "./AccountList/Data/FeedbackListTable";
import TextFilter from "./components/TextFilter/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
function ClassFeedback() {
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
              <Grid item xs={12} lg={3}>
                <strong style={{ color: "#7F7F7F", padding: "0 40px" }}>
                  Filter List
                </strong>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextFilter
                  children={
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          format="DD-MM-YYYY"
                          sx={{ p: "8px", width: "240px" }}
                        />
                        <DatePicker
                          format="DD-MM-YYYY"
                          sx={{ p: "8px", width: "240px" }}
                        />
                      </LocalizationProvider>
                    </Box>
                  }
                  text="Start Date"
                />
              </Grid>
              <Grid item xs={12} lg={1} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>

          <FeedbackListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default ClassFeedback;
