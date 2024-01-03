import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import teachers from "../../../../services/api/admin/teachers";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";

function AccountList() {
  const [search, setSearch] = useState("");

  const [listMenu, setListMenu] = useState([]);

  const getList = async () => {
    try {
      const res2 = await teachers.actionWorkingHours({
        Action: "SEARCH",
        Teacher: search,
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
                  <Grid item xs={12} lg={5}>
                    <TextFilter
                      children={
                        <TextField
                          fullWidth
                          size="small"
                          id="outlined-basic"
                          variant="outlined"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      }
                      text="Teacher name (Nickname)"
                    />
                  </Grid>
                </Grid>
                <ButtonComponent onClick={getList} title={"Add Filter"} />
              </Grid>
            </Grid>
          </Box>

          <AccountListTable newRowData={search == "" ? [] : listMenu} />

          {/* <Box sx={{ margin: "40px 0" }}>
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              sx={{ justifyContent: "center", display: "flex" }}
            />
          </Box> */}
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
