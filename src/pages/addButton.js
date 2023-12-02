import Box from "@mui/system/Box";
function AddButton({chir}) {
  return (
    <Box
      sx={{
        backgroundColor: "#6495ED",
        p: "12px 40px",
        textAlign: "center",
        color: "white",
      }}>
      <strong>ADD</strong>
    </Box>
  );
}

export default AddButton;
