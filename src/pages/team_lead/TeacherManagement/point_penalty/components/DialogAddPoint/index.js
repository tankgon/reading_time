import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ButtonComponent from "../../../../../components/buttonComponent";
import TextareaComment from "../TextareaComment";
import TextFilter from "../../../../../components/TextFilter";

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
      <ButtonComponent
        onClick={handleClickOpen}
        title={"+ Point / Penalty"}
        pading={"12px 60px"}
      />
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        {/* <DialogTitle>
          <Button
            sx={{ textTransform: "capitalize", p: "12px 60px" }}
            variant="contained">
            <strong>+ Point / Penalty</strong>
          </Button>
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box
              sx={{
                border: ".2px solid #2E75B6",
                p: "8px",
                background: "#9DC3E6",
                color: "#7F7F7F",
              }}>
              <strong>Teacher</strong>
            </Box>
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
              sx={{ p: "16px 0" }}
              options={options}
              renderInput={(params) => <TextField {...params} />}
            />
            <Box
              sx={{
                border: ".2px solid #2E75B6",
                p: "8px",
                background: "#9DC3E6",
                color: "#7F7F7F",
              }}>
              <strong>Teacher</strong>
            </Box>
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
              sx={{ p: "16px 0" }}
              options={options}
              renderInput={(params) => <TextField {...params} />}
            />
            <Box
              sx={{
                border: ".2px solid #2E75B6",
                p: "8px",
                background: "#9DC3E6",
                color: "#7F7F7F",
              }}>
              <strong>Items</strong>
            </Box>
            <Grid container sx={{ p: "16px 0" }}>
              <Grid item xs={6} lg={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="Item 1"
                  />
                  <FormControlLabel
                    control={<Checkbox name="jason" />}
                    label="Item 2"
                  />
                  <FormControlLabel
                    control={<Checkbox name="antoine" />}
                    label="Item 3"
                  />
                  <FormControlLabel
                    control={<Checkbox name="antoine" />}
                    label="Item 4"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6} lg={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="Item 5"
                  />
                  <FormControlLabel
                    control={<Checkbox name="jason" />}
                    label="Item 6"
                  />
                  <FormControlLabel
                    control={<Checkbox name="antoine" />}
                    label="Item 7"
                  />
                  <FormControlLabel
                    control={<Checkbox name="antoine" />}
                    label="Others"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Box
              sx={{
                border: ".2px solid #2E75B6",
                p: "8px",
                background: "#9DC3E6",
                color: "#7F7F7F",
              }}>
              <strong>texts</strong>
            </Box>

            <Box sx={{ p: "16px 0" }}>
              <TextareaComment />
            </Box>
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
