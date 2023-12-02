import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ImagePicker } from "react-file-picker";
import logo from "../../../components/Image/login-content.jpg";
import DotText from "./DotText/DotText";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              p: "20px",
              mb: "20px",
            }}>
            Menu Permission Management
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={4} sx={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="description_of_your_image"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                }}
              />

              <Box sx={{ p: "20px 0", width: "100%" }}>
                <ImagePicker
                  extensions={["jpg", "jpeg", "png"]}
                  dims={{
                    minWidth: 100,
                    maxWidth: 500,
                    minHeight: 100,
                    maxHeight: 500,
                  }}
                  onChange={(base64) => setSelectedFile(base64)}
                  onError={(errMsg) => errMsg}>
                  <Button
                    component="label"
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                    startIcon={<CloudUploadIcon />}>
                    Select file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </ImagePicker>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <strong>GENERAL</strong>

              <DotText
                children={
                  <TextField
                    size="small"
                    sx={{ p: "8px" }}
                    id="outlined-basic"
                    variant="outlined"
                  />
                }
                text="Menu"
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
                text="Nickname"
              />
              <DotText
                itemButton={
                  <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}>
                    <strong>Check</strong>
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
                text="E-mail"
              />
              <DotText
                itemButton={
                  <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}>
                    <strong>Reset</strong>
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
                    sx={{ p: "8px", width: "220px" }}
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
                      sx={{ p: "8px", width: "220px" }}
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
                    sx={{ p: "8px", width: "220px" }}
                    options={options}
                    renderInput={(params) => <TextField {...params} />}
                  />
                }
                text="Select a country"
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
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ textTransform: "capitalize" }}>
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
                      sx={{ p: "8px", width: "220px" }}
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
                      sx={{ p: "8px", width: "220px" }}
                      renderInput={(params) => <TextField {...params} />}
                      format="DD/MM/YYYY"
                      fullWidth
                    />
                  </LocalizationProvider>
                }
                text="Resignation Date"
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
                    sx={{ p: "8px", width: "220px" }}
                    options={options}
                    renderInput={(params) => <TextField {...params} />}
                  />
                }
                text="Authority Type"
              />
              <Button
                sx={{
                  p: "16px 52px",
                  m: "40px 0",
                  textTransform: "capitalize",
                }}
                variant="contained">
                <strong>Approve</strong>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AddNewAccount;
