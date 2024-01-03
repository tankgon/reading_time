import ImageIcon from "@mui/icons-material/Image";
import { AspectRatio } from "@mui/joy";
import { Card, Grid, MenuItem, Typography } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DotText from "../../../components/DotText";
import TextBox from "../../../components/TextBox";
import ButtonComponent from "../../../components/buttonComponent";
import ButtonUpLoadFile from "../../../components/buttonUpLoadFile";
//data
import { toast } from "react-toastify";
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
    title: "Male",
    value: true,
  },
  {
    title: "Female",
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

  const [imageSrc, setImageSrc] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    // const imageCloundURL = await Clound(imageURL);
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
      toast.success(`Successful update!`);
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
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                lg={4}
                sx={{ textAlign: "center", alignItems: "center" }}>
                <Card variant="outlined" sx={{ p: "8px", borderRadius: "8px" }}>
                  <AspectRatio>
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt="Uploaded"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div>
                        <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
                      </div>
                    )}
                  </AspectRatio>
                  <Box
                    sx={{
                      p: "20px 0 0 0",
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Typography level="title-md"></Typography>
                    <ButtonUpLoadFile
                      accept="image/*"
                      title="Add New Picture"
                      id="input1"
                      onChange={(e) => {
                        setImageURL(e.target.files[0]);
                        handleImageChange(e);
                      }}
                    />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} lg={8}>
                <strong>GENERAL</strong>
                <DotText
                  children={
                    <AutocompleteComponent
                      sx={{ p: "8px 0" }}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  }
                  text="Password"
                />
                <DotText
                  children={
                    <SelectBox
                      sx={{ m: "8px 0" }}
                      fullWidth={"fullWidth"}
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
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          value={birth}
                          onChange={(day) => setBirth(day)}
                          format="DD-MM-YYYY"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  }
                  text="Date of Birth"
                />
                <DotText
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
                  text="Select a country"
                />
                <DotText
                  children={
                    <TextBox
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
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
                    />
                  }
                  text="Contract"
                />
                <DotText
                  children={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          value={start}
                          onChange={(day) => setStart(day)}
                          format="DD-MM-YYYY"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  }
                  text="Start Date"
                />
                <DotText
                  children={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          value={resignation}
                          onChange={(day) => setResignation(day)}
                          format="DD-MM-YYYY"
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  }
                  text="Resignation Date"
                />
                <DotText
                  children={
                    <SelectBox
                      sx={{ m: "8px 0" }}
                      fullWidth={"fullWidth"}
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
