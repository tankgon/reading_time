import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useState } from "react";
import Storage from "../../../../../../services/storage";
const categories = [
  ["Perfect grammar", "Speaking fast", "Fluent like natives"],
  ["Good pronunciation", "Speaking slow", "Interactive and Communicative"],
  [
    "Facilitator and Cooperative Teaching Style (Motivating)",
    "Have a leadership / Charismatic",
    "With Inquiry / Effective Questioning Techniques",
  ],
];

export default function LessonStyle() {
  const [checkedValues, setCheckedValues] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.checked,
    }));
  };

  const selectedCheckedValues = Object.keys(checkedValues).filter(
    (key) => checkedValues[key]
  );

  useEffect(() => {
    Storage.setLESSON(selectedCheckedValues);
  }, [checkedValues]);

  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <Grid container>
            {categories.map((category, index) => (
              <Grid item xs={12} lg={6} key={index}>
                {category.map((checkbox) => (
                  <FormControlLabel
                    key={checkbox}
                    control={
                      <Checkbox
                        onChange={handleCheckboxChange}
                        checked={checkedValues[checkbox]}
                        name={checkbox}
                      />
                    }
                    label={checkbox}
                  />
                ))}
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
