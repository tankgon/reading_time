import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import SelectBox from "../../../../components/selectsBox";

//data
import data from "./data";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function TermsUse() {
  const { DatalistTerms: listTerms } = data();

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
              borderRadius: "8px",
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
                  // borderRadius: "8px 8px 0 0",
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                }}>
                <Link to={"/setting/terms"} style={{ textDecoration: "none" }}>
                  <Item>Terms of Use</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/privacyPolicy"}
                  style={{ textDecoration: "none" }}>
                  <Item>Privacy Policy</Item>
                </Link>
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
                }}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {listTerms ? (
        <>
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
                    <SelectBox />
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
                      borderRadius: "8px 0 0 8px",
                      borderTop: "1px solid #C0C0C0",
                      borderLeft: "1px solid #C0C0C0",
                      borderBottom: "1px solid #C0C0C0",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                    }}>
                    <Box
                      sx={{
                        borderBottom: "1px solid #C0C0C0",
                        p: "20px",
                        textAlign: "center",
                      }}>
                      {listTerms.Title}
                    </Box>
                    <Box sx={{ p: "20px", textAlign: "center" }}>
                      {listTerms.Text_Field}
                    </Box>
                  </Grid>

                  <Grid xs={10}>
                    <Box
                      sx={{
                        borderRadius: "0 8px 0 0",
                        borderTop: "1px solid #C0C0C0",
                        borderLeft: "1px solid #C0C0C0",
                        borderRight: "1px solid #C0C0C0",
                        p: "32px",
                      }}
                    />
                    <Box
                      sx={{
                        borderRadius: "0 0 8px 0",
                        border: "1px solid #C0C0C0",
                        p: "20px",
                      }}>
                      <Box sx={{ height: "500px" }}>
                        <Editor
                          wrapperClassName="demo-wrapper"
                          editorClassName="demo-editor"
                          style={{ lineHeight: "2" }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : null}
    </MDBox>
  );
}

export default TermsUse;
