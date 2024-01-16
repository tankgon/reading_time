import Box from "@mui/system/Box";

const BtnCellRenderer = ({ value, data }) => {
  const handleButtonClick = () => {};

  return (
    // <Link to={{ pathname: "/teacher/addnewaccount" }}>
    <Box
      onClick={handleButtonClick}
      sx={{
        backgroundColor: "#6495ED",
        textAlign: "center",
        color: "white",
      }}>
      <strong>Detail</strong>
    </Box>
    // </Link>
  );
};

export default BtnCellRenderer;
