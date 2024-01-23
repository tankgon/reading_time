import { Box, Grid, Radio, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

import { Badge, Descriptions } from "antd";
import * as React from "react";

const items = [
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
    span: 2,
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
    span: 2,
  },
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
    span: 2,
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
    span: 2,
  },
  {
    key: "6",
    label: "Status",
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
];
const items1 = [
  {
    label: "Status",
    children: (
      <Badge
        children={
          <>
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
          </>
        }
      />
    ),
    span: 3,
  },
  {
    label: "Status",
    children: (
      <Badge
        children={
          <>
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
          </>
        }
      />
    ),
    span: 3,
  },
  {
    label: "Status",
    children: (
      <Badge
        children={
          <>
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
          </>
        }
      />
    ),
    span: 3,
  },
  {
    label: "Status",
    children: (
      <Badge
        children={
          <>
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
          </>
        }
      />
    ),
    span: 3,
  },
];

function BoardTeacher({ title, sx, size, onChange }) {
  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ p: "16px 20px", textAlign: "center" }}>
        {title}
      </Typography>
      <Descriptions bordered items={items} />

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
      <Descriptions bordered items={items1} />
    </Box>
  );
}

export default BoardTeacher;
