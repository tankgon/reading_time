import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Sheet from "@mui/joy/Sheet";
import * as React from "react";

export default function OverlayCheckbox({ label, onChange, name, checked }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        "& > div": { p: 2, borderRadius: "md", display: "flex" },
      }}>
      <Sheet variant="outlined">
        <Checkbox
          onChange={onChange}
          overlay
          label={label}
          name={name}
          checked={checked}
        />
      </Sheet>
    </Box>
  );
}
