import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NoticeListTable from "./AccountList/Data/NoticeListTable";

function Support() {
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
                <Box sx={{ fontSize: "32px" }}>
                  <strong>Support</strong>
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
              </Grid>
              <Grid item sx={12} lg={12}>
                <Grid container>
                  <Grid item sx={12} lg={6}>
                    <Box sx={{ fontSize: "20px", m: "20px 0" }}>
                      <strong>Details</strong>
                    </Box>

                    <Box sx={{ border: "2px solid #C0C0C0" }}>
                      <Grid container>
                        <Grid item xs={12} lg={12}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              sx={{
                                background: "#F2F2F2",
                                p: "20px",
                                textAlign: "center",
                                borderRight: "2px solid #C0C0C0",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              Name
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={8}
                              sx={{
                                p: "20px",
                                borderBottom: "2px solid #C0C0C0",
                              }}></Grid>
                          </Grid>

                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              sx={{
                                background: "#F2F2F2",
                                p: "20px",
                                textAlign: "center",
                                borderRight: "2px solid #C0C0C0",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              Email
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={8}
                              sx={{
                                p: "20px",
                                borderBottom: "2px solid #C0C0C0",
                              }}></Grid>
                          </Grid>

                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              sx={{
                                background: "#F2F2F2",
                                p: "20px",
                                textAlign: "center",
                                borderRight: "2px solid #C0C0C0",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              Category
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={8}
                              sx={{
                                p: "20px",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              {/* <TextField fullWidth size="small" /> */}
                            </Grid>
                          </Grid>

                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              sx={{
                                background: "#F2F2F2",
                                p: "20px",
                                textAlign: "center",
                                borderRight: "2px solid #C0C0C0",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              Title
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={8}
                              sx={{
                                borderBottom: "2px solid #C0C0C0",
                                p: "20px",
                              }}>
                              {/* <TextField fullWidth size="small" /> */}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Box sx={{ p: "20px" }}>
                          I want to quit the program and get a refund.
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={12} lg={12}>
                <Grid container>
                  <Grid item sx={12} lg={6}>
                    <Box sx={{ fontSize: "20px", m: "20px 0" }}>
                      <strong>Reply</strong>
                    </Box>

                    <Box sx={{ border: "2px solid #C0C0C0" }}>
                      <Grid container>
                        <Grid item xs={12} lg={12}>
                          <Grid container>
                            <Grid
                              item
                              xs={12}
                              lg={4}
                              sx={{
                                background: "#F2F2F2",
                                p: "20px",
                                textAlign: "center",
                                borderRight: "2px solid #C0C0C0",
                                borderBottom: "2px solid #C0C0C0",
                              }}>
                              Title
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              lg={8}
                              sx={{
                                p: "20px",
                                borderBottom: "2px solid #C0C0C0",
                              }}></Grid>
                          </Grid>
                        </Grid>
                        <Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Box
                              sx={{
                                border: "1px solid #C0C0C0",
                                m: "16px",
                              }}>
                              <Box sx={{ height: "500px" }}>
                                <Editor
                                  wrapperClassName="demo-wrapper"
                                  editorClassName="demo-editor"
                                  style={{ lineHeight: "2" }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Box>

                    <Box sx={{ textAlign: "center", m: "20px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          color: "White",
                          m: "20px",
                        }}>
                        Save
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          color: "White",
                          m: "20px",
                        }}>
                        Cancel
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Support;
