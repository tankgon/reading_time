import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { DatePicker, Input } from "antd";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import DateCalendarViews from "./components/DateCalendarView";
import DialogAddPoint from "./components/DialogAddPoint";
import Spreadheet from "./components/Spreadsheet";
const { RangePicker } = DatePicker;

function PointPenalty() {
  const [isStatePoint, setStatePoint] = useState({ text: "sdaf", date: [] });
  console.log(isStatePoint);
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mb: "20px",
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={3}>
                <DialogAddPoint />
              </Grid>
              <Grid item xs={12} lg={7}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <TextFilter
                      children={
                        <Input
                          placeholder="Basic usage"
                          value={isStatePoint.text}
                          onChange={(e) =>
                            setStatePoint({
                              ...isStatePoint,
                              text: e.target.value,
                            })
                          }
                        />
                      }
                      text="Division"
                    />
                    <TextFilter
                      children={
                        <RangePicker
                          size={"Large"}
                          onChange={(e, eS) =>
                            setStatePoint({ ...isStatePoint, date: eS })
                          }
                        />
                      }
                      text="Start Date"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>

          <DateCalendarViews />
          <div className="bg-[white] px-5 relative z-10">
            <Spreadheet />
          </div>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PointPenalty;
