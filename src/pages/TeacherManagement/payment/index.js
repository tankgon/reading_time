import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import TableCheck from "./components/TableCheck";
import TextFilter from "./components/TextFilter";

function Payment() {
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
              <Grid item xs={12} lg={2}>
                <strong style={{ color: "#7F7F7F" }}>
                  <TextFilter
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Sort"
                  />
                </strong>
              </Grid>
              <Grid item xs={12} lg={2}>
                <strong style={{ color: "#7F7F7F" }}>
                  <TextFilter
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Teacher"
                  />
                </strong>
              </Grid>
              <Grid item xs={12} lg={2}>
                <strong style={{ color: "#7F7F7F" }}>
                  <TextFilter
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Class"
                  />
                </strong>
              </Grid>
              <Grid item xs={12} lg={4}>
                <strong style={{ color: "#7F7F7F" }}>
                  <TextFilter
                    children={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            sx={{ p: "8px", width: "220px" }}
                            renderInput={(params) => <TextField {...params} />}
                            format="DD/MM/YYYY"
                            fullWidth
                          />
                        </LocalizationProvider>
                        ~
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            sx={{ p: "8px", width: "220px" }}
                            renderInput={(params) => <TextField {...params} />}
                            format="DD/MM/YYYY"
                            fullWidth
                          />
                        </LocalizationProvider>
                      </Box>
                    }
                    text="Date"
                  />
                </strong>
              </Grid>

              <Grid item xs={12} lg={2} style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={20} sx={{ p: "20px 0" }}>
            <Grid item xs={12} lg={6}>
              <TableCheck />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TableCheck />
            </Grid>
          </Grid>
          <AccountListTable />

          <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} lg={4} sx={{ alignSelf: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ mr: "8px", textTransform: "capitalize" }}>
                <strong>List</strong>
              </Button>
              <Button
                variant="contained"
                sx={{ mr: "8px", textTransform: "capitalize" }}>
                <strong>Print</strong>
              </Button>
              <Button
                variant="contained"
                sx={{ mr: "8px", textTransform: "capitalize" }}>
                <strong>Confirm</strong>
              </Button>
              <Button
                variant="contained"
                sx={{ mr: "8px", textTransform: "capitalize" }}>
                <strong>View</strong>
              </Button>
              <Button
                variant="contained"
                sx={{ mr: "8px", textTransform: "capitalize" }}>
                <strong>Excel Export</strong>
              </Button>
            </Grid>
            <Grid item xs={12} lg={2} sx={{ textAlign: "center" }}>
              <div style={{ textDecoration: "underline" }}>
                2022.11.01~2022.11.30
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "20px",
                }}>
                <Box>Class Fee</Box>
                <Box>₱3000</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "20px",
                }}>
                <Box>Incentive</Box>
                <Box>₱30</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "20px",
                }}>
                <Box>
                  {" "}
                  <strong>Total Payment</strong>
                </Box>
                <Box sx={{ color: "red" }}>
                  <strong>₱3030</strong>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Payment;
