import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useState } from "react";
import Storage from "../../../../../../services/storage";

const categories = [
  {
    label: "Personality Traits",
    checkboxes: [
      "Passionate / Enthusiastic / Dedicated",
      "Calm / Patient",
      "Genuine/ Honest",
      "Confident/ well-Prepared",
      "Approachable / Friendly / Charming",
      "Motivating",
      "Disciplinarian / strict",
      "Interactive / Good Communicator",
      "Responsible/ Sincere / Reliable",
    ],
  },
  {
    label: "Attributes",
    checkboxes: [
      "Caring / Empathic / Kind",
      "Lively / Enthusiastic",
      "Optimistic/ Positive",
      "Adaptable/ Flexible",
      "Good Listener",
      "Sweet / Engaging",
      "Meticulous / Detailed",
    ],
  },
];

const Character = () => {
  const [checkedValues, setCheckedValues] = useState({});

  console.log(checkedValues);

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
    Storage.setCHARACTER(selectedCheckedValues);
  }, [checkedValues]);

  return (
    <Box sx={{ display: "flex", background: "#F2F2F2" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          {categories.map((category) => (
            <Grid container key={category.label}>
              <Grid item xs={12} lg={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckboxChange}
                      checked={checkedValues[category.checkboxes[0]]}
                      name={category.checkboxes[0]}
                    />
                  }
                  label={category.label}
                />
                {category.checkboxes.slice(1).map((checkbox) => (
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
            </Grid>
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Character;
