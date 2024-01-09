import { Grid, MenuItem, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import SelectsBox from "../../../../components/selectsBox";
//data
import { toast } from "react-toastify";
import web from "../../../../../services/api/admin/settings/web";
import ButtonComponent from "../../../../components/buttonComponent";
import data from "./data";
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  color: "black",
}));

const sms = [
  {
    title: "Xin lỗi quý khách hệ thống chúng tôi đang bảo trì",
  },
  {
    title: "Xin lỗi quý khách chúng tôi không thể kết nối",
  },
];

function SMSSetting() {
  const { DatalistSMSSetting: listSMSSetting } = data();

  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [SMS, setSMS] = useState("");

  console.log(listSMSSetting);

  const Update = async () => {
    try {
      await web.actionSMSSetting({
        Action: "PUT",
        Id: 1,
        API_Key: key ? key : listSMSSetting.API_Key,
        API_Secret: secret ? secret : listSMSSetting.API_Secret,
        Sender_Number: number ? number : listSMSSetting.Sender_Number,
        Sender_Id: id ? id : listSMSSetting.Sender_Id,
        Send_SMS_Failure: SMS ? SMS : listSMSSetting.Send_SMS_Failure,
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
                  borderBottom: "1px solid #C0C0C0",
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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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

      {listSMSSetting ? (
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
                    SMS settings
                  </Box>
                  <Box
                    sx={{
                      borderRadius: " 0 0 8px 8px",
                      border: "1px solid #C0C0C0",
                      p: "20px",
                    }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <strong>API KEY</strong>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setKey(e.target.value)}
                          value={key ? key : listSMSSetting.API_Key}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>API SECRET</strong>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setSecret(e.target.value)}
                          value={secret ? secret : listSMSSetting.API_Secret}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Sender Number
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setNumber(e.target.value)}
                          value={number ? number : listSMSSetting.Sender_Number}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>KakaoTalk Messaging Service</strong>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Sender ID
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setId(e.target.value)}
                          value={id ? id : listSMSSetting.Sender_Id}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Send SMS to customer in case of failure
                        <SelectsBox
                          size={"small"}
                          fullWidth={"fullWidth"}
                          value={
                            SMS
                              ? SMS
                              : listSMSSetting.Send_SMS_Failure
                              ? listSMSSetting.Send_SMS_Failure
                              : null
                          }
                          children={sms.map((item, index) => {
                            return (
                              <MenuItem
                                onClick={() => setSMS(item.title)}
                                key={index}
                                value={item.title}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                        />
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
            </Box>
          </Grid>
        </Grid>
      ) : null}
    </MDBox>
  );
}

export default SMSSetting;
