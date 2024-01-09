import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import DateCalendarViews from "./components/DateCalendarView";
import DialogAddPoint from "./components/DialogAddPoint";
import Spreadheet from "./components/Spreadsheet";
import TextFilter from "../../../components/TextFilter";
import TextBox from "../../../components/TextBox";

function PointPenalty() {
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
                <DialogAddPoint />
              </Grid>
              <Grid item xs={12} lg={7}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <TextFilter
                      children={
                          <TextBox
                            size="small"
                            sx={{ p: "8px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                      }
                      text="Start Date"
                    />
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
                    <ButtonComponent title={"Add Filter"} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>

          <DateCalendarViews />

          <Spreadheet />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PointPenalty;
