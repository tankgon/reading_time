import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BannerTableList from "./AccountList/Data/BannerTableList";
import DialogAddPoint from "./components/DialogAddPoint";
import ButtonComponent from "../../../components/buttonComponent";
function Banner() {
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
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={3}>
                <DialogAddPoint />
              </Grid>

              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <BannerTableList />

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

export default Banner;
