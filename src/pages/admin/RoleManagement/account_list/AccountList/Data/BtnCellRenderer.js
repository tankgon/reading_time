import Box from "@mui/system/Box";
import { Link } from "react-router-dom";
import Storage from "../../../../../../services/storage";

const BtnCellRenderer = ({ value, data }) => {
  const handleButtonClick = () => {
    Storage.setDATADETAIL(data);
  };

  return (
    <Link to={{ pathname: "/role/addnewaccount" }}>
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
