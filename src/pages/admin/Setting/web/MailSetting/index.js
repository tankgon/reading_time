import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Grid, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonComponent from "../../../../components/buttonComponent";
//data
import { useEffect, useState } from "react";
import web from "../../../../../services/api/admin/settings/web";
import data from "./data";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black",
}));

function MailSetting() {
  const { DatalistMailSetting: listMailSetting } = data();
  const [file, setFile] = useState("");

  // console.log(listMailSetting);

  const [sending, setSending] = useState();
  const [receiving, setReceiving] = useState();
  const [host, setHost] = useState();
  const [port, setPort] = useState();
  const [security, setSecurity] = useState();
  const [authentication, setAuthentication] = useState();
  const [editer, setEditer] = useState();
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();

  const Update = async () => {
    try {
      const res = await web.putMailSetting({
        Id: 1,
        Email_Sending_Address: sending
          ? sending
          : listMailSetting.Email_Sending_Address,
        Email_Receiving_Address: receiving
          ? receiving
          : listMailSetting.Email_Receiving_Address,
        SMTP_Host: host ? host : listMailSetting.SMTP_Host,
        SMTP_Port: port ? port : listMailSetting.SMTP_Port,
        SMTP_Security: security ? security : listMailSetting.SMTP_Security,
        SMPT_Authentication_Required: authentication
          ? authentication
          : listMailSetting.SMPT_Authentication_Required,
        SMTP_User_Id: userId ? userId : listMailSetting.SMTP_User_Id,
        SMTP_User_Password: password
          ? password
          : listMailSetting.SMTP_User_Password,
        Email_Template: editer ? editer : listMailSetting.Email_Template,
        // Upload_Email_Template: imageUrl
        //   ? imageUrl
        //   : listMailSetting.Upload_Email_Template,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
    }
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    const htmlContent = `${listMailSetting.Email_Template}`;
    const blocksFromHTML = convertFromHTML(htmlContent);
    const initialContentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(initialContentState));
  }, [listMailSetting.Email_Template]);
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setEditer(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  console.log(editer);

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
                    borderRadius: "8px 8px 0 0",
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
                    borderRadius: " 0 0 8px 8px",
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                      Email Sending Address
                      <TextField
                        fullWidth
                        size="small"
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
                      <TextField
                        fullWidth
                        size="small"
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
                      <TextField
                        fullWidth
                        size="small"
                        value={
                          host == undefined ? listMailSetting.SMTP_Host : host
                        }
                        onChange={(e) => setHost(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                      SMTP Port
                      <TextField
                        fullWidth
                        size="small"
                        value={
                          port == undefined ? listMailSetting.SMTP_Port : port
                        }
                        onChange={(e) => setPort(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      SMTP Security
                      <TextField
                        fullWidth
                        size="small"
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
                          value={
                            listMailSetting.SMTP_Authentication_Required
                              ? listMailSetting.SMTP_Authentication_Required
                              : null
                          }
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
                      <TextField
                        fullWidth
                        size="small"
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
                      <TextField
                        fullWidth
                        size="small"
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
                    borderRadius: "8px 8px 0 0",
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
                    borderRadius: " 0 0 8px 8px",
                    border: "1px solid #C0C0C0",
                    p: "20px",
                  }}>
                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorStyle={{
                      height: "400px",
                      border: "1px solid #C0C0C0",
                      padding: "0 20px",
                    }}
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                  />
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
                      height: "50px",
                    }}>
                    <label
                      htmlFor="file_input"
                      id="fileLabel"
                      className="w-[40px] content-center">
                      <InsertDriveFileIcon />
                    </label>
                    <input
                      className="hidden w-20 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ m: "20px 0" }}>
            <ButtonComponent
              title={"Save"}
              pading={"8px 40px"}
              onClick={Update}
            />
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default MailSetting;
