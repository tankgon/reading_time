import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { ImagePicker } from "react-file-picker";
import logo from "../../../../../../components/Image/login-banner.jpg";
import TextFilter from "../TextFilter";
import TextareaComment from "../TextareaComment";
import ButtonComponent from "../../../../../components/buttonComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogRegular() {
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = ["Search teacher name", "Option 2"];

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (file) => {
    // Xử lý khi tệp được chọn
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  return (
    <React.Fragment>
      <ButtonComponent
        title={"Product"}
        pading={"10px 0"}
        margin={"8px 12px"}
        width={"90%"}
      />

      <Dialog fullWidth maxWidth={"xl"} open={open} onClose={handleClose}>
        <DialogTitle>Product Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{ m: "12px 0" }}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={3} sx={{ textAlign: "center" }}>
                  <img
                    src={logo}
                    alt="description_of_your_image"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ width: "100%" }}>
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
                        fullWidth
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
                <Grid item xs={12} lg={9}>
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Product Name"
                  />

                  <TextFilter
                    children={
                      <TextareaAutosize
                        maxRows="8"
                        minRows="8"
                        style={{ width: "100%" }}
                      />
                    }
                    text="Description"
                  />

                  <TextFilter
                    children={
                      <Autocomplete
                        size="small"
                        id="controllable-states-demo"
                        options={["options", "afasdf"]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Curriculum"
                  />

                  <TextFilter
                    children={
                      <Autocomplete
                        size="small"
                        id="controllable-states-demo"
                        options={["options", "afasdf"]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Country of sale"
                  />

                  <TextFilter
                    children={
                      <Autocomplete
                        size="small"
                        id="controllable-states-demo"
                        options={["options", "afasdf"]}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    }
                    text="Currency"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <Box
                        sx={{
                          border: "2px solid #C0C0C0",
                          background: "#EDEDED",
                          textAlign: "center",
                          p: "20px",
                        }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group">
                          <Grid container spacing={4}>
                            <Grid item xs={12} lg={3}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="2days (8/month)"
                              />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="3days (12/month)"
                              />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="4days (16/month)"
                              />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="5days (20/month)"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </Box>
                    }
                    text="Class Days(Per Week)"
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Price"
                  />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Discount Price"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <Box>
                        <Grid container spacing={4}>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="1 Section"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="2 Section"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="3 Section"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="4 Section"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container spacing={4} sx={{ p: "40px 0" }}>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="01:00 ~ 01:30  V"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="07:00 ~ 07:30  V"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="13:00 ~ 13:30  V"
                              />
                            </Box>
                          </Grid>
                          <Grid item sx={6} lg={3}>
                            <Box
                              sx={{
                                border: "2px solid #C0C0C0",
                                background: "#EDEDED",
                                p: "8px 12px",
                              }}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="19:00 ~ 19:30  V"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    }
                    text="Study time"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={<TextareaComment />}
                    text="About Product"
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}></Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              color: "White",
            }}>
            Save
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              // color: "black",
            }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
