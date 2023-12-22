import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../../components/buttonComponent";
import AccountListTable from "./Data/AccountListTable";
import { Link } from "react-router-dom";

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
              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link to={"/role/addnewaccount"}>
                    <ButtonComponent title={"Add"} />
                  </Link>
                <div>
                  <FormControl size="small" variant="outlined">
                    <OutlinedInput
                    sx={{mr: "8px"}}
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
                  <ButtonComponent title={"Excel Export"} />
                </div>
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
