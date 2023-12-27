import { Grid, MenuItem } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import teachers from "../../../../services/api/admin/teachers/index.js";
import Clound from "../../../../services/clound/index.js";
import Storage from "../../../../services/local";
import DotText from "../../../components/DotText";
import FilePickVideo from "../../../components/FilePickVideo";
import OverlayCheckbox from "../../../components/OverlayCheckbox";
import TextareaComment from "../../../components/TextareaComment";
import ButtonComponent from "../../../components/buttonComponent";
import ButtonUpLoadFile from "../../../components/buttonUpLoadFile";
import SelectBox from "../../../components/selectsBox";
import TextBox from "../../../components/textBox";
import data from "./Data";
import Character from "./components/ComboCheck/Character";
import LessonStyle from "./components/ComboCheck/LessonStyle ";
import Comment from "./components/ListComments/Comment.js";
import Todo from "./components/ListComments/StudentReview.js";
import TextCheckBox from "./components/TextCheckBox";
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
  const character = Storage.getCHARACTER();
  const lesson = Storage.getLESSON();
  const student_review = Storage.getSTUDENTREVIEW();
  const comment = Storage.getCOMMENT();

  const { DatalistCountry: listCountry } = data();

  const [teacherName, setTeacherName] = useState();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [birth, setBirth] = useState();
  const [country, setCountry] = useState();
  const [timezone, setTimezone] = useState();
  const [contractType, setContractType] = useState();
  const [contract, setContract] = useState();
  const [startDate, setStartDate] = useState();
  const [resignationDay, setResignationDay] = useState();
  const [career, setCareer] = useState();
  const [using_The_Editor, setUsing_The_Editor] = useState();
  const [certificate, setCertificate] = useState([]);
  const addCertificate = (newCertificate) => {
    const newCertificateName = newCertificate.target.files[0].name;
    if (!certificate.includes(newCertificateName)) {
      setCertificate((prevCertificates) => [
        ...prevCertificates,
        newCertificateName,
      ]);
    } else {
      console.log(`Certificate "${newCertificateName}" already exists.`);
    }
  };
  // const formattedCertificate = certificate.join(";");

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

  const [level, setLevel] = useState({});
  const handleChange1 = (event) => {
    setLevel((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Best, Good, New } = level;
  const selectedLevel = Object.keys(level).filter((key) => level[key]);

  const [specialfeature, setSpecialfeature] = useState({});
  const handleChange2 = (event) => {
    setSpecialfeature((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { a, b, c } = specialfeature;
  const selectedSpecialfeature = Object.keys(specialfeature).filter(
    (key) => specialfeature[key]
  );

  const [selfintroduction, setSelfintroduction] = useState();

  const [recommendedstudent, setRecommendedstudent] = useState({});
  const handleChange3 = (event) => {
    setRecommendedstudent((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Lower, Higher, Middle } = recommendedstudent;
  const selectedrecommendedstudent = Object.keys(recommendedstudent).filter(
    (key) => recommendedstudent[key]
  );

  const [Recommendedlevel, setRecommendedlevel] = useState({});
  const handleChange4 = (event) => {
    setRecommendedlevel((e) => ({
      ...e,
      [event.target.name]: event.target.checked,
    }));
  };
  const { Beginner, Basic, Intermediate, Advanced } = Recommendedlevel;
  const selectedRecommendedlevel = Object.keys(Recommendedlevel).filter(
    (key) => Recommendedlevel[key]
  );
  const [video, setVideo] = useState();

  console.log(contract);

  const CreateTeacher = async () => {
    try {
      await teachers.actionTeacher({
        Action: "POST",
        Teacher_Name: teacherName,
        Nick_Name: nickname,
        Email: email,
        Password: password,
        Gender: gender,
        Birth: birth,
        Country: "Korea",
        Timezone: "UTC-5",
        Contract_Type: contractType,
        Contract: contract,
        Start_Date: startDate,
        Resignation_Day: resignationDay,
        Career: career,
        Using_The_Editor: using_The_Editor,
        Certificate: certificate.join(";"),
        Resume: resume,
        Status: selectedStatus.join(";"),
        Level: selectedLevel.join(";"),
        Special_Feature: selectedSpecialfeature.join(";"),
        Self_Introduction: selfintroduction,
        Recommended_Student: selectedrecommendedstudent.join(";"),
        Recommended_Level: selectedRecommendedlevel.join(";"),
        Character: character.character,
        Lesson_Style: lesson.lesson,
        Video: video,
        Student_Review: student_review.student_review,
        Comment: comment.comment,
        Image: "link_to_image",
        Team: "Team A",
        Working_Hours: "Monday-Friday, 9 AM - 5 PM",
      });
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
              <Box
                sx={{
                  flexGrow: 1,
                  p: "20px",
                  color: "#7F7F7F",
                }}>
                {/* <div class="mb-4">Add New Teacher</div> */}
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </Box>
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
                      <SelectBox
                        fullWidth={"fullWidth"}
                        sx={{ m: " 8px 0" }}
                        size={"small"}
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        children={genderA.map((item, index) => {
                          return (
                            <MenuItem key={index} value={item.value}>
                              {item.title}
                            </MenuItem>
                          );
                        })}
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
                      <FilePickVideo
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
                      onChange={(e) => setUsing_The_Editor(e.target.value)}
                    />
                  </Box>
                  <DotText
                    itemButton={
                      <ButtonUpLoadFile
                        id={"input1"}
                        onChange={(e) => addCertificate(e)}
                      />
                    }
                    children={
                      <Grid container>
                        {certificate.length > 0 ? (
                          certificate.map((item, index) => (
                            <Grid key={index} item xs={12} lg={12}>
                              <TextBox
                                disabled={true}
                                value={item}
                                size="small"
                              />
                            </Grid>
                          ))
                        ) : (
                          <Grid item xs={12} lg={12}>
                            <TextBox
                              disabled={true}
                              value={"thêm file"}
                              size="small"
                            />
                          </Grid>
                        )}
                      </Grid>
                    }
                    text="Certificate"
                  />
                  <DotText
                    children={
                      <FilePickVideo
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
                      <FilePickVideo
                        inputProps={{ accept: "video/*" }}
                        onChange={(e) => setVideo(e)}
                        value={video}
                      />
                    }
                    text="Video"
                  />

                  <TextCheckBox children={<Todo />} text="Student Review" />
                  <TextCheckBox children={<Comment />} text="Student Review" />
                </Grid>

                <ButtonComponent
                  onClick={CreateTeacher}
                  title={"Create Teacher"}
                  marginRight={"8px"}
                />
                <ButtonComponent
                  // onClick={Clound(contract)}
                  title={"Save"}
                  marginRight={"8px"}
                />
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
