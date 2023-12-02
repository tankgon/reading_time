import ImageIcon from "@mui/icons-material/Image";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import * as React from "react";

export default function PlaceholderAspectRatio() {
  return (
    <Card variant="outlined">
      <AspectRatio>
        <div>
          <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
        </div>
      </AspectRatio>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography level="title-md"></Typography>
        <Button sx={{ textTransform: "capitalize" }} variant="contained">
          Add New Picture
        </Button>
      </Box>
    </Card>
  );
}
