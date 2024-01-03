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
import React, { useState } from "react";
import TextBox from "../../../../../components/TextBox";
import TextFilter from "../../../../../components/TextFilter";
import ButtonComponent from "../../../../../components/buttonComponent";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCurri() {
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
      <ButtonComponent
        onClick={handleClickOpen}
        title={"Curriculum"}
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
        <DialogTitle>{"Curriculum add"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextFilter children={<TextBox />} text="Curriculum  Title" />

            <TextFilter children={<TextBox />} text="Subtitle" />

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
                          label="Regular"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Free-Trial"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              }
              text="Division"
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
                          label="Yes"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="No"
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
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
