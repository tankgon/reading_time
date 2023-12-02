import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddButton from "../../../addButton";
import MenuPermissiconTable8 from "./Data/MenuPermissiconTable8";
import MenuPermissionTable from "./Data/MenuPermissionTable";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
}));

function MenuPermission() {
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
            Menu Permission Management
          </Box>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <AddButton />
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={12}>
                  <Box sx={{ p: "20px 0px" }}>
                    <MenuPermissionTable />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid xs={12}>
                  <Box
                    sx={{
                      borderLeft: "2px solid #C0C0C0",
                      p: "20px",
                    }}>
                    Role Information
                  </Box>
                  <Box
                    sx={{
                      borderLeft: "2px solid #C0C0C0",
                      p: "0 20px",
                    }}>
                    <Box sx={{ border: "2px solid #C0C0C0" }}>
                      <Grid container>
                        <Grid item xs={12} lg={3}>
                          <Grid container>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                  backgroundColor: "rgba(192, 192, 192, 0.2)",
                                  borderRight: "2px solid #C0C0C0",
                                  textAlign: "right",
                                }}>
                                Number
                              </Box>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                  borderRight: "2px solid #C0C0C0",
                                }}>
                                1
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <Grid container>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                  backgroundColor: "rgba(192, 192, 192, 0.2)",
                                  borderRight: "2px solid #C0C0C0",
                                  textAlign: "right",
                                }}>
                                Role
                              </Box>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                  borderRight: "2px solid #C0C0C0",
                                }}>
                                1
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                          <Grid container>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                  backgroundColor: "rgba(192, 192, 192, 0.2)",
                                  borderRight: "2px solid #C0C0C0",
                                  textAlign: "right",
                                }}>
                                Slug
                              </Box>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                              <Box
                                sx={{
                                  p: "12px 20px",
                                }}>
                                administration
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderLeft: "2px solid #C0C0C0",
                      p: "20px",
                    }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <Box
                          sx={{
                            p: "20px 0px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}>
                          Menu Permission
                          <Box
                            sx={{
                              backgroundColor: "#6495ED",
                              p: "12px 40px",
                              textAlign: "center",
                              color: "white",
                            }}>
                            <strong>Save</strong>
                          </Box>
                        </Box>

                        <MenuPermissiconTable8 />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default MenuPermission;
