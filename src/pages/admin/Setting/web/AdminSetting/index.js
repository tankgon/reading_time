import { Grid, MenuItem } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import SelectsBox from "../../../../components/selectsBox";
import TextBox from "../../../../components/textBox";
//data
import { useState } from "react";
import web from "../../../../../services/api/admin/settings/web";
import ButtonComponent from "../../../../components/buttonComponent";
import data from "./data";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  paddingTop: "40px",
  cursor: "pointer",
  color: "black",
}));

const mainPC = [
  {
    title: "Main Menu(PC)",
  },
];

const mainMB = [
  {
    title: "Main Menu(Mobile)",
  },
];

const mainPP = [
  {
    title: "Raz-Kids",
  },
];

function AdminSetting() {
  const { DatalistAdminSetting: listAdminSetting } = data();

  const [mainmenumobile, setMain_Menu_Mobile] = useState("");
  const [mainmenupC, setMain_Menu_PC] = useState("");
  const [mainpageproduct, setMain_Page_Product] = useState("");

  const [account, setAccount] = useState("");
  const [client_Id, setClient_Id] = useState("");
  const [freetrialproduct, setFree_Trial_Product] = useState("");
  const [maxpointonmonth, setMax_Point_On_Month] = useState("");
  const [publishablekey, setPublishable_Key] = useState("");
  const [secret, setSecret] = useState("");
  const [secretkey, setSecret_Key] = useState("");
  const [webHookurl, setWebHook_Url] = useState("");
  const [zoomapikey, setZoom_Api_Key] = useState("");
  const [zoomapisecret, setZoom_Api_Secret] = useState("");

  const Update = async () => {
    try {
      await web.actionAdminSetting({
        Action: "PUT",
        Id: 2,
        Main_Menu_PC: mainmenupC ? mainmenupC : listAdminSetting.Main_Menu_PC,
        Main_Menu_Mobile: mainmenumobile
          ? mainmenumobile
          : listAdminSetting.Main_Menu_Mobile,
        Main_Page_Product: mainpageproduct
          ? mainpageproduct
          : listAdminSetting.Main_Page_Product,
        Account: account ? account : listAdminSetting.Account,
        Client_Id: client_Id ? client_Id : listAdminSetting.Client_Id,
        Free_Trial_Product: freetrialproduct
          ? freetrialproduct
          : listAdminSetting.Free_Trial_Product,
        Max_Point_On_Month: maxpointonmonth
          ? maxpointonmonth
          : listAdminSetting.Max_Point_On_Month,
        Publishable_Key: publishablekey
          ? publishablekey
          : listAdminSetting.Publishable_Key,
        //dư 1 cai
        Secret: secret ? secret : listAdminSetting.Secret,
        Secret_Key: secretkey ? secretkey : listAdminSetting.Secret_Key,
        WebHook_Url: webHookurl ? webHookurl : listAdminSetting.WebHook_Url,

        Zoom_Api_Key: zoomapikey ? zoomapikey : listAdminSetting.Zoom_Api_Key,

        Zoom_Api_Secret: zoomapisecret
          ? zoomapisecret
          : listAdminSetting.Zoom_Api_Secret,
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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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

      {listAdminSetting ? (
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
                      <Grid item xs={12} lg={12}>
                        <strong>Main Menu</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Menu(PC)
                        <SelectsBox
                          size={"small"}
                          fullWidth={"fullWidth"}
                          defaultValue={listAdminSetting.Main_Menu_PC}
                          value={mainmenupC}
                          children={mainPC.map((item, index) => {
                            return (
                              <MenuItem
                                onClick={() => setMain_Menu_PC(item.title)}
                                key={index}
                                value={item.title}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                        />
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Menu (Mobile)
                        <SelectsBox
                          size={"small"}
                          fullWidth={"fullWidth"}
                          defaultValue={listAdminSetting.Main_Menu_Mobile}
                          value={mainmenumobile}
                          children={mainMB.map((item, index) => {
                            return (
                              <MenuItem
                                onClick={() => setMain_Menu_Mobile(item.title)}
                                key={index}
                                value={item.title}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Product</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Page Product
                        <SelectsBox
                          size={"small"}
                          fullWidth={"fullWidth"}
                          value={mainpageproduct}
                          defaultValue={listAdminSetting.Main_Page_Product}
                          children={mainPP.map((item, index) => {
                            return (
                              <MenuItem
                                onClick={() => setMain_Page_Product(item.title)}
                                key={index}
                                value={item.title}>
                                {item.title}
                              </MenuItem>
                            );
                          })}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>ZOOM</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        ZOOM API KEY
                        <TextBox
                          onChange={(e) => setZoom_Api_Key(e.target.value)}
                          value={
                            zoomapikey
                              ? zoomapikey
                              : listAdminSetting.Zoom_Api_Key
                          }
                        />
                        * Note: The Zoom API KEY can be obtained by registering
                        JWT on the Zoom developer page.
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        ZOOM API SECRET
                        <TextBox
                          onChange={(e) => setZoom_Api_Secret(e.target.value)}
                          value={
                            zoomapisecret
                              ? zoomapisecret
                              : listAdminSetting.Zoom_Api_Secret
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Stripe Payment Settings</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Publishable key
                        <TextBox
                          onChange={(e) => setPublishable_Key(e.target.value)}
                          value={
                            publishablekey
                              ? publishablekey
                              : listAdminSetting.Publishable_Key
                          }
                        />
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Secret Key
                        <TextBox
                          onChange={(e) => setSecret_Key(e.target.value)}
                          value={
                            secretkey ? secretkey : listAdminSetting.Secret_Key
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>WEBHOOK URL</strong>
                        <TextBox
                          onChange={(e) => setWebHook_Url(e.target.value)}
                          value={
                            webHookurl
                              ? webHookurl
                              : listAdminSetting.WebHook_Url
                          }
                        />
                        * Note: The above URL must be set in the Stripe webhook
                        for it to function correctly. The webhooks that need to
                        be registered are: charge.failed, charge.succeeded,
                        charge.refunded
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Payple</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Account
                        <TextBox
                          onChange={(e) => setAccount(e.target.value)}
                          value={account ? account : listAdminSetting.Account}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Client ID
                        <TextBox
                          onChange={(e) => setClient_Id(e.target.value)}
                          value={
                            client_Id ? client_Id : listAdminSetting.Client_Id
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Free-Trial</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Free-Trial Product
                        <TextBox
                          onChange={(e) =>
                            setFree_Trial_Product(e.target.value)
                          }
                          value={
                            freetrialproduct
                              ? freetrialproduct
                              : listAdminSetting.Free_Trial_Product
                          }
                        />
                        Note: *If not selected, a free trial voucher will not be
                        issued upon promotion application.
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Teacher Point</strong>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Maximum Points/Month
                        <TextBox
                          onChange={(e) =>
                            setMax_Point_On_Month(e.target.value)
                          }
                          value={
                            maxpointonmonth
                              ? maxpointonmonth
                              : listAdminSetting.Max_Point_On_Month
                          }
                        />
                      </Grid>
                    </Grid>
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
      ) : null}
    </MDBox>
  );
}

export default AdminSetting;
