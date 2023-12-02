import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import * as React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/Image";
const Item = styled("span")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "32px",
  color: "#4471C4",
}));

function Logo(className) {
  return (
    <Grid
      container
      spacing={1}
      sx={{ textAlign: "center", p: "20px", alignItems: "center" }}>
      <Grid xs={12} lg={12}>
        <Image
          src={
            "https://reading-time.co.kr/themes/readingtime/img/header-logo.png"
          }
          alt="description_of_your_image"
          style={{
            width: "280px",
          }}
        />
        <Box style={{ textAlign: "right" }}>
          Welcome
          <Link to={"#"}>
            <Item>Admin</Item>
          </Link>
          <Button
            variant="contained"
            sx={{
              fontSize: "12px",
              textTransform: "capitalize",
              color: "white",
            }}>
            Logout
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Logo;
