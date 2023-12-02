import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function PrivacyPolicy() {
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
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              p: "20px",
              mb: "20px",
            }}>
            Terms Management
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
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link to={"/setting/terms"} style={{ textDecoration: "none" }}>
                  <Item>Terms of Use</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                }}>
                <Item>Privacy Policy</Item>
              </Grid>
              <Grid
                xs={3}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/paymentRefund"}
                  style={{ textDecoration: "none" }}>
                  <Item>Payment and Refund Policy</Item>
                </Link>
              </Grid>
              <Grid
                xs={3}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/promotionTerms"}
                  style={{ textDecoration: "none" }}>
                  <Item>Promotion Terms and Conditions</Item>
                </Link>
              </Grid>

              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                {/* <Item>PG Setting</Item> */}
              </Grid>
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

      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ marginTop: "52px" }}>
              <Grid
                xs={2}
                sx={{
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderBottom: "1px solid #C0C0C0",
                  backgroundColor: "rgba(192, 192, 192, 0.2)",
                }}>
                <Box
                  sx={{
                    borderBottom: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  Website Information
                </Box>
                <Box sx={{ p: "20px", textAlign: "center" }}>Text Field</Box>
              </Grid>

              <Grid xs={10}>
                <Box
                  sx={{
                    borderTop: "1px solid #C0C0C0",
                    borderLeft: "1px solid #C0C0C0",
                    borderRight: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  Website Information
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Box sx={{ height: "500px" }}>
                    <Editor
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      style={{ lineHeight: "2" }} // Đổi giá trị này theo ý muốn của cậu
                    />
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

export default PrivacyPolicy;
