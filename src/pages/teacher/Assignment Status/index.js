import { Box } from "@mui/system";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactBigCalendar from "./Data/ReactBigCalendar";
import DialogBook from "./DialogAssignment";

function AssignmentStatus() {
  return (
    <>
      {/* <ButtonComponent title={"Request"} margin={"20px 0"} /> */}
      <Box sx={{ width: "100px", margin: "20px 0" }}>
        <DialogBook title={"Request"} />
      </Box>

      <ReactBigCalendar />
    </>
  );
}

export default AssignmentStatus;
