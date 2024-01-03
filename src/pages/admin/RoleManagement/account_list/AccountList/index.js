import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/system/Box";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../../components/buttonComponent";
import AccountListTable from "./Data/AccountListTable";
//data
import roles from "../../../../../services/api/admin/roles";

function AccountList() {
  const [search, setSearch] = useState("");

  const [listMenu, setListMenu] = useState([]);

  const getList = async () => {
    try {
      const res2 = await roles.actionRoleManagement({
        Action: "SEARCH",
        _Name: search,
      });
      setListMenu(res2);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(listMenu);
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>

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
                      sx={{ mr: "8px" }}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon onClick={getList} />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </FormControl>
                  <ButtonComponent title={"Excel Export"} />
                </div>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <AccountListTable
              newRowData={search == "" ? [] : listMenu}
            />
            {/* <Box sx={{ marginTop: "20px" }}>
              <Pagination
                count={10}
                showFirstButton
                showLastButton
                sx={{ justifyContent: "center", display: "flex" }}
              />
            </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
