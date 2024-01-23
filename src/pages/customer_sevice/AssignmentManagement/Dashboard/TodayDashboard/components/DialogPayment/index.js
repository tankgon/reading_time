import { Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogPayment({ title }) {
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
        <strong>{title}</strong>
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box sx={{ border: "2px solid #C0C0C0" }}>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Part
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      rladndud@hanmail.net
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Name
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      rladndud@hanmail.net
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Current Product
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{
                        background: "#F2F2F2",
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      New Product
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                      }}>
                      <TextField fullWidth size="small" />
                    </Grid>
                  </Grid>
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
