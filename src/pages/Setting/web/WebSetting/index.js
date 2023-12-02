import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { Link } from "react-router-dom";
import TextBox from "../../../textBox";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black",
}));

function SellQuickly() {
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                xs={2}
                sx={{
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/webSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Web Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/mailSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Mail Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/adminSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Admin Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/smsSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>SMS Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/pgSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>PG Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={12}>
                <Box
                  sx={{
                    borderTop: "1px solid #C0C0C0",
                    borderLeft: "1px solid #C0C0C0",
                    borderRight: "1px solid #C0C0C0",
                    marginTop: "52px",
                    p: "20px",
                    backgroundColor: "rgba(192, 192, 192, 0.2)",
                  }}>
                  Website Information
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Box sx={{ mb: "40px" }}>
                    Title
                    <TextBox />
                  </Box>
                  <Box sx={{ mb: "40px" }}>
                    Tagline
                    <TextBox />
                  </Box>
                  <Grid xs={4}>
                    <p>
                      <strong>Rebuild Table</strong>
                    </p>
                    <Box
                      sx={{
                        border: "1px solid #C0C0C0",
                        p: "20px",
                        textAlign: "center",
                      }}>
                      Rebuild Table
                    </Box>
                  </Grid>
                  <p>
                    <strong style={{ color: "red" }}>
                      * Warning: Use only when you need to change the structure
                      of existing tables or to initialize data.
                    </strong>
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default SellQuickly;
