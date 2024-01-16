import { Box, Grid, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

function BoardTeacher({ title, sx, size, onChange }) {
  return (
    <Box
      sx={{
        border: "1px solid #C0C0C0",
      }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ p: "16px 20px", textAlign: "center" }}>
        {title}
      </Typography>
      <Grid container>
        <Grid item xs={6} lg={3}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Book Name
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Pages
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Genre
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Grade Level
          </Box>
          <Box
            sx={{
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Summary
          </Box>
        </Grid>

        <Grid item xs={6} lg={3}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            123
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
          <Box
            sx={{
              p: "16px 20px",
            }}>
            023
          </Box>
        </Grid>

        <Grid item xs={6} lg={3}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Book Level
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Objective
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Of Words
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
              background: "#C5E0B4",
            }}>
            Lexile Level
          </Box>
        </Grid>

        <Grid item xs={6} lg={3}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            123
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              p: "16px 20px",
            }}>
            023
          </Box>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" gutterBottom sx={{ p: "16px 20px" }}>
        {title}
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={2}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderTop: "1px solid #C0C0C0",
              p: "0px 20px",
            }}>
            <FormControlLabel control={<Checkbox />} label="Listening" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderTop: "1px solid #C0C0C0",
              p: "0px 20px",
            }}>
            <FormControlLabel control={<Checkbox />} label="Reading" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderTop: "1px solid #C0C0C0",
              p: "0px 20px",
            }}>
            <FormControlLabel control={<Checkbox />} label="Recording" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderTop: "1px solid #C0C0C0",
              p: "0px 20px",
            }}>
            <FormControlLabel control={<Checkbox />} label="Quiz" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              borderBottom: "1px solid #C0C0C0",
              borderTop: "1px solid #C0C0C0",
              p: "9px 20px",
            }}>
            Quiz Result [ 5/9 ]
          </Box>
        </Grid>
      </Grid>

      <Typography variant="subtitle2" gutterBottom sx={{ p: "16px 20px" }}>
        {title}
      </Typography>

      <Box sx={{ border: "1px solid #C0C0C0" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              background: "#F2F2F2",
              p: "20px",
              textAlign: "center",
              borderBottom: "1px solid #C0C0C0",
            }}>
            Mispro No .unced Words
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              p: "20px",
              borderBottom: "1px solid #C0C0C0",
            }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth size="small" />
          </Grid>

          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              background: "#F2F2F2",
              p: "20px",
              textAlign: "center",
              borderBottom: "1px solid #C0C0C0",
            }}>
            Reading Aloud
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              p: "20px",
              borderBottom: "1px solid #C0C0C0",
            }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth size="small" />
          </Grid>

          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              background: "#F2F2F2",
              p: "20px",
              textAlign: "center",
              borderBottom: "1px solid #C0C0C0",
            }}>
            Comprehension
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              p: "20px",
              borderBottom: "1px solid #C0C0C0",
            }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth size="small" />
          </Grid>

          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              background: "#F2F2F2",
              p: "20px",
              textAlign: "center",
            }}>
            Overall Score
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              p: "20px",
            }}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default BoardTeacher;
