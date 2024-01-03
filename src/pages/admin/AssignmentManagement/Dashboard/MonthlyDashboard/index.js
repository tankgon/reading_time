import { Box, Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DateCalendarViews from "./components/DateCalendarView";
import MonthlyDashboard from "./AccountList/Data/AccountListTable";
function PointPenalty() {
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{ justifyContent: "center", alignItems: "center" }}>
          <DateCalendarViews />
          <Box
            sx={{
              width: "100%",
              background: "white",
              height: "500px",
              position: "relative",
              zIndex: "1",
            }}>
            <MonthlyDashboard />
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PointPenalty;
