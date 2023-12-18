import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import UserReportComplainttsStatus from "./AccountList/Data/UserReportComplainttsStatus";
import UserReportSignupPathStatus from "./AccountList/Data/UserReportSignupPathStatus";
import UserReportsTableList from "./AccountList/Data/UserReportsTableList";
import TextFilter from "./components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
function UserReport() {
  return (
    <MDBox>
      <Grid
        container
        sx={{
          alignItems: "center",
        }}>
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
          // text="Expiration period"
        />

        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mt: "20px",
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={3}>
                {/* <DialogAddPoint /> */}
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="contained">
                  <strong>Students Status</strong>
                </Button>
              </Grid>

              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <UserReportsTableList />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              flexGrow: 1,
              mt: "20px",
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={3}>
                {/* <DialogAddPoint /> */}
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="contained">
                  <strong>Complaintts Status</strong>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <UserReportComplainttsStatus />
        </Grid>

        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mt: "20px",
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={3}>
                {/* <DialogAddPoint /> */}
                <Button
                  sx={{ textTransform: "capitalize" }}
                  variant="contained">
                  <strong>Signup path Status</strong>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <UserReportSignupPathStatus />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default UserReport;
