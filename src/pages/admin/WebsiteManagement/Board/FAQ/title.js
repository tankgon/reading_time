import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function TitleFAQ() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <MDBox>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Box sx={{ fontSize: "20px", p: "16px" }}>
            <strong>Notice</strong>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9}>
          <TextField
            size="small"
            defaultValue={"Title"}
            sx={{ m: "16px", width: "97% " }}
            id="outlined-basic"
            variant="outlined"
          />

          <Box
            sx={{
              m: "16px",
              p: "9px",
              width: "auto",
              flexGrow: 1,
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              display: "inline-flex", // Change this line to inline-flex
              alignItems: "center",
            }}>
            https://reading-time.co.kr/
            <TextField
              sx={{ background: "white" }}
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                border: "1px solid #C0C0C0",
                m: "16px",
              }}>
              <Box sx={{ height: "500px" }}>
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  style={{ lineHeight: "2" }} // Đổi giá trị này theo ý muốn của cậu
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} lg={3}>
          <Box border={"2px solid #C0C0C0"} sx={{ p: "12px" }}>
            <Box sx={{ m: "20px 0" }}>
              Image Attachment
              <Autocomplete
                size="small"
                sx={{ p: "8px" }}
                id="controllable-states-demo"
                options={["options", "afasdf"]}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box sx={{ m: "20px 0" }}>
              Image Attachment
              <Autocomplete
                size="small"
                sx={{ p: "8px" }}
                id="controllable-states-demo"
                options={["options", "afasdf"]}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box sx={{ m: "20px 0" }}>
              Time
              <TextField
                fullWidth
                size="small"
                sx={{ p: "8px", width: "96%" }}
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box
            sx={{
              borderRight: "2px solid #C0C0C0",
              borderLeft: "2px solid #C0C0C0",
              borderBottom: "2px solid #C0C0C0",
              background: "#EDEDED",
              p: "12px",
            }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "capitalize",
                color: "White",
              }}>
              Save
            </Button>
          </Box>

          <Box
            sx={{
              mt: "60px",
              borderRight: "2px solid #C0C0C0",
              borderLeft: "2px solid #C0C0C0",
              borderTop: "2px solid #C0C0C0",
              background: "#EDEDED",
              p: "12px",
            }}>
            Category
          </Box>
          <Box border={"2px solid #C0C0C0"} sx={{ p: "12px" }}>
            <FormControl
              required
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="gilad" />}
                  label="Site Usage"
                />
                <FormControlLabel
                  control={<Checkbox name="jason" />}
                  label="Purchase"
                />
                <FormControlLabel
                  control={<Checkbox name="antoine" />}
                  label="Classes and Attendance"
                />
                <FormControlLabel
                  control={<Checkbox name="antoine" />}
                  label="Payment and Refund"
                />
                <FormControlLabel
                  control={<Checkbox name="antoine" />}
                  label="Others"
                />
                <FormControlLabel
                  control={<Checkbox name="antoine" />}
                  label="Raz-Kids"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default TitleFAQ;
