import { Grid } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./Data/AccountListTable";
// import TextForm from "./components/TextForm";
import ButtonComponent from "../../../components/buttonComponent";

function AccountList() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid item xs={12} lg={1}>
        <strong style={{ color: "#7F7F7F" }}>Filter List</strong>
      </Grid>
      <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
        <ButtonComponent title={"Excel Export"} />
      </Grid>
      <Grid item xs={12} lg={12} sx={{ m: "40px 0" }}>
        <AccountListTable />
      </Grid>
    </Grid>
  );
}

export default AccountList;
