import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ClassFreeTrialTableList from "./AccountList/Data/ClassFreeTrialTableList";
import TextFilter from "./components/TextFilter/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";

function ClassFreeTr() {
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
                <Grid container spacing={8}>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "100%" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Product name"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            sx={{ alignItems: "center" }}
                            components={["DatePicker", "DatePicker"]}>
                            <DatePicker format="DD-MM-YYYY" />~
                            <DatePicker format="DD-MM-YYYY" />
                          </DemoContainer>
                        </LocalizationProvider>
                      }
                      text="Class end date"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <TextField
                          fullWidth
                          size="small"
                          sx={{ p: "6px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Mobile Phone"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "100%" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Class end date"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={8}>
                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <TextField
                          fullWidth
                          size="small"
                          sx={{ p: "6px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      }
                      text="Student name (english)"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextFilter
                      children={
                        <Autocomplete
                          size="small"
                          sx={{ p: "8px", width: "100%" }}
                          id="controllable-states-demo"
                          options={["options", "afasdf"]}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      }
                      text="Teacher(e-mail)"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <ClassFreeTrialTableList />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default ClassFreeTr;
