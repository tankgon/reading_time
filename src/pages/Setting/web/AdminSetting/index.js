import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import SelectsBox from "../../../selectsBox";
import TextBox from "../../../textBox";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  cursor: "pointer",
  color: "black",
}));

function AdminSetting() {
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
                  borderBottom: "1px solid #C0C0C0",
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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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
                  Mail Setting
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={12}>
                      <strong>Main Menu</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Main Menu(PC)
                      <SelectsBox />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Main Menu (Mobile)
                      <SelectsBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>Product</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Main Page Product
                      <SelectsBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>ZOOM</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      ZOOM API KEY
                      <TextBox />* Note: The Zoom API KEY can be obtained by
                      registering JWT on the Zoom developer page.
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      ZOOM API SECRET
                      <TextBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>Stripe Payment Settings</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Publishable key
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Secret Key
                      <TextBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>WEBHOOK URL</strong>
                      <TextBox />* Note: The above URL must be set in the Stripe
                      webhook for it to function correctly. The webhooks that
                      need to be registered are: charge.failed,
                      charge.succeeded, charge.refunded
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>Payple</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Account
                      <TextBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      Client ID
                      <TextBox />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>Free-Trial</strong>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      Free-Trial Product
                      <TextBox />
                      Note: *If not selected, a free trial voucher will not be
                      issued upon promotion application.
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      <strong>Teacher Point</strong>
                    </Grid>

                    <Grid item xs={12} lg={12}>
                      Maximum Points/Month
                      <TextBox />
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

export default AdminSetting;
