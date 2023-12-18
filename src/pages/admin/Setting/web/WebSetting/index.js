import { Button, Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { Link } from "react-router-dom";
import ButtonContainer from "../../../../components/buttonComponent";
import TextBox from "../../../../components/textBox";
//data
import { useState } from "react";
import data from "./data";

import web from "../../../../../services/api/admin/settings/web";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black",
}));

function SellQuickly() {
  const { DatalistWebSetting: listWebSetting } = data();

  const [title, setTitle] = useState(listWebSetting.Title);
  const [tagline, setTagline] = useState(listWebSetting.Tagline);

  const Update = async () => {
    //set thay doi
    try {
      await web.actionWebSetting({
        Action: "PUT",
        Id: 1,
        Title: title,
        Tagline: tagline,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const Delete = async () => {
    try {
      await web.actionWebSetting({
        Action: "DELETE",
        Id: 1,
      });
      setTitle("");
      setTagline("");
    } catch (err) {
      console.log(err);
    }
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
                    <TextBox
                      value={title == undefined ? listWebSetting.Title : title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Box>
                  <Box sx={{ mb: "40px" }}>
                    Tagline
                    <TextBox
                      value={
                        tagline == undefined ? listWebSetting.Tagline : tagline
                      }
                      onChange={(e) => setTagline(e.target.value)}
                    />
                  </Box>
                  <Grid xs={4}>
                    <p>
                      <strong>Rebuild Table</strong>
                    </p>

                    <Button
                      variant="outlined"
                      color="error"
                      onClick={Delete}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                      }}>
                      Rebuild Table
                    </Button>
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
          <Box sx={{ m: "20px 0" }}>
            <ButtonContainer
              title={"Save"}
              pading={"8px 40px"}
              onClick={Update}
            />
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default SellQuickly;
