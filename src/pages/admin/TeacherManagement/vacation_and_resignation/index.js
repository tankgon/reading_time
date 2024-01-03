import { Grid } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextBox from "../../../components/TextBox";
import TextFilter from "../../../components/TextFilter";
import AccountListTable from "./AccountList/Data/AccountListTable";
// import TextForm from "./components/TextForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
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
      <Grid item xs={12} lg={9}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <TextFilter children={<TextBox />} text="Start Date" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} lg={7}>
            <TextFilter
              children={
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="From date"
                      // defaultValue={tuNgay}
                      // onChange={(day) => setTuNgay(day)}
                      format="DD-MM-YYYY"
                    />
                    <DatePicker
                      label="To date"
                      // defaultValue={denNgay}
                      // onChange={(day) => setDenNgay(day)}
                      format="DD-MM-YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              }
              text="Start Date"
            />

            <TextFilter
              children={
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="From date"
                      // defaultValue={tuNgay}
                      // onChange={(day) => setTuNgay(day)}
                      format="DD-MM-YYYY"
                    />
                    <DatePicker
                      label="To date"
                      // defaultValue={denNgay}
                      // onChange={(day) => setDenNgay(day)}
                      format="DD-MM-YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              }
              text="Start Date"
            />
            <ButtonComponent title={"Add Filter"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
        <ButtonComponent title={"Excel Export"} />
      </Grid>
      <Grid item xs={12} lg={12} sx={{m:"40px 0"}}>
        <AccountListTable />
      </Grid>
    </Grid>
  );
}

export default AccountList;
