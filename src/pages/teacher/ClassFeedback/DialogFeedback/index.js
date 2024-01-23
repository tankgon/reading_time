import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextFilter from "../../../components/TextFilter";
import TextareaComment from "../../../components/TextareaComment"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFeedback() {
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
      <Typography
        onClick={handleClickOpen}
        sx={{ textTransform: "capitalize" }}
        variant="contained">
        Add Filter
      </Typography>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Class Feedback Video Request"}</DialogTitle>
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
              text="Paper NO"
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
              text="TEAM"
            />

            <TextFilter
              children={
                <Autocomplete
                  fullWidth
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
                  options={options}
                  renderInput={(params) => <TextField {...params} />}
                />
              }
              text="Teacher"
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
              text="Student"
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
              text="Class Date & Time"
            />

            <TextFilter
              children={
                <Box>
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <Button
                    sx={{ textTransform: "capitalize", m: "8px 0" }}
                    variant="contained">
                    <strong>Submitted</strong>
                  </Button>
                </Box>
              }
              text="Video URL"
            />

            <TextFilter
              children={
                <Autocomplete
                  fullWidth
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
                  options={options}
                  renderInput={(params) => <TextField {...params} />}
                />
              }
              text="Team Leader Feedback"
            />

            <TextFilter children={<TextareaComment />} text="Teacher Comment" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
