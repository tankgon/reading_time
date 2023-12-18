import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { ContentState, convertFromHTML, convertToRaw } from "draft-js";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import TextBox from "../../../../components/textBox";

//data
import { useState } from "react";
import data from "./data";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black",
}));

const editorStyle = {
  height: "200px",
  border: "1px solid #C0C0C0",
  padding: "0 20px",
};

function MailSetting() {
  const { DatalistMailSetting: listMailSetting } = data();

  // console.log(listMailSetting);

  const [sending, setSending] = useState(listMailSetting.Email_Sending_Address);
  const [receiving, setReceiving] = useState(
    listMailSetting.Email_Receiving_Address
  );
  const [host, setHost] = useState(listMailSetting.SMTP_Host);
  const [port, setPort] = useState(listMailSetting.SMTP_Port);
  const [security, setSecurity] = useState(listMailSetting.SMTP_Security);
  const [authentication, setAuthentication] = useState("");
  const [editer, setEditer] = useState("");

  console.log(
    listMailSetting?._Content == undefined ? null : listMailSetting?._Content
  );

  const [userId, setUserId] = useState(listMailSetting.SMTP_User_Id);
  const [password, setPassword] = useState(listMailSetting.SMTP_User_Password);

  const initialContent = convertFromHTML(
    listMailSetting?._Content !== undefined
      ? `${listMailSetting?._Content}`
      : ""
  );
  const contentState = ContentState.createFromBlockArray(
    initialContent.contentBlocks,
    initialContent.entityMap
  );

  // Chuyển đổi ContentState thành raw content
  const initialContentState = convertToRaw(contentState);

  const [editorContent, setEditorContent] = useState(null);

  // Chuyển đổi ContentState thành HTML
  const convertContentToHTML = (contentState) => {
    const rawContentState = convertToRaw(contentState);
    const contentHTML = rawContentState.blocks
      .map((block) => `<p>${block.text}</p>`)
      .join("");
    return contentHTML;
  };

  const handleContentStateChange = (contentState) => {
    setEditorContent(contentState);
    const contentHTML = convertContentToHTML(contentState);
    // Bạn có thể sử dụng contentHTML theo ý muốn của mình
    console.log(contentHTML);
  };
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/webSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Web Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/mailSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Mail Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/adminSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>Admin Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/smsSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>SMS Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/pgSetting"}
                  style={{ textDecoration: "none" }}>
                  <Item>PG Setting</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={8}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={12}>
                <Box
                  sx={{
                    borderTop: "1px solid #C0C0C0",
                    borderLeft: "1px solid #C0C0C0",
                    borderRight: "1px solid #C0C0C0",
                    marginTop: "52px",
                    p: "20px",
                    backgroundColor: "rgba(192, 192, 192, 0.2)",
                  }}>
                  Mail Setting
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                      Email Sending Address
                      <TextBox
                        value={
                          sending == undefined
                            ? listMailSetting.Email_Sending_Address
                            : sending
                        }
                        onChange={(e) => setSending(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      Email Receiving Address
                      <TextBox
                        value={
                          receiving == undefined
                            ? listMailSetting.Email_Receiving_Address
                            : receiving
                        }
                        onChange={(e) => setReceiving(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                      SMTP Host
                      <TextBox
                        value={
                          host == undefined ? listMailSetting.SMTP_Host : host
                        }
                        onChange={(e) => setHost(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      SMTP Port
                      <TextBox
                        value={
                          port == undefined ? listMailSetting.SMTP_Port : port
                        }
                        onChange={(e) => setPort(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      SMTP Security
                      <TextBox
                        value={
                          security == undefined
                            ? listMailSetting.SMTP_Security
                            : security
                        }
                        onChange={(e) => setSecurity(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      SMTP Authentication Required
                      <FormControl
                        sx={{
                          p: "8px",
                          display: "flex",
                        }}>
                        <RadioGroup
                          onChange={(e) => setAuthentication(e.target.value)}
                          row
                          name="row-radio-buttons-group">
                          <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label="Enable"
                          />
                          <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label="Disable"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      SMTP User ID
                      <TextBox
                        value={
                          userId == undefined
                            ? listMailSetting.SMTP_User_Id
                            : userId
                        }
                        onChange={(e) => setUserId(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      SMTP User Password
                      <TextBox
                        value={
                          password == undefined
                            ? listMailSetting.SMTP_User_Password
                            : password
                        }
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid xs={12}>
                <Box
                  sx={{
                    borderTop: "1px solid #C0C0C0",
                    borderLeft: "1px solid #C0C0C0",
                    borderRight: "1px solid #C0C0C0",
                    marginTop: "52px",
                    p: "20px",
                    backgroundColor: "rgba(192, 192, 192, 0.2)",
                  }}>
                  Email Template
                </Box>
                <Box
                  sx={{
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Box sx={{ height: "300px" }}>
                    <Editor
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      editorStyle={editorStyle}
                      initialContentState={initialContentState}
                      onContentStateChange={handleContentStateChange}
                    />
                  </Box>
                  Upload Email Template
                  <Box
                    component="section"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      border: "1px dashed grey",
                      mt: "20px",
                      width: "50px",
                      height: "50px", // Tùy chỉnh chiều cao nếu cần thiết
                    }}>
                    <InsertDriveFileIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default MailSetting;
