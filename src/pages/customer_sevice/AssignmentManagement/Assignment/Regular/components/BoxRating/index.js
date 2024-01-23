import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import React from "react";
const BoxRating = ({ text, color, border, background }) => {
  console.log(color);
  return (
    <Grid item xs={6} lg={6}>
      <Box sx={{ border: "2px solid blue", p: "8px", m: "8px 0" }}>
        <Grid container spacing={4}>
          <Grid item xs={4} lg={4}>
            {/* <Image
              src={logo}
              alt="description_of_your_image"
              style={{
                width: "120px",
              }}
            /> */}
            <Box sx={{ fontSize: "16px", p: "0 8px" }}>Instructor's name</Box>
          </Grid>

          <Grid item xs={4} lg={8}>
            <Box
              sx={{
                width: "60px",
                fontSize: "16px",
                m: "0 40px",
                borderBottom: "1px solid black",
              }}>
              Instructor introduction
            </Box>

            <Rating
              sx={{ m: "20px" }}
              name="size-large"
              defaultValue={2}
              size="large"
            />
          </Grid>

          <Grid
            item
            xs={12}
            lg={12}
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}>
            <Box
              sx={{
                p: "8px",
                fontWeight: "600",
                fontSize: "20px",
              }}>
              Best
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                p: "0 40px",
              }}>
              Select
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default BoxRating;
