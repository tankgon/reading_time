import Done from "@mui/icons-material/Done";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import * as React from "react";

export default function ChoiceChipCheckbox() {
  const [value, setValue] = React.useState([]);
  return (
    <Sheet variant="outlined" sx={{ width: 360, p: 2, borderRadius: "sm" }}>
      <div role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            "--List-gap": "8px",
            "--ListItem-radius": "20px",
            "--ListItem-minHeight": "32px",
            "--ListItem-gap": "4px",
          }}>
          {["Elevator", "Washer/Dryer", "Fireplace", "Dogs ok", "Cats ok"].map(
            (item, index) => (
              <ListItem key={item}>
                {value.includes(item) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, zIndex: 2, pointerEvents: "none" }}
                  />
                )}

                <Checkbox
                  size="sm"
                  disabled={index === 0}
                  disableIcon
                  overlay
                  label={item}
                  checked={value.includes(item)}
                  variant={value.includes(item) ? "soft" : "outlined"}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setValue((val) => [...val, item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            border: "1px solid",
                            borderColor: "primary.500",
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
            )
          )}
        </List>
      </div>
      <Box sx={{ p: "20px 0" }}>
        <TextField
          placeholder="Enter of Tags…"
          size="small"
          sx={{ p: "8px" }}
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
    </Sheet>
  );
}
