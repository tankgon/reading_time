import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import OverlayCheckbox from "./components/CheckBox";
import Character from "./components/ComboCheck/Character";
import LessonStyle from "./components/ComboCheck/LessonStyle ";
import DotText from "./components/DotText/DotText";
import TextCheckBox from "./components/TextCheckBox";
import TextareaComment from "../../../components/TextareaComment";
import ButtonComponent from "../../../components/buttonComponent";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const options = ["Option 1", "Option 2"];

function AddNewAccount() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (file) => {
    // Xử lý khi tệp được chọn
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  p: "20px",
                  mb: "20px",
                  color: "#7F7F7F",
                }}>
                <strong>Add New Teacher</strong>
              </Box>
            </Grid>

            <Grid item xs={12} lg={9}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={8}>
                  <strong>GENERAL</strong>
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Teacher Name"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Nickname"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="E-mail Address(Log-in)"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Password"
                  />
                  <DotText
                    children={
                      <Autocomplete
                        size="small"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        sx={{ p: "8px", width: "240px" }}
                        options={options}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Gender"
                  />
                  <DotText
                    children={
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{ p: "8px", width: "240px" }}
                          renderInput={(params) => <TextField {...params} />}
                          format="DD/MM/YYYY"
                          fullWidth
                        />
                      </LocalizationProvider>
                    }
                    text="Date of Birth"
                  />
                  <DotText
                    children={
                      <Autocomplete
                        size="small"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        sx={{ p: "8px", width: "240px" }}
                        options={options}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Select a country"
                  />
                  <DotText
                    children={
                      <Autocomplete
                        size="small"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        sx={{ p: "8px", width: "240px" }}
                        options={options}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Timezone"
                  />
                  <DotText
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Contract Type"
                  />
                  <DotText
                    itemButton={
                      <Button variant="contained" color="success">
                        <strong>File</strong>
                      </Button>
                    }
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Contract"
                  />
                  <DotText
                    children={
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{ p: "8px", width: "240px" }}
                          renderInput={(params) => <TextField {...params} />}
                          format="DD/MM/YYYY"
                          fullWidth
                        />
                      </LocalizationProvider>
                    }
                    text="Start Date"
                  />
                  <DotText
                    children={
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{ p: "8px", width: "240px" }}
                          renderInput={(params) => <TextField {...params} />}
                          format="DD/MM/YYYY"
                          fullWidth
                        />
                      </LocalizationProvider>
                    }
                    text="Resignation Day"
                  />

                  <DotText
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Contract Type"
                  />
                  <Grid item xs={12} lg={8}>
                    <Box sx={{ m: "20px 0" }}>
                      <TextareaComment />
                    </Box>
                  </Grid>
                  <DotText
                    itemButton={
                      <Button variant="contained" color="success">
                        <strong>File</strong>
                      </Button>
                    }
                    children={
                      <Box sx={{ display: "flex" }}>
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </Box>
                    }
                    text="Certificate"
                  />

                  <DotText
                    itemButton={
                      <Button variant="contained" color="success">
                        <strong>File</strong>
                      </Button>
                    }
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Resume"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <strong>Profile</strong>
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Employed"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Resigned"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Leave of Absence"} />
                        </Grid>
                      </Grid>
                    }
                    text="Status"
                  />
                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Best"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Good"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"New"} />
                        </Grid>
                      </Grid>
                    }
                    text="Level"
                  />
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Best teacher"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Popular teacher"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Best responsible teacher"} />
                        </Grid>
                      </Grid>
                    }
                    text="Special feature"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Box sx={{ m: "20px 0" }}>
                        <TextareaComment />
                      </Box>
                    }
                    text="Self introduction"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Lower elementary school"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Higher elementary school"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Middle school and above"} />
                        </Grid>
                      </Grid>
                    }
                    text="Recommended student"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Beginner(aa) "} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Basic(A~J)"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Intermediate(K ~P)"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Advanced(Beyond Q)"} />
                        </Grid>
                      </Grid>
                    }
                    text="Recommended level"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={<Character />}
                    text="Character"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={<LessonStyle />}
                    text="Lesson Style"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12} lg={4}>
                  <ButtonComponent title={"Create Teacher"} marginRight={"8px"}/>
                  <ButtonComponent title={"Save"} marginRight={"8px"}/>
                  <ButtonComponent title={"Cancel"} marginRight={"8px"}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AddNewAccount;
