import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import BoardTeacher from "../../../../components/boardTeacher";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogRegular() {
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
        maxWidth={"md"}
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          <BoardTeacher title={"Today class"} />
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            {/* <BoardTeacher title={"Today class"} /> */}Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
