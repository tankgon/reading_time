import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import Billing from "./AddNewAccountList/Data/Billing";
import Course from "./AddNewAccountList/Data/Course";
import PlaceholderAspectRatio from "./components/CartImage";
import OverlayCheckbox from "./components/CheckBox";
import ChoiceChipCheckbox from "./components/ChoiceChipText";
import DotText from "./components/DotText/DotText";
import TextAdditional from "./components/TextAdditional";
import TextCheckBox from "./components/TextCheckBox";
import TextareaComment from "./components/TextareaComment";
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
                <strong>Add New User</strong>
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
                    text="User Name"
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
                    text="User English Name"
                  />
                  <DotText
                    classColor={"red"}
                    itemButton={<ButtonComponent title={"Check"} />}
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
                    itemButton={<ButtonComponent title={"Reset"} />}
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
                  <Grid item xs={12} lg={8}>
                    <Box sx={{ m: "20px 0" }}>
                      <TextareaComment />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Box sx={{ m: "20px 0" }}>
                      <PlaceholderAspectRatio />
                    </Box>
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={12}>
                  <strong>Additional</strong>
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"In use"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Paused"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Withdrawn"} />
                        </Grid>
                      </Grid>
                    }
                    text="Admission"
                  />
                  <TextCheckBox
                    children={<ChoiceChipCheckbox />}
                    text="List of Tags"
                  />
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Lucete"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"Select the campus"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"ESL"} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox label={"IELTS"} />
                        </Grid>
                      </Grid>
                    }
                    text="Englishwing Member"
                  />
                  <TextAdditional
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Referral code"
                  />
                  <TextAdditional
                    children={
                      <TextField
                        size="small"
                        sx={{ p: "8px" }}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Signup path"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      mb: "20px",
                    }}>
                    <strong>Course</strong>
                  </Box>
                  <Course />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      mb: "20px",
                    }}>
                    <strong>Billing</strong>
                  </Box>
                  <Billing />
                </Grid>
              </Grid>

              <ButtonComponent
                margin={"40px 0px"}
                pading={"12px 52px"}
                title={"Create User"}
              />
              <ButtonComponent
                margin={"40px 20px"}
                pading={"12px 52px"}
                title={"Cancel"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AddNewAccount;
