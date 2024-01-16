import ImageIcon from "@mui/icons-material/Image";
import { AspectRatio } from "@mui/joy";
import { Card, Grid, MenuItem, TextField, Typography } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DotText from "../../components/DotText";
import FilePick from "../../components/FilePick";
import ButtonComponent from "../../components/buttonComponent";
import ButtonUpLoadFile from "../../components/buttonUpLoadFile";
//data
import { toast } from "react-toastify";
import roles from "../../../services/api/admin/roles";
import Clound from "../../../services/clound";
import Storage from "../../../services/storage";
import SelectBox from "../../components/selectsBox";
import data from "./Data";

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

const listAuthority = [
  { title: "Teacher" },
  { title: "Team Leader" },
  { title: "CS" },
  { title: "User" },
];

function MypageTeamLead() {
  const { DatalistTeacher: listTeacher, DatalistCountry: listCountry } = data();

  const [name, setName] = useState(Storage.getDATADETAIL()?._Name);
  const [nickname, setNickname] = useState(Storage.getDATADETAIL()?.Nickname);
  const [email, setEmail] = useState(Storage.getDATADETAIL()?.Email);
  const [password, setPassword] = useState(Storage.getDATADETAIL()?.Password);
  const [gender, setGender] = useState(Storage.getDATADETAIL()?.Gender);
  const [birth, setBirth] = useState(dayjs(Storage.getDATADETAIL()?.Birth));
  const [country, setCountry] = useState(Storage.getDATADETAIL()?.Country);
  const [type, setType] = useState(Storage.getDATADETAIL()?.Contract_Type);
  const [contract, setContract] = useState(Storage.getDATADETAIL()?._Contract);
  const [start, setStart] = useState(dayjs(Storage.getDATADETAIL()?.createdAt));
  const [resignation, setResignation] = useState(
    dayjs(Storage.getDATADETAIL()?.createdAt)
  );
  const [authority, setAuthority] = useState(
    Storage.getDATADETAIL()?.Authority_Type
  );

  const [imageSrc, setImageSrc] = useState(Storage.getDATADETAIL()?._Image);
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

  const Approve = async () => {
    const contractURL = await Clound(contract);
    const imageCloundURL = await Clound(imageURL);
    try {
      const res = await roles.postRoleManagement({
        _Name: name,
        Nickname: nickname,
        Email: email,
        Password: password,
        Gender: gender,
        Birth: dayjs(birth.$d).format("YYYY-MM-DD"),
        Country: country,
        Contract_Type: type,
        _Contract: contractURL,
        Authority_Type: authority,
        _Image: imageCloundURL,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
    }
  };

  const Update = async () => {
    const contractURL = await Clound(contract);
    const imageCloundURL = await Clound(imageURL);
    try {
      const res = await roles.putRoleManagement({
        _id: Storage.getDATADETAIL()?._id,
        _Name: name,
        Nickname: nickname,
        Email: email,
        Password: password,
        Gender: gender,
        Birth: dayjs(birth.$d).format("YYYY-MM-DD"),
        Country: country,
        Contract_Type: type,
        _Contract: contractURL,
        Authority_Type: authority,
        _Image: imageCloundURL,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
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
                    <TextField
                      sx={{ m: "8px 0" }}
                      fullWidth
                      size="small"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  }
                  text="Name"
                />
                <DotText
                  children={
                    <TextField
                      fullWidth
                      size="small"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  }
                  text="Nickname"
                />
                <DotText
                  // itemButton={<ButtonComponent title={"Check"} />}
                  children={
                    <TextField
                      sx={{ m: "8px 0" }}
                      fullWidth
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  }
                  text="E-mail"
                />
                <DotText
                  itemButton={<ButtonComponent title={"Reset"} />}
                  children={
                    <TextField
                      fullWidth
                      size="small"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  }
                  text="Password"
                />
                <DotText
                  children={
                    <SelectBox
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
                          fullWidth
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
                          <MenuItem key={index} value={item.name}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    />
                  }
                  text="Select a country"
                />
                <DotText
                  children={
                    <TextField
                      sx={{ m: "8px 0" }}
                      fullWidth
                      size="small"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  }
                  text="Contract Type"
                />
                <DotText
                  children={
                    <FilePick
                      inputProps={{ accept: "audio/*, .pdf" }}
                      onChange={(e) => setContract(e)}
                      value={contract}
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
                          <MenuItem key={index} value={item.title}>
                            {item.title}
                          </MenuItem>
                        );
                      })}
                    />
                  }
                  text="Authority Type"
                />
                <Box margin={"20px 0"}>
                  <ButtonComponent onClick={Approve} title={"Approve"} />
                  <ButtonComponent
                    onClick={Update}
                    title={"Update"}
                    marginLeft={"20px"}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </MDBox>
  );
}

export default MypageTeamLead;
