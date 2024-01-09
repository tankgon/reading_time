import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import HolidayTable from "./Data/HolidayTable";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
}));

function HolidayManagment() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <ButtonComponent title={"Add"} />
          <Box
            sx={{
              flexGrow: 1,
              m: "1rem 0",
              height: "30rem",
            }}>
            <HolidayTable />

            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={12}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    sx={{
                      justifyContent: "flex-end",
                    }}>
                    <Grid xs={2}>
                      <FormControl fullWidth>
                        <Select
                          sx={{ mt: "40px" }}
                          labelId="demo-simple-select-label"
                          id="demo-select-small"
                          defaultValue={-1}
                          onChange={handleChange}>
                          <MenuItem value={-1}>Country</MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default HolidayManagment;
