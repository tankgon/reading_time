import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              p: "20px",
              mb: "20px",
            }}>
            Holiday Management
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                backgroundColor: "#6495ED",
                p: "16px 40px",
                textAlign: "center",
                color: "white",
              }}>
              <strong>ADD</strong>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                component="form"
                sx={{
                  border: "1px solid #C0C0C0",
                  p: "8px",
                  mr: "4px",
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </Box>
              <Box
                sx={{
                  border: "1px solid #C0C0C0",
                  p: "16px 24px",
                  textAlign: "center",
                  cursor: "auto",
                }}>
                Search
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              m: "2rem 0",
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
