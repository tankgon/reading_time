import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogBook from "./components/DialogCurriculum";
import TextForm from "./components/TextForm";
function Book() {
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
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={2}>
                <DialogBook />

                <Button
                  sx={{
                    textTransform: "capitalize",
                    p: "10px 0",
                    m: "8px 12px",
                    width: "90%",
                  }}
                  variant="contained">
                  <strong>Excel Upload</strong>
                </Button>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    p: "10px 0",
                    m: "8px 12px",
                    width: "90%",
                  }}
                  variant="contained">
                  <strong>Excel Export</strong>
                </Button>

                {/* <DialogAddPoint /> */}
              </Grid>
              <Grid item xs={12} lg={10}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <Grid container>
                      <Grid item xs={12} lg={2}></Grid>
                      <Grid item xs={12} lg={4}>
                        <TextForm
                          children={
                            <TextField
                              fullWidth
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Curriculum Title"
                        />
                        <TextForm
                          children={
                            <TextField
                              fullWidth
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Subtitle"
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextForm
                          children={
                            <Autocomplete
                              size="small"
                              sx={{ p: "8px", width: "100%" }}
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Division"
                        />
                        <TextForm
                          children={
                            <Autocomplete
                              size="small"
                              sx={{ p: "8px", width: "100%" }}
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Use"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Book;
