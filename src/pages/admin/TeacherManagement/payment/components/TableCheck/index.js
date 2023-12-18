import { Box, Grid } from "@mui/material";
import React from "react";

const TableCheck = ({ text, children, itemButton }) => {
  return (
    <Box
      sx={{
        border: "2px solid #C0C0C0",
        textAlign: "center",
      }}>
      <Grid container>
        <Grid item xs={5} lg={5}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            Session
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            1(06:00~06:25)
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            2(06:30~06:55)
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            3(07:00~07:25)
          </Box>
          <Box sx={{ borderRight: "1px solid #C0C0C0", p: "16px 0" }}>
            4(07:30~07:55)
          </Box>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#E7E6E6",
            }}>
            M
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box sx={{ borderRight: "1px solid #C0C0C0", p: "16px 0",background: "#C5E0B4" }}>0</Box>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#E7E6E6",
            }}>
            T
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            1
          </Box>
          <Box sx={{ borderRight: "1px solid #C0C0C0", p: "16px 0",background: "#C5E0B4" }}>1</Box>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#E7E6E6",
            }}>
            W
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            1
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            1
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box sx={{ borderRight: "1px solid #C0C0C0", p: "16px 0" ,background: "#C5E0B4"}}>0</Box>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#E7E6E6",
            }}>
            T
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#C5E0B4",
            }}>
            1
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#C5E0B4",
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#C5E0B4",
            }}>
            0
          </Box>
          <Box
            sx={{
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#C5E0B4",
            }}>
            0
          </Box>
        </Grid>
        <Grid item xs={1} lg={1}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#E7E6E6",
            }}>
            F
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",background: "#C5E0B4"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#FFC000"
            }}>
            0
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderRight: "1px solid #C0C0C0",
              p: "16px 0",
              background: "#FF0000"
            }}>
            0
          </Box>
          <Box sx={{ borderRight: "1px solid #C0C0C0", p: "16px 0",background: "#C5E0B4" }}>0</Box>
        </Grid>
        <Grid item xs={2} lg={2}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            Total
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            2
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            1
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 0",
            }}>
            1
          </Box>
          <Box sx={{ p: "16px 0" }}>1</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableCheck;
