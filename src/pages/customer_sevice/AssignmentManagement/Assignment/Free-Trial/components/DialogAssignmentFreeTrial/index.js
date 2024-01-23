import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import ReactBigCalendar from "./ReactBigCalendar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAssignmentRegular({ title }) {
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
      <Button
        onClick={handleClickOpen}
        sx={{
          textTransform: "capitalize",
          p: "4px 0",
          fontSize: "12px",
          margin: "0 4px",
          width: "90%",
        }}
        variant="contained">
        <strong>detail</strong>
      </Button>
      <Dialog fullWidth maxWidth={"x"} open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <ReactBigCalendar />

            {/* <FullCalendar /> */}
            {/* <TuiCalendar /> */}
            {/* <ReactCalendar /> */}
          </DialogContentText>
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
