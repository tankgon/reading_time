import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import CheckBox from "../../../checkBox";
import TextBox from "../../../textBox";
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black"
}));

function MailSetting() {
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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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
                  Mail Setting
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                      Email Sending Address
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      Email Receiving Address
                      <TextBox />
                    </Grid>

                    <Grid item xs={12} lg={7}>
                      SMTP Host
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      SMTP Port
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      SMTP Security
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      SMTP Authentication Required
                      <CheckBox />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      SMTP User ID
                      <TextBox />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      SMTP User Password
                      <TextBox />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

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
                  Email Template
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Box sx={{ height: "300px" }}>
                    <Editor
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      style={{ height: "500px" }}
                    />
                  </Box>
                  Upload Email Template
                  <Box
                    component="section"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      border: "1px dashed grey",
                      mt: "20px",
                      width: "50px",
                      height: "50px", // Tùy chỉnh chiều cao nếu cần thiết
                    }}>
                    <InsertDriveFileIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default MailSetting;
