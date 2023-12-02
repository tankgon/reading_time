import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FeedbackListTable from "./AccountList/Data/FeedbackListTable";
import DialogFeedback from "./components/DialogFeedback";
import TextForm from "./components/TextForm";

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
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <TextForm
                      children={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              sx={{ p: "8px", width: "220px" }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                              format="DD/MM/YYYY"
                              fullWidth
                            />
                          </LocalizationProvider>
                          ~
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              sx={{ p: "8px", width: "220px" }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                              format="DD/MM/YYYY"
                              fullWidth
                            />
                          </LocalizationProvider>
                        </Box>
                      }
                      text="Date"
                    />
                    {/* <Button
                      sx={{ textTransform: "capitalize" }}
                      variant="contained">
                      <strong>Add Filter</strong>
                      
                    </Button> */}
                    <DialogFeedback />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={1} style={{ textAlign: "right" }}>
                <Button variant="contained">
                  <strong>Excel Export</strong>
                </Button>
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
