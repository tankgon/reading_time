import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import TextFilter from "../TextFilter";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAddPoint() {
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

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize", p: "12px 60px" }}
        variant="contained">
        <strong>Create</strong>
      </Button>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>Create Banners</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={4} sx={{ marginBottom: "40px" }}>
              <Grid item xs={12} lg={6}>
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Making slices"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Creating band banners/pop-ups"
                />
              </Grid>
            </Grid>

            <TextFilter
              children={
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top">
                    <Grid container spacing={8}>
                      <Grid item xs={6} lg={6} sx>
                        <FormControlLabel
                          value="top"
                          control={<Radio sx={{ width: "100%" }} />}
                          label={
                            <Box
                              sx={{
                                border: "2px solid blue",
                                p: "40px 20px",
                                height: "120px",
                                margin: "auto",
                                textAlign: "center",
                              }}>
                              <Box
                                sx={{
                                  border: "2px solid blue",
                                  margin: "auto",
                                  height: "32px",
                                  textAlign: "center",
                                }}></Box>
                              <Box sx={{ marginTop: "20px" }}>
                                top of page body
                              </Box>
                            </Box>
                          }
                          labelPlacement="top"
                        />
                      </Grid>
                      <Grid item xs={6} lg={6} sx>
                        <FormControlLabel
                          value="top"
                          control={<Radio sx={{ width: "100%" }} />}
                          label={
                            <Box
                              sx={{
                                border: "2px solid blue",
                                p: "40px 20px",
                                height: "120px",
                                margin: "auto",
                                textAlign: "center",
                              }}>
                              <Box sx={{ marginTop: "20px" }}>
                                bottom of page body
                              </Box>
                              <Box
                                sx={{
                                  border: "2px solid blue",
                                  margin: "auto",
                                  height: "32px",
                                  textAlign: "center",
                                }}></Box>
                            </Box>
                          }
                          labelPlacement="top"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              }
              text={"insertion position"}
            />

            <Box sx={{ border: "2px solid #C0C0C0" }}>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Title
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={8}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Insert Image
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={8}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Link path
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={8}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      {/* <TextField fullWidth size="small" /> */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Period
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={8}
                      sx={{
                        p: "20px",
                      }}>
                      {/* <TextField fullWidth size="small" /> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Save
          </Button>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
