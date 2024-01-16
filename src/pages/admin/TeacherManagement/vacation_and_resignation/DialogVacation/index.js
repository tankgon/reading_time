import { Grid, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextFilter from "../../../../components/TextFilter";
import ButtonComponent from "../../../../components/buttonComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogVacation() {
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
      <div onClick={handleClickOpen}>View</div>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box sx={{ padding: "20px 0" }}>
              <strong>General</strong>
            </Box>
            <Box sx={{ border: "2px solid #C0C0C0" }}>
              <Grid container>
                <Grid item xs={6} lg={6}>
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
                      }}>
                      Part
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderRight: "2px solid #C0C0C0",
                      }}>
                      Absence request ( V ) Vacation request ( ) Retirement
                      request ( )
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} lg={6}>
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
                      }}>
                      Name
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        p: "20px",
                      }}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "20px" }}>
              <strong>GenApproval line</strong>
            </Box>
            <Box sx={{ border: "2px solid #C0C0C0" }}>
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={2}
                      sx={{
                        background: "#F2F2F2",
                        p: "48px 20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                      }}>
                      Confirm
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={10}
                      sx={{
                        borderRight: "2px solid #C0C0C0",
                      }}>
                      <Box
                        sx={{
                          p: "20px",
                          borderBottom: "2px solid #C0C0C0",
                        }}>
                        Team Leader (submitter's team leader name)
                      </Box>
                      <Box
                        sx={{
                          p: "20px",
                        }}>
                        Confirm ( V)
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      lg={12}
                      sx={{
                        borderRight: "2px solid #C0C0C0",
                      }}>
                      <Box
                        sx={{
                          p: "20px",
                          borderBottom: "2px solid #C0C0C0",
                        }}>
                        Director(Director’s Name)
                      </Box>
                      <Box
                        sx={{
                          p: "20px",
                        }}>
                        Confirm ( V)
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "20px 0" }}>
              <div>
                <strong>Title</strong>
              </div>
              <a href="https://freetuts.net">
                <strong>Absence request _ NAME_23/11/06</strong>
              </a>
            </Box>
            <TextFilter
              children={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField fullWidth size="small" />
                  Day(s)
                </Box>
              }
              text="Menu"
            />
            <TextFilter
              children={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField fullWidth size="small" />
                  ~
                  <TextField fullWidth size="small" />
                </Box>
              }
              text="Period"
            />
            <TextFilter
              children={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField fullWidth size="small" />
                  {">"}
                  <TextField fullWidth size="small" />
                  <ButtonComponent title={"Attach"} />
                </Box>
              }
              text="Reasons"
            />
            <Box
              sx={{
                border: "2px solid #C0C0C0",
                background: "#EDEDED",
                m: "40px 0",
              }}>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={6}
                      lg={2}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Reasons(사유1)
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={10}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      In detail(사유2)
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={2}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Urgent issue
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      accident, family issue(parental checkup : personal), news
                      of death, internet connection (broken laptop, unstable
                      internet connection, interruptions/outage)
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={2}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Call sick
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={10}
                      sx={{
                        p: "20px",
                        borderBottom: "2px solid #C0C0C0",
                      }}>
                      Not feeling well
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={2}
                      sx={{
                        p: "20px",
                        textAlign: "center",
                        borderRight: "2px solid #C0C0C0",
                      }}>
                      Personal
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      lg={10}
                      sx={{
                        p: "20px",
                      }}>
                      Running errands, check up issue, school, etc.
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <ButtonComponent title={"Save"} marginRight={"8px"} />
              <ButtonComponent title={"Cancel"} marginRight={"8px"} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
