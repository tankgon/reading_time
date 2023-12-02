import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddButton from "../../../addButton";
import AccountListTable from "./Data/AccountListTable";

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
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              p: "20px",
              mb: "20px",
            }}>
            Menu Permission Management
          </Box>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12} lg={1}>
                  <AddButton />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sx={{ display: "flex", justifyContent: "end" }}>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#6495ED",
                      p: "12px",
                      m: "0 12px",
                      color: "white",
                    }}>
                    <strong>Excel Export</strong>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
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
      </Grid>
    </MDBox>
  );
}

export default AccountList;
