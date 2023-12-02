import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

export default function Character() {
  return (
    <Box sx={{ display: "flex", background: "#F2F2F2" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="Passionate / Enthusiastic / Dedicated"
          />
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Calm / Patient"
            />
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Genuine/ Honest"
            />
          </Box>
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Confident/ well-Prepared"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Approachable / Friendly / Charming"
          />
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Motivating"
            />
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Disciplinarian / strict"
            />
          </Box>
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Interactive / Good Communicator"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Responsible/ Sincere / Reliable"
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
            label="Caring / Empathic / Kind"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Lively / Enthusiastic"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Optimistic/ Positive"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Adaptable/ Flexible"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Good Listener"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Sweet / Engaging"
          />
          <FormControlLabel
            control={<Checkbox name="antoine" />}
            label="Meticulous / Detailed"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
