import ImageIcon from "@mui/icons-material/Image";
import AspectRatio from "@mui/joy/AspectRatio";
import { Card, Grid, MenuItem, Typography } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TimezoneSelect from "react-timezone-select";
import { toast } from "react-toastify";
import teachers from "../../../../services/api/admin/teachers";
import Clound from "../../../../services/clound/index.js";
import Storage from "../../../../services/storage";
import DotText from "../../../components/DotText.js";
import FilePick from "../../../components/FilePick";
import OverlayCheckbox from "../../../components/OverlayCheckbox";
import TextBox from "../../../components/TextBox.js";
import TextCheckBox from "../../../components/TextCheckBox";
import TextareaComment from "../../../components/TextareaComment";
import ButtonComponent from "../../../components/buttonComponent";
import ButtonUpLoadFile from "../../../components/buttonUpLoadFile";
import SelectBox from "../../../components/selectsBox";
import data from "./Data";
import Character from "./components/ComboCheck/Character";
import LessonStyle from "./components/ComboCheck/LessonStyle ";
import Comment from "./components/ListComments/Comment.js";
import Todo from "./components/ListComments/StudentReview.js";
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
  const character = Storage.getCHARACTER();
  const lesson = Storage.getLESSON();
  const student_review = Storage.getSTUDENTREVIEW();
  const comment = Storage.getCOMMENT();

  const { DatalistCountry: listCountry } = data();

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [imageSrc, setImageSrc] = useState(Storage.getDATADETAIL()?.Image);
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

  const [teacherName, setTeacherName] = useState(
    Storage.getDATADETAIL()?.Teacher_Name
  );
  const [nickname, setNickname] = useState(Storage.getDATADETAIL()?.Nick_Name);
  const [email, setEmail] = useState(Storage.getDATADETAIL()?.Email);
  const [password, setPassword] = useState(Storage.getDATADETAIL()?.Password);
  // const [phone, setPhone] = useState(Storage.getDATADETAIL()?.);
  const [gender, setGender] = useState(Storage.getDATADETAIL()?.Gender);
  const [birth, setBirth] = useState();
  const [country, setCountry] = useState(Storage.getDATADETAIL()?.Country);
  // const [timezone, setTimezone] = useState(Storage.getDATADETAIL()?.);
  const [contractType, setContractType] = useState(
    Storage.getDATADETAIL()?.Contract_Type
  );
  const [contract, setContract] = useState(Storage.getDATADETAIL()?.Contract);
  const [startDate, setStartDate] = useState();
  const [resignationDay, setResignationDay] = useState();
  const [career, setCareer] = useState(Storage.getDATADETAIL()?.Career);
  const [using_The_Editor, setUsing_The_Editor] = useState(
    Storage.getDATADETAIL()?.Description_Career
  );

  const [certificate, setCertificate] = useState(
    Storage.getDATADETAIL()?.Certificate
  );

  const [resume, setResume] = useState();

  const [status, setStatus] = useState({});
  const handleChange = (event) => {
    setStatus((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Employed, Resigned, Absence } = status;
  const selectedStatus = Object.keys(status).filter((key) => status[key]);

  const [level, setLevel] = useState({ Best: true, Good: true, New: true });
  const handleChange1 = (event) => {
    setLevel((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Best, Good, New } = level;

  const [specialfeature, setSpecialfeature] = useState({});
  const handleChange2 = (event) => {
    setSpecialfeature((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { a, b, c } = specialfeature;

  const [selfintroduction, setSelfintroduction] = useState();

  const [recommendedstudent, setRecommendedstudent] = useState({});
  const handleChange3 = (event) => {
    setRecommendedstudent((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Lower, Higher, Middle } = recommendedstudent;

  const [Recommendedlevel, setRecommendedlevel] = useState({});
  const handleChange4 = (event) => {
    setRecommendedlevel((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Beginner, Basic, Intermediate, Advanced } = Recommendedlevel;

  const [video, setVideo] = useState();

  const CreateTeacher = async () => {
    // const certificateFileURLPromises = certificateFile.map(async (item) => {
    //   return await Clound(item);
    // });
    // const certificateFileURLs = await Promise.all(certificateFileURLPromises);
    // const formattedUrls = certificateFileURLs.map((url) => `${url}`).join(";");

    const contractURL = await Clound(contract);
    const resumeURL = await Clound(resume);
    const videoURL = await Clound(video);
    const imageCloundURL = await Clound(imageURL);
    try {
      await teachers.postTeacher({
        Teacher_Name: teacherName,
        Nick_Name: nickname,
        Email: email,
        Password: password,
        Gender: gender,
        Birth: birth,
        Country: country,
        Time_Zone: selectedTimezone?.label,
        Contract_Type: contractType,
        Contract: contractURL,
        Start_Date: startDate,
        Resignation_Day: resignationDay,
        Career: career,
        Description_Career: using_The_Editor,

        Certificate: certificate,

        Resume: resumeURL,
        Image: imageCloundURL,
        Team_Name: "Team A",
        Status: selectedStatus,
        Level: "sd",
        Special_Feature: "sd",
        Self_Introduction: selfintroduction,
        Recommended_Student: "asd",
        Recommended_Level: "asd",
        Character: character?.character,
        Lesson_Style: lesson?.lesson,
        Video: videoURL,
        Student_Review: student_review.student_review,
        Comment: comment.comment,

        // Phone: phone,
        // Working_Hours: "Monday-Friday, 9 AM - 5 PM",
      });
      toast.success(`Successful update!`);
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
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4} sx={{ textAlign: "center" }}>
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
              <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                  <strong>GENERAL</strong>
                  <DotText
                    classColor={"red"}
                    children={
                      <TextBox
                        size="small"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                      />
                    }
                    text="Teacher Name"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextBox
                        size="small"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                      />
                    }
                    text="Nickname"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextBox
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    }
                    text="E-mail Address(Log-in)"
                  />
                  <DotText
                    classColor={"red"}
                    children={
                      <TextBox
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    }
                    text="Password"
                  />
                  {/* <DotText
                    classColor={"red"}
                    children={
                      <TextBox
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
                  <DotText
                    children={
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                    }
                    text="Timezone"
                  />
                  <DotText
                    children={
                      <TextBox
                        size="small"
                        value={contractType}
                        onChange={(e) => setContractType(e.target.value)}
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
                        <DemoContainer
                          components={["DatePicker", "DatePicker"]}>
                          <DatePicker
                            value={startDate}
                            onChange={(day) => setStartDate(day)}
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
                        <DemoContainer
                          components={["DatePicker", "DatePicker"]}>
                          <DatePicker
                            value={resignationDay}
                            onChange={(day) => setResignationDay(day)}
                            format="DD-MM-YYYY"
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    }
                    text="Resignation Day"
                  />
                  <DotText
                    children={
                      <TextBox
                        size="small"
                        value={career}
                        onChange={(e) => setCareer(e.target.value)}
                      />
                    }
                    text="Career"
                  />
                  <Box sx={{ m: "20px 0" }}>
                    <TextareaComment
                      value={using_The_Editor}
                      onChange={(e) => setUsing_The_Editor(e.target.value)}
                    />
                  </Box>
                  {/* <DotText
                    children={
                      <Box sx={{ m: "20px 0" }}>
                        <FilePick
                          inputProps={{ accept: ".txt, .pdf" }}
                          onChange={(e) => setCertificate(e)}
                          value={certificate}
                        />
                      </Box>
                    }
                    text="Certificate"
                  /> */}

                  <DotText
                    children={
                      <FilePick
                        inputProps={{ accept: "audio/*, .pdf" }}
                        onChange={(e) => setResume(e)}
                        value={resume}
                      />
                    }
                    text="Resume"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <strong>Profile</strong>
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Employed"}
                            checked={Employed}
                            onChange={handleChange}
                            name="Employed"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Resigned"}
                            checked={Resigned}
                            onChange={handleChange}
                            name="Resigned"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Leave of Absence"}
                            checked={Absence}
                            onChange={handleChange}
                            name="Leave of Absence"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Status"
                  />
                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Best"}
                            checked={Best}
                            onChange={handleChange1}
                            name="Best"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Good"}
                            checked={Good}
                            onChange={handleChange1}
                            name="Good"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"New"}
                            checked={New}
                            onChange={handleChange1}
                            name="New"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Level"
                  />
                  <TextCheckBox
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Best teacher"}
                            checked={a}
                            onChange={handleChange2}
                            name="Best teacher"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Popular teacher"}
                            checked={b}
                            onChange={handleChange2}
                            name="Popular teacher"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Best responsible teacher"}
                            checked={c}
                            onChange={handleChange2}
                            name="Best responsible teacher"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Special feature"
                  />
                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Box sx={{ m: "20px 0" }}>
                        <TextareaComment
                          value={selfintroduction}
                          onChange={(e) => setSelfintroduction(e.target.value)}
                        />
                      </Box>
                    }
                    text="Self introduction"
                  />
                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Lower elementary school"}
                            checked={Lower}
                            onChange={handleChange3}
                            name="Lower elementary school"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Higher elementary school"}
                            checked={Higher}
                            onChange={handleChange3}
                            name="Higher elementary school"
                          />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <OverlayCheckbox
                            label={"Middle school and above"}
                            checked={Middle}
                            onChange={handleChange3}
                            name="Middle school and above"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Recommended student"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={
                      <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Beginner(aa)"}
                            checked={Beginner}
                            onChange={handleChange4}
                            name="Beginner(aa)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Basic(A~J)"}
                            checked={Basic}
                            onChange={handleChange4}
                            name="Basic(A~J)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Intermediate(K ~P)"}
                            checked={Intermediate}
                            onChange={handleChange4}
                            name="Intermediate(K ~P)"
                          />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                          <OverlayCheckbox
                            label={"Advanced(Beyond Q)"}
                            checked={Advanced}
                            onChange={handleChange4}
                            name="Advanced(Beyond Q)"
                          />
                        </Grid>
                      </Grid>
                    }
                    text="Recommended level"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={<Character />}
                    text="Character"
                  />

                  <TextCheckBox
                    classColor={"red"}
                    children={<LessonStyle />}
                    text="Lesson Style"
                  />

                  <TextCheckBox
                    children={
                      <FilePick
                        inputProps={{ accept: "video/*" }}
                        onChange={(e) => setVideo(e)}
                        value={video}
                      />
                    }
                    text="Video"
                  />

                  <TextCheckBox children={<Todo />} text="Student Review" />
                  <TextCheckBox children={<Comment />} text="Comment" />
                </Grid>

                <ButtonComponent
                  onClick={CreateTeacher}
                  title={"Create Teacher"}
                  marginRight={"8px"}
                />
                <ButtonComponent title={"Save"} marginRight={"8px"} />
                <ButtonComponent title={"Cancel"} marginRight={"8px"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AddNewAccount;
