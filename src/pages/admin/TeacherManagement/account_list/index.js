import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./Data/AccountListTable";
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
                <Grid container spacing={1} alignItems={"center"}>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextField
                          fullWidth
                          size="small"
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
                          fullWidth
                          size="small"
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
                          fullWidth
                          size="small"
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Tag"
                    />
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                              label="From date"
                              // defaultValue={tuNgay}
                              // onChange={(day) => setTuNgay(day)}
                              format="DD-MM-YYYY"
                            />
                            <DatePicker
                              label="To date"
                              // defaultValue={denNgay}
                              // onChange={(day) => setDenNgay(day)}
                              format="DD-MM-YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
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
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <Box sx={{ margin: "0 8px" }}>~</Box>
                          <TextField
                            size="small"
                            id="outlined-basic"
                            variant="outlined"
                          />
                        </div>
                      }
                      text="Point"
                    />
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                              label="From date"
                              // defaultValue={tuNgay}
                              // onChange={(day) => setTuNgay(day)}
                              format="DD-MM-YYYY"
                            />
                            <DatePicker
                              label="To date"
                              // defaultValue={denNgay}
                              // onChange={(day) => setDenNgay(day)}
                              format="DD-MM-YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
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
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <Box sx={{ margin: "0 8px" }}>~</Box>
                          <TextField
                            size="small"
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
