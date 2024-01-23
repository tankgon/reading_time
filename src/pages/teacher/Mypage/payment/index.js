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
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";

function PaymentTeacher() {
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
              <Grid item xs={12} lg={8} display={"flex"} justifyContent={"space-between"}>
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
              <Grid item xs={12} lg={6}>
                <strong style={{ color: "#7F7F7F" }}>
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
                </strong>
              </Grid>


              <ButtonComponent title={"Search"}/>
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
            <ButtonComponent title={"List"} marginRight={"8px"}/>
            <ButtonComponent title={"Print"} marginRight={"8px"}/>
            <ButtonComponent title={"Confirm"} marginRight={"8px"}/>
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

export default PaymentTeacher;
