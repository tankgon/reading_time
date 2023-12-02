import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import TextFilter from "./components/TextFilter/TextFilter";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function AccountList() {
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
              p: "8px 0",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={1}>
                <strong style={{ color: "#7F7F7F" }}>Filter List</strong>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Grid container>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Status"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Student Name"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="English Wing Membership"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Country"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Mobile Phone"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Tag"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Box>
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
                      text="Registration Date"
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <div>
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
                        </div>
                      }
                      text="Recent Login"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <Button variant="contained">
                  <strong>Excel Export</strong>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
          <Box sx={{ marginTop: "20px" }}>
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              sx={{ justifyContent: "center", display: "flex" }}
            />
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
