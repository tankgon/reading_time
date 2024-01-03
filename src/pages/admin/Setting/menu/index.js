import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import MenuPermissiconTable8 from "./Data/MenuPermissiconTable8";
import MenuPermissionTable from "./Data/MenuPermissionTable";
import AddRoleDialog from "./components/AddRoleDialog";

function MenuPermission() {
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box sx={{ flexGrow: 1 }}>
              <AddRoleDialog />
              <Box sx={{ p: "20px 0px" }}>
                <MenuPermissionTable />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid xs={12}>
                  <Box>Role Information</Box>
                  <div className="border-[#C0C0C0]">
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
                  </div>
                  <Box>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <Box
                          sx={{
                            alignItems: "center",
                            p: "20px 0px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}>
                          Menu Permission
                          <ButtonComponent title={"Save"} />
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
