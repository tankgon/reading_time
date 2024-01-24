import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Badge, Descriptions } from "antd";
import React, { useState } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogView({ Score, Word, Aloud, Comprehension }) {
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

  const items = [
    {
      key: "6",
      label: "Mispronounced Word/s",
      span: 3,
      children: (
        <>
          <Badge status="processing" text="Running" />
        </>
      ),
    },
    {
      key: "7",
      label: "Overall Score",
      children: `${Score}`,
    },
    {
      key: "8",
      label: "Reading Aloud",
      children: `${Aloud}`,
    },
    {
      key: "9",
      label: "Comprehension",
      children: `${Comprehension}`,
    },
  ];

  return (
    <React.Fragment>
      <div
        onClick={handleClickOpen}
        className="text-[#D9488D] text-[16px] font-bold underline decoration-1">
        VIEW
      </div>

      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="mb-4">SCORE</div>
            <div className="border-t-2 border-b-2 border-indigo-500 ">
              <Descriptions layout="vertical" bordered items={items} />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
