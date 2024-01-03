import { Grid, MenuItem } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import TextBox from "../../../components/TextBox";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import SelectBox from "../../../components/selectsBox";
import AccountListTable from "./Data/AccountListTable";
//data
import users from "../../../../services/api/admin/users";
import data from "./Data";
const statusArray = [
  {
    title: "On",
    value: 1,
  },
  {
    title: "Off",
    value: 0,
  },
];

function AccountList() {
  const { DatalistCountry: listCountry } = data();

  const [status, setStatus] = useState();
  const [student, setStudent] = useState();
  const [membership, setMembership] = useState();
  const [country, setCountry] = useState();
  const [mobile, setMobile] = useState();
  const [tag, setTag] = useState();
  const [registrationFrom, setRegistrationFrom] = useState();
  const [registrationTo, setRegistrationTo] = useState();
  const [recentFrom, setRecentFrom] = useState();
  const [recentTo, setRecentTo] = useState();

  const [listMenu, setListMenu] = useState([]);

  const Search = async () => {
    try {
      const res = await users.actionUser({
        Action: "SEARCH",
        Country: country,
        _Member: membership,
        _User_Name: student,
        Phone: mobile,
        Tags: tag,
        Start_Date_Regis: registrationFrom?.format("YYYY-MM-DD"),
        End_Date_Regis: registrationTo?.format("YYYY-MM-DD"),
        Start_Date_Login: recentFrom?.format("YYYY-MM-DD"),
        End_Date_Login: recentTo?.format("YYYY-MM-DD"),
      });
      setListMenu(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mb: "20px",
              p: "8px 0",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              {/* <Grid item xs={12} lg={1}>
                <strong style={{ color: "#7F7F7F" }}>Filter List</strong>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <SelectBox
                          sx={{ m: "8px 0" }}
                          fullWidth={"fullWidth"}
                          size={"small"}
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          children={statusArray.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                        />
                      }
                      text="Status"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextBox
                          value={student}
                          onChange={(e) => setStudent(e.target.value)}
                        />
                      }
                      text="Student Name"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextBox
                          value={membership}
                          onChange={(e) => setMembership(e.target.value)}
                        />
                      }
                      text="English Wing Membership"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <SelectBox
                          sx={{ m: "8px 0" }}
                          fullWidth={"fullWidth"}
                          size={"small"}
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          children={listCountry.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.Name}>
                                {item.Name}
                              </MenuItem>
                            );
                          })}
                        />
                      }
                      text="Country"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextBox
                          value={mobile}
                          onChange={(e) => setMobile(e.target.mobile)}
                        />
                      }
                      text="Mobile Phone"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <TextFilter
                      children={
                        <TextBox
                          value={tag}
                          onChange={(e) => setTag(e.target.mobile)}
                        />
                      }
                      text="Tag"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                              label="From date"
                              // defaultValue={tuNgay}
                              onChange={(day) => setRegistrationFrom(day)}
                              format="DD-MM-YYYY"
                            />
                            <DatePicker
                              label="To date"
                              // defaultValue={denNgay}
                              onChange={(day) => setRegistrationTo(day)}
                              format="DD-MM-YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      }
                      text="Registration Date"
                    />
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <TextFilter
                      children={
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}>
                            <DatePicker
                              label="From date"
                              // defaultValue={tuNgay}
                              onChange={(day) => setRecentFrom(day)}
                              format="DD-MM-YYYY"
                            />
                            <DatePicker
                              label="To date"
                              // defaultValue={denNgay}
                              onChange={(day) => setRecentTo(day)}
                              format="DD-MM-YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      }
                      text="Recent Login"
                    />
                  </Grid>
                </Grid>

                <ButtonComponent onClick={Search} title={"Add Filter"} />
              </Grid> */}
              <Grid item xs={12} lg={12} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <AccountListTable newRowData={listMenu} />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
