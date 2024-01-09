import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
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
                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="DD-MM-YYYY" />
                            <DatePicker format="DD-MM-YYYY" />
                          </LocalizationProvider>
                        </Box>
                      }
                      text="Start Date"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="On Class"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Country"
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Payment Method"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Currency"
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      // children={<TextBox />}
                      text="Student Name(email)"
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
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
