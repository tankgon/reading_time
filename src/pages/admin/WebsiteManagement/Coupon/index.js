import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogFree_Trial from "./components/DialogFree_Trial";
function Coupon() {
  return (
    <MDBox>
      <Box
        sx={{
          flexGrow: 1,
          mb: "20px",
          p: "20px",
        }}>
        <Grid container>
          <Grid item xs={12} lg={1}>
            <DialogFree_Trial />
          </Grid>
          {/* <Grid item xs={12} lg={10}>
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
                      text="Coupon name"
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
                      text="Start Date"
                    />
                  </Grid>
                </Grid>

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
                      text="Country"
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
                      text="Expiration period"
                    />
                  </Grid>
                </Grid>

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
                      text="Currency"
                    />
                  </Grid>
                </Grid>
              </Grid> */}
          <Grid item xs={12} lg={1}>
            <ButtonComponent
              title={"Excel Export"}
              pading={"10px 0"}
              margin={"8px 12px"}
              width={"90%"}
            />
          </Grid>
        </Grid>
      </Box>
      <AccountListTable />
    </MDBox>
  );
}

export default Coupon;
