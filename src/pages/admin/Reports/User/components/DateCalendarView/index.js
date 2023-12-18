import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import * as React from "react";

export default function DateCalendarViews() {
  return (
    <Box sx={{ height: "70px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DateCalendar", "DateCalendar", "DateCalendar"]}>
          <DateCalendar views={["day"]} />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
