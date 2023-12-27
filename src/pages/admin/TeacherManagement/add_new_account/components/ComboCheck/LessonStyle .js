import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useState } from "react";
import Storage from "../../../../../../services/local";

export default function LessonStyle() {
  const [checkedValues, setCheckedValues] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.checked,
    }));
  };

  const { q, w, e, r, t, y, u, i, o } = checkedValues;
  const selectedcheckedValues = Object.keys(checkedValues).filter(
    (key) => checkedValues[key]
  );

  useEffect(() => {
    Storage.setLESSON({
      lesson: selectedcheckedValues.join(";"),
    });
  }, [checkedValues]);

  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={q}
                      name="Perfect grammar"
                    />
                  }
                  label="Perfect grammar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={w}
                      name="Speaking fast"
                    />
                  }
                  label="Speaking fast"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={e}
                      name="Fluent like natives"
                    />
                  }
                  label="Fluent like natives"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={r}
                      name="Facilitator and Cooperative Teaching Style (Motivating)"
                    />
                  }
                  label="Facilitator and Cooperative Teaching Style (Motivating)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={t}
                      name="Have a leadership / Charismatic"
                    />
                  }
                  label="Have a leadership / Charismatic"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={y}
                      name="With Inquiry / Effective Questioning Techniques"
                    />
                  }
                  label="With Inquiry / Effective Questioning Techniques"
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={u}
                      name="Good pronunciation"
                    />
                  }
                  label="Good pronunciation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={i}
                      name="Speaking slow"
                    />
                  }
                  label="Speaking slow"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={o}
                      name="Interactive and Communicative"
                    />
                  }
                  label="Interactive and Communicative"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
