import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useState } from "react";
import Storage from "../../../../../../services/storage";

export default function Character() {
  const [checkedValues, setCheckedValues] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.checked,
    }));
  };

  const { q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h } = checkedValues;
  const selectedcheckedValues = Object.keys(checkedValues).filter(
    (key) => checkedValues[key]
  );
  // console.log(selectedcheckedValues);
  // console.log(selectedcheckedValues.join(", "));

  useEffect(() => {
    Storage.setCHARACTER({
      character: selectedcheckedValues.join(", "),
    });
  }, [checkedValues]);

  return (
    <Box sx={{ display: "flex", background: "#F2F2F2" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={q}
                    name="Passionate / Enthusiastic / Dedicated"
                  />
                }
                label="Passionate / Enthusiastic / Dedicated"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={w}
                    name="Calm / Patient"
                  />
                }
                label="Calm / Patient"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={e}
                    name="Genuine/ Honest"
                  />
                }
                label="Genuine/ Honest"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={r}
                    name="Confident/ well-Prepared"
                  />
                }
                label="Confident/ well-Prepared"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={t}
                    name="Approachable / Friendly / Charming"
                  />
                }
                label="Approachable / Friendly / Charming"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={y}
                    name="Motivating"
                  />
                }
                label="Motivating"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={u}
                    name="Disciplinarian / strict"
                  />
                }
                label="Disciplinarian / strict"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={i}
                    name="Interactive / Good Communicator"
                  />
                }
                label="Interactive / Good Communicator"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={o}
                    name="Responsible/ Sincere / Reliable"
                  />
                }
                label="Responsible/ Sincere / Reliable"
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={p}
                    name="Caring / Empathic / Kind"
                  />
                }
                label="Caring / Empathic / Kind"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={a}
                    name="Lively / Enthusiastic"
                  />
                }
                label="Lively / Enthusiastic"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={s}
                    name="Optimistic/ Positive"
                  />
                }
                label="Optimistic/ Positive"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={d}
                    name="Adaptable/ Flexible"
                  />
                }
                label="Adaptable/ Flexible"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={f}
                    name="Good Listener"
                  />
                }
                label="Good Listener"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={g}
                    name="Sweet / Engaging"
                  />
                }
                label="Sweet / Engaging"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckboxChange}
                    checked={h}
                    name="Meticulous / Detailed"
                  />
                }
                label="Meticulous / Detailed"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
