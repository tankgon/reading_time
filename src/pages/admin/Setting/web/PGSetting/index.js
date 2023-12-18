import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import SelectsBox from "../../../../components/selectsBox";
import TextBox from "../../../../components/textBox";

//data
import data from "./data";
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function PGSetting() {
  const { DatalistPGSetting: listPGSetting } = data();

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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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

      {listPGSetting ? (
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
                    PG Settings
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #C0C0C0",
                      p: "20px",
                    }}>
                    <Grid item xs={12} lg={12}>
                      Merchant Identification Code
                      <TextBox value={listPGSetting.Merchant_Indentification_Code} />
                    </Grid>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <strong>API KEY</strong>
                        <TextBox value={listPGSetting.API_Key} />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>API SECRET</strong>
                        <TextBox value={listPGSetting.API_Secret} />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Regular Payment Merchant ID
                        <TextBox value={listPGSetting.Regular_Payment_Merchant_Id} />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        PG Provider
                        <TextBox value={listPGSetting.PG_Provider} />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Webhook URL
                        <TextBox value={listPGSetting.Webhook_Url} />
                        Note: *Please reflect the above address in the Iamport
                        webhook URL.
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      ) : null}
    </MDBox>
  );
}

export default PGSetting;
