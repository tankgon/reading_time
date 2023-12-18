import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Grid } from "@mui/material";
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
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import ButtonComponent from "../../../../../components/buttonComponent";
import TextFilter from "../TextFilter";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBook() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = ["Search teacher name", "Option 2"];

  return (
    <React.Fragment>

      <ButtonComponent
        onClick={handleClickOpen}
        title={"Book"}
        pading={"10px 0"}
        margin={"8px 12px"}
        width={"90%"}
      />
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Book Registration"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                />
              }
              text="Book Title"
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
              text="Subtitle"
            />

            <TextFilter
              children={
                <TextField
                  fullWidth
                  size="medium"
                  id="outlined-basic"
                  variant="outlined"
                />
              }
              text="Brief description"
            />

            <TextFilter
              children={
                <TextareaAutosize
                  maxRows="8"
                  minRows="8"
                  style={{ width: "100%" }}
                />
              }
              text="Summary synopsis"
            />

            <TextFilter
              children={
                <TextareaAutosize
                  maxRows="8"
                  minRows="8"
                  style={{ width: "100%" }}
                />
              }
              text="Class Goal"
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
              text="Genre"
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
              text="Level"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              }
              text="Page | Vocabulary"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              }
              text="Grade /Lexile"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      variant="contained">
                      Upload
                    </Button>
                  </Grid>
                </Grid>
              }
              text="Cover image"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      variant="contained">
                      Upload
                    </Button>
                  </Grid>
                </Grid>
              }
              text="Attachments"
            />

            <TextFilter
              children={
                <Grid container spacing={4}>
                  <Grid item xs={6} lg={12}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Use"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="No Useale"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              }
              text="Whether to use"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Save
          </Button>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
