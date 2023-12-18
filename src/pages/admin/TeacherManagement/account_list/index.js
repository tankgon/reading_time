import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import TextFilter from "./components/TextFilter/TextFilter";

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
                      text="Teacher Name"
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
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}>
                          <TextField
                            size="small"
                            sx={{ p: "6px", width: "107px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <Box sx={{ margin: "0 8px" }}>~</Box>
                          <TextField
                            size="small"
                            sx={{ p: "6px", width: "107px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                        </div>
                      }
                      text="Point"
                    />
                  </Grid>
                </Grid>
                <Grid container>
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
                      text="Recent Login"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}>
                          <TextField
                            size="small"
                            sx={{ p: "6px", width: "107px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <Box sx={{ margin: "0 8px" }}>~</Box>
                          <TextField
                            size="small"
                            sx={{ p: "6px", width: "107px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                        </div>
                      }
                      text="Penalty"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
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
