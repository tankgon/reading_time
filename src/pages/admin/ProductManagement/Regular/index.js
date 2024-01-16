import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./Data/AccountListTable";
import DialogRegular from "./components/DialogRegular";
//data
import ExportExcelButton from "../../../components/ExportExcelButton";
import data from "./Data";
function Book() {
  const { DatalistMenu: listMenu } = data();
  return (
    <MDBox>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"space-between"}>
          <DialogRegular />
          <ExportExcelButton
            fullWidth={"fullWidth"}
            margin={"12px"}
            data={listMenu}
            filename={"product-regular_redingtime"}
          />
        </Grid>
        <AccountListTable />
      </Grid>
    </MDBox>
  );
}

export default Book;
