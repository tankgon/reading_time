import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

export default function LessonStyle() {
  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Perfect grammar"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Speaking fast"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Fluent like natives"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Facilitator and Cooperative Teaching Style (Motivating)"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Have a leadership / Charismatic"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="With Inquiry / Effective Questioning Techniques"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          required
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Good pronunciation"
            />
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Speaking slow"
            />
            <FormControlLabel
              control={<Checkbox name="antoine" />}
              label="Interactive and Communicative"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
