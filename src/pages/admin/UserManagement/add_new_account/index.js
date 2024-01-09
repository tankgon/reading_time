import ImageIcon from "@mui/icons-material/Image";
import AspectRatio from "@mui/joy/AspectRatio";
import { Card, Grid, MenuItem, TextField, Typography } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MuiChipsInput } from "mui-chips-input";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-toastify";
import DotText from "../../../components/DotText";
import OverlayCheckbox from "../../../components/OverlayCheckbox";
import TextCheckBox from "../../../components/TextCheckBox";
import TextareaComment from "../../../components/TextareaComment";
import ButtonComponent from "../../../components/buttonComponent";
import ButtonUpLoadFile from "../../../components/buttonUpLoadFile";
import SelectBox from "../../../components/selectsBox";
import Billing from "./AddNewAccountList/Data/Billing";
import Course from "./AddNewAccountList/Data/Course";
//data
import users from "../../../../services/api/admin/users";
import Clound from "../../../../services/clound";
import Storage from "../../../../services/storage";
import data from "../add_new_account/AddNewAccountList/Data";
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
  const { DatalistCountry: listCountry } = data();

  const [userName, setUserName] = useState(Storage.getDATADETAIL()?.User_Name);
  const [userEngLishName, setUserEngLishName] = useState(
    Storage.getDATADETAIL()?.User_English_Name
  );
  const [email, setEmail] = useState(Storage.getDATADETAIL()?.Email);
  const [password, setPassword] = useState(Storage.getDATADETAIL()?.Password);
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState(Storage.getDATADETAIL()?.Gender);
  const [birth, setBirth] = useState();
  const [country, setCountry] = useState(Storage.getDATADETAIL()?.Country);
  const [using_The_Editor, setUsing_The_Editor] = useState(
    Storage.getDATADETAIL()?.Description
  );

  const [imageSrc, setImageSrc] = useState(Storage.getDATADETAIL()?.Picture);
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

  const [admission, setAdmission] = useState({});
  const handleChange = (event) => {
    setAdmission((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { InUse, Paused, Withdrawn } = admission;
  const selectedAdmission = Object.keys(admission).filter(
    (key) => admission[key]
  );
  const [chips, setChips] = useState([]);
  console.log(chips.join(", "));

  const [englishwing, setEnglishwing] = useState({});
  const handleChange1 = (event) => {
    setEnglishwing((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Lucete, Select, ESL, IELTS } = englishwing;
  const selectedEnglishwing = Object.keys(englishwing).filter(
    (key) => englishwing[key]
  );

  const [referral, setReferral] = useState(
    Storage.getDATADETAIL()?.Referal_Code
  );
  const [signup, setSignup] = useState(Storage.getDATADETAIL()?.Signup_Path);

  const CreateUser = async () => {
    const imageCloundURL = await Clound(imageURL);
    try {
      await users.postUser({
        User_English_Name: userEngLishName,
        User_Name: userName,
        Email: email,
        Password: password,
        Birth: birth,
        Gender: gender,
        Country: country,
        Description: using_The_Editor,
        Picture: imageCloundURL,
        Admission: selectedAdmission.join(", "),
        List_of_Tags: chips.join(", "),
        English_Wing_Member: selectedEnglishwing.join(", "),
        Referal_Code: referral,
        Signup_Path: signup,

        // Phone: phone,
      });
      toast.success(`Successful update!`);
    } catch (err) {
      console.log(err);
      toast.success(`Update failed!`);
    }
  };

  const UpdateUser = async () => {
    const imageCloundURL = await Clound(imageURL);
    try {
      await users.putUser({
        _id: Storage.getDATADETAIL()._id,
        User_English_Name: userEngLishName,
        User_Name: userName,
        Email: email,
        Password: password,
        Birth: birth,
        Gender: gender,
        Country: country,
        Description: using_The_Editor,
        Picture: imageCloundURL,
        Admission: selectedAdmission.join(", "),
        List_of_Tags: chips.join(", "),
        English_Wing_Member: selectedEnglishwing.join(", "),
        Referal_Code: referral,
        Signup_Path: signup,

        // Phone: phone,
      });
      toast.success(`Successful update!`);
    } catch (err) {
      console.log(err);
      toast.success(`Update failed!`);
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
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  p: "20px",
                  mb: "20px",
                  color: "#7F7F7F",
                }}>
                <strong>Add New User</strong>
              </Box>
            </Grid>

            <Grid item xs={12} lg={9}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={8}>
                  <strong>GENERAL</strong>
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    }
                    text="User Name"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={userEngLishName}
                        onChange={(e) => setUserEngLishName(e.target.value)}
                      />
                    }
                    text="User English Name"
                  />
                  <DotText
                    classColor={"red"}
                    // itemButton={<ButtonComponent title={"Check"} />}
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    }
                    text="E-mail Address(Log-in)"
                  />
                  <DotText
                    classColor={"red"}
                    itemButton={<ButtonComponent title={"Reset"} />}
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    }
                    text="Password"
                  />
                  {/* <DotText
                    classColor={"red"}
                    children={
                                     <TextField
                        fullWidth
                        size="small"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    }
                    text="Phone"
                  /> */}
                  <DotText
                    children={
                      <SelectBox
                        fullWidth={"fullWidth"}
                        sx={{ m: " 8px 0" }}
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
                        <DemoContainer
                          components={["DatePicker", "DatePicker"]}>
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
                        fullWidth={"fullWidth"}
                        sx={{ m: " 8px 0" }}
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
                  <Grid item xs={12} lg={8}>
                    <Box sx={{ m: "20px 0" }}>
                      <TextareaComment
                        value={using_The_Editor}
                        onChange={(e) => setUsing_The_Editor(e.target.value)}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={8}>
                    <Card variant="outlined" sx={{ p: "8px" }}>
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
                            <ImageIcon
                              sx={{ fontSize: "3rem", opacity: 0.2 }}
                            />
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
                </Grid>

                <Grid item xs={12} lg={12}>
                  <strong>Additional</strong>
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"In use"}
                            checked={InUse}
                            onChange={handleChange}
                            name="In use"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Paused"}
                            checked={Paused}
                            onChange={handleChange}
                            name="Paused"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Withdrawn"}
                            checked={Withdrawn}
                            onChange={handleChange}
                            name="Withdrawn"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Admission"
                  />
                  <TextCheckBox
                    children={
                      <MuiChipsInput
                        fullWidth
                        placeholder={"List of Tags"}
                        value={chips}
                        onChange={(e) => setChips(e)}
                      />
                    }
                    text="List of Tags"
                  />
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Lucete"}
                            checked={Lucete}
                            onChange={handleChange1}
                            name="Lucete"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Select the campus"}
                            checked={Select}
                            onChange={handleChange1}
                            name="Select"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"ESL"}
                            checked={ESL}
                            onChange={handleChange1}
                            name="ESL"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"IELTS"}
                            checked={IELTS}
                            onChange={handleChange1}
                            name="IELTS"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Englishwing Member"
                  />
                  <TextCheckBox
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={referral}
                        onChange={(e) => setReferral(e.target.value)}
                      />
                    }
                    text="Referral code"
                  />
                  <TextCheckBox
                    children={
                      <TextField
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        value={signup}
                        onChange={(e) => setSignup(e.target.value)}
                      />
                    }
                    text="Signup path"
                  />

                  <div className="w-full hidden">
                    <Grid item xs={12} lg={12}>
                      <Box
                        sx={{
                          flexGrow: 1,
                          mb: "20px",
                        }}>
                        <strong>Course</strong>
                      </Box>
                      <Course />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <Box
                        sx={{
                          flexGrow: 1,
                          mb: "20px",
                        }}>
                        <strong>Billing</strong>
                      </Box>
                      <Billing />
                    </Grid>
                  </div>

                  <Grid container spacing={2} sx={{ p: "20px 0px" }}>
                    <Grid item xs={6} lg={2}>
                      <ButtonComponent
                        onClick={CreateUser}
                        width={"100%"}
                        title={"Create User"}
                      />
                    </Grid>

                    <Grid item xs={6} lg={2}>
                      <ButtonComponent
                        onClick={UpdateUser}
                        width={"100%"}
                        title={"Update User"}
                      />
                    </Grid>

                    <Grid item xs={6} lg={2}>
                      <ButtonComponent width={"100%"} title={"Cancel"} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AddNewAccount;
