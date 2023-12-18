import { Autocomplete, Grid, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import NoticeListTable from "./AccountList/Data/NoticeListTable";

function FAQ() {
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
              spacing={8}
              container
              sx={{
                justifyContent: "space-between",
                display: "flex",
              }}>
              <Grid item xs={12} lg={6}>
                <Box>
                  <Link to={"/website/board/FAQ/title"}>
                    <Button
                      sx={{ textTransform: "capitalize", m: "8px -" }}
                      variant="contained">
                      <strong>Write</strong>
                    </Button>
                  </Link>

                  <Button
                    sx={{ textTransform: "capitalize", m: "8px" }}
                    variant="contained">
                    <strong>Add Category</strong>
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container sx={{ display: "flex" }} spacing={4}>
                  <Grid item xs={12} lg={3}>
                    <Autocomplete
                      size="small"
                      sx={{ width: "100%", p: "8px" }}
                      id="controllable-states-demo"
                      options={["options", "afasdf"]}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Autocomplete
                      size="small"
                      sx={{ width: "100%", p: "8px" }}
                      id="controllable-states-demo"
                      options={["options", "afasdf"]}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box
                      component="form"
                      sx={{
                        border: "1px solid #C0C0C0",
                        width: "100%",
                      }}
                      noValidate
                      autoComplete="off">
                      <TextField
                        sx={{ p: "10px" }}
                        id="standard-basic"
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={2}>
                    <Box
                      sx={{
                        border: "1px solid #C0C0C0",
                        p: "16px 24px",
                        textAlign: "center",
                        cursor: "auto",
                      }}>
                      Search
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} lg={12}>
                <NoticeListTable />
                <Autocomplete
                  size="small"
                  sx={{ width: "160px", marginLeft: "auto" }} // Add marginLeft: "auto" to move it to the right
                  id="controllable-states-demo"
                  options={["options", "afasdf"]}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default FAQ;
