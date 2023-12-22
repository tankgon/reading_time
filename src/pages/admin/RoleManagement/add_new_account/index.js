import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Grid, MenuItem } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import logo from "../../../../components/Image/login-content.jpg";
import ButtonComponent from "../../../components/buttonComponent";
import TextBox from "../../../components/textBox";
import DotText from "./DotText/DotText";
//data
import roles from "../../../../services/api/admin/roles";
import AutocompleteComponent from "../../../components/AutocompleteComponent";
import SelectBox from "../../../components/selectsBox";
import data from "./Data";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const genderA = [
  {
    title: "Nam",
    value: true,
  },
  {
    title: "Nữ",
    value: false,
  },
];

function AddNewAccount() {
  const {
    DatalistTeacher: listTeacher,
    DatalistCountry: listCountry,
    DatalistAuthority: listAuthority,
  } = data();
  const [listDetail, setListDetail] = useState();

  console.log(listDetail);

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [contract, setContract] = useState("");
  const [start, setStart] = useState("");
  const [resignation, setResignation] = useState("");
  const [authority, setAuthority] = useState("");

  const Detail = async (idName) => {
    try {
      const res = await roles.actionRoleManagement({
        Action: "TEACHER",
        _Name: idName,
      });
      setListDetail(res);
      setNickname(res[0].Nick_Name);
      setEmail(res[0].Email);
      setPassword(res[0].Password);
      setGender(res[0].Gender);
      setBirth(dayjs(res[0].Birth));
      setCountry(res[0].Country);
      setType(res[0].Contract_Type);
      setContract(res[0].Contract);
      setStart(dayjs(res[0].Start_Date));
      setResignation(dayjs(res[0].Registration_Date));
    } catch (err) {
      console.log(err);
    }
  };

  const Approve = async () => {
    try {
      await roles.actionRoleManagement({
        Action: "POST",
        Approval: "123",
        _Role: "123",
        Country: country,
        _Name: name,
        Email: email,
        Password: password,
        Phone: "123",
        Registration_Date: dayjs(resignation.$d).format("YYYY-MM-DD"),
        Recent_Login: dayjs(birth.$d).format("YYYY-MM-DD"),
        Gender: gender,
        Nickname: nickname,
        Birth: dayjs(birth.$d).format("YYYY-MM-DD"),
        Contract_Type: type,
        _Contract: contract,
        _Start_Date: dayjs(start.$d).format("YYYY-MM-DD"),
        Authority_Type: authority,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBox>
      {listCountry ? (
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{
                flexGrow: 1,
                backgroundColor: "rgba(192, 192, 192, 0.2)",
                p: "20px",
                mb: "20px",
              }}>
              Menu Permission Management
            </Box>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                lg={4}
                sx={{ textAlign: "center", alignItems: "center" }}>
                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt="description_of_your_image"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Box sx={{ p: "20px 0", width: "100%" }}>
                  <ButtonComponent
                    icon={<CloudUploadIcon />}
                    title={"Select file"}
                    fileUpload={<VisuallyHiddenInput type="file" />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={8}>
                <strong>GENERAL</strong>
                <DotText
                  children={
                    <AutocompleteComponent
                      sx={{ width: "224px", m: "8px 0" }}
                      size={"small"}
                      onChange={(event, value) => {
                        Detail(value);
                        setName(value);
                      }}
                      optionSelect={listTeacher.map(
                        (option) => option.Teacher_Name
                      )}
                    />
                  }
                  text="Name"
                />
                <DotText
                  children={
                    <TextBox
                      size="small"
                      sx={{ p: "8px" }}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  }
                  text="Nickname"
                />
                <DotText
                  // itemButton={<ButtonComponent title={"Check"} />}
                  children={
                    <TextBox
                      size="small"
                      sx={{ p: "8px" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  }
                  text="E-mail"
                />
                <DotText
                  itemButton={<ButtonComponent title={"Reset"} />}
                  children={
                    <TextBox
                      size="small"
                      sx={{ p: "8px" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  }
                  text="Password"
                />
                <DotText
                  children={
                    <SelectBox
                      sx={{ width: "224px", m: "8px 0" }}
                      size={"small"}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      children={genderA.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.value}>
                            {item.title}
                          </MenuItem>
                        );
                      })}
                    />
                  }
                  text="Gender"
                />
                <DotText
                  children={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={birth}
                        onChange={(date) => setBirth(date)}
                        sx={{ p: "8px 0px", width: "224px" }}
                        renderInput={(params) => <TextField {...params} />}
                        format="DD/MM/YYYY"
                        fullWidth
                      />
                    </LocalizationProvider>
                  }
                  text="Date of Birth"
                />
                <DotText
                  children={
                    <SelectBox
                      sx={{ width: "224px", m: "8px 0" }}
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
                  text="Select a country"
                />
                <DotText
                  children={
                    <TextBox
                      size="small"
                      sx={{ p: "8px" }}
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  }
                  text="Contract Type"
                />
                <DotText
                  itemButton={
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ textTransform: "capitalize" }}>
                      <strong>File</strong>
                    </Button>
                  }
                  children={
                    <TextBox
                      size="small"
                      sx={{ p: "8px" }}
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
                    />
                  }
                  text="Contract"
                />
                <DotText
                  children={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={start}
                        onChange={(date) => setStart(date)}
                        sx={{ p: "8px 0px", width: "224px" }}
                        renderInput={(params) => <TextField {...params} />}
                        format="DD/MM/YYYY"
                        fullWidth
                      />
                    </LocalizationProvider>
                  }
                  text="Start Date"
                />
                <DotText
                  children={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={resignation}
                        onChange={(date) => setResignation(date)}
                        sx={{ p: "8px 0px", width: "224px" }}
                        renderInput={(params) => <TextField {...params} />}
                        format="DD/MM/YYYY"
                        fullWidth
                      />
                    </LocalizationProvider>
                  }
                  text="Resignation Date"
                />
                <DotText
                  children={
                    <SelectBox
                      sx={{ width: "224px", m: "8px 0" }}
                      size={"small"}
                      value={authority}
                      onChange={(e) => setAuthority(e.target.value)}
                      children={listAuthority.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.Name}>
                            {item.Name}
                          </MenuItem>
                        );
                      })}
                    />
                  }
                  text="Authority Type"
                />
                <ButtonComponent
                  onClick={Approve}
                  title={"Approve"}
                  pading={"16px 52px"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </MDBox>
  );
}

export default AddNewAccount;
