import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AssignmentRegularTableList from "./AccountList/Data/AssignmentRegularTableList";
function ClassRegular() {
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
            {/* <Grid item xs={12} lg={1}>
                <strong style={{ color: "#7F7F7F" }}>Filter List</strong>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Grid container spacing={8}>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "240px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Team"
                    />
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
                      text="Date"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "6px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Teacher (English)"
                    />
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "240px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Class Status"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "6px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Student name (english)"
                    />
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "240px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Complaint"
                    />
                  </Grid>
                </Grid>
              </Grid> */}
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

export default ClassRegular;
