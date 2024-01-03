import ImageIcon from "@mui/icons-material/Image";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import ButtonUpLoadFile from "../../../../../components/buttonUpLoadFile";

export default function PlaceholderAspectRatio({ onChange }) {
  console.log(onChange);
  return (
    <Card variant="outlined">
      <AspectRatio>
        <div>
          <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
        </div>
      </AspectRatio>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography level="title-md"></Typography>
        <ButtonUpLoadFile
        accept={"image/*"}
          title={"Add New Picture"}
          id={"input1"}
          onChange={onChange}
        />
      </Box>
    </Card>
  );
}
