import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import ButtonComponent from "../../../../../components/buttonComponent";
import TextFilter from "../TextFilter";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCoupon() {
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
        pading={"10px 0"}
        margin={"8px 12px"}
        width={"90%"}
        onClick={handleClickOpen}
        title={"Coupon"}
      />

      <Dialog fullWidth maxWidth={"xl"} open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Box sx={{ m: "12px 0" }}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={12}>
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Type"
                  />
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Target"
                  />
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Cycle"
                  />
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Name"
                  />
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Description"
                  />
                  <TextFilter
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                      />
                    }
                    text="Discount Rate"
                  />

                  <TextFilter
                    children={
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "center",
                        }}>
                        <Grid container>
                          <Grid item xs={12} lg={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer
                                sx={{ alignItems: "center" }}
                                components={["DatePicker", "DatePicker"]}>
                                <DatePicker format="DD-MM-YYYY" />~
                                <DatePicker format="DD-MM-YYYY" />
                              </DemoContainer>
                            </LocalizationProvider>
                          </Grid>
                          <Grid item xs={12} lg={3} textAlign={"center"}>
                            <FormControlLabel
                              sx={{ m: "12px" }}
                              value="1"
                              control={<Radio />}
                              label="Issue Date "
                            />
                          </Grid>
                          <Grid item xs={12} lg={3}>
                            <TextField
                              sx={{
                                m: "12px",
                                alignItems: "center",
                                textAlign: "center",
                              }}
                              size="small"
                              id="outlined-basic"
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    }
                    text="Expiration period"
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
