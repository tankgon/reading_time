import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BoxRating from "../BoxRating";
import ButtonDialog from "../ButtonDialog";
import events from "./events";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [eventsData, setEventsData] = useState(events);

  console.log(eventsData);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className="App">
      <Dialog fullWidth maxWidth={"xl"} open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={4}>
              <Grid item sx={2} lg={1}>
                <Box
                  sx={{
                    p: "32px 12px",
                    background: "#385723",
                    color: "white",
                    textAlign: "center",
                  }}>
                  Friday
                </Box>
              </Grid>
              <Grid item sx={2} lg={4}>
                <Box>
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                      <ButtonDialog
                        text={"3 Section"}
                        color={"white"}
                        border={"2px solid blue"}
                        background={"blue"}
                      />
                      <ButtonDialog
                        text={"1pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"2pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"3pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"4pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"5pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"6pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <ButtonDialog
                        text={"4 Section"}
                        border={"2px solid blue"}
                      />
                      <ButtonDialog
                        text={"1:30pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"2:30pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"3:30pm"}
                        border={"2px solid green"}
                        color={"white"}
                        background={"green"}
                      />
                      <ButtonDialog
                        text={"4:30pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"5:30pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                      <ButtonDialog
                        text={"6:30pm"}
                        border={"2px solid green"}
                        color={"green"}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item sx={6} lg={7}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    p: "4px 40px",
                  }}>
                  All
                </Button>

                <Grid container spacing={4}>
                  <BoxRating />
                  <BoxRating />
                  <BoxRating />
                  <BoxRating />
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              color: "White",
            }}>
            Confirm
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: "capitalize",
            }}>
            Reset
          </Button>
        </DialogActions>
      </Dialog>

      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={handleClickOpen}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
