import Box from "@mui/system/Box";
import { Link } from "react-router-dom";

const BtnCellRenderer = ({ value, data }) => {
  const handleButtonClick = () => {
    console.log("Button clicked for row with ID:", data);
  };

  return (
    <Link to={{ pathname: "/user/addnewaccount" }}>
      <Box
        onClick={handleButtonClick}
        sx={{
          backgroundColor: "#6495ED",
          textAlign: "center",
          color: "white",
        }}>
        <strong>Detail</strong>
      </Box>
    </Link>
  );
};

export default BtnCellRenderer;
