import { Checkbox, Grid, MenuItem, Select, TextField } from "@mui/material";
import MDBox from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

const mainPP = [
  {
    title: "Raz-Kids",
  },
];

function AdminSetting() {
  const {
    DatalistAdminSetting: listAdminSetting,
    DataListMenuPC: mainPC,
    DataListMenuMB: mainMB,
    DataListService: mainPP,
  } = data();

  const [mainmenumobile, setMain_Menu_Mobile] = useState([]);
  const [mainmenupC, setMain_Menu_PC] = useState([]);
  const [mainpageproduct, setMain_Page_Product] = useState([]);
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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMain_Menu_PC(typeof value == "string" ? value.split(",") : value);
  };

  console.log(mainmenupC);

  const Update = async () => {
    try {
      const res = await web.putAdminSetting({
        Id: 1,
        MainMenu_PC_Name: mainmenupC
          ? mainmenupC
          : listAdminSetting.MainMenu_PC_Name,
        MainMenu_Mobile_Name: mainmenumobile
          ? mainmenumobile
          : listAdminSetting.MainMenu_Mobile_Name,
        MainPage_Name: mainpageproduct
          ? mainpageproduct
          : listAdminSetting.MainPage_Name,
        Paypal_Account: account ? account : listAdminSetting.Paypal_Account,
        Paypal_Client_Id: client_Id
          ? client_Id
          : listAdminSetting.Paypal_Client_Id,
        Free_Trial_Product: freetrialproduct
          ? freetrialproduct
          : listAdminSetting.Free_Trial_Product,
        Max_Point_On_Month: maxpointonmonth
          ? maxpointonmonth
          : listAdminSetting.Max_Point_On_Month,
        Stripe_Publishable_Key: publishablekey
          ? publishablekey
          : listAdminSetting.Stripe_Publishable_Key,
        Paypal_Secret: secret ? secret : listAdminSetting.Paypal_Secret,
        Stripe_Secret_Key: secretkey
          ? secretkey
          : listAdminSetting.Stripe_Secret_Key,
        Stripe_Webhook_Url: webHookurl
          ? webHookurl
          : listAdminSetting.Stripe_Webhook_Url,
        Zoom_Api_Key: zoomapikey ? zoomapikey : listAdminSetting.Zoom_Api_Key,
        Zoom_Api_Secret: zoomapisecret
          ? zoomapisecret
          : listAdminSetting.Zoom_Api_Secret,
      });
      if (res.statusCode == 200) {
        toast.success(`Successful update!`);
      } else toast.error(`Can't update!`);
    } catch (err) {
      console.log(err);
      toast.error(`Unstable transmission line!`);
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
                      borderRadius: "8px 8px 0 0",
                      borderTop: "1px solid #C0C0C0",
                      borderLeft: "1px solid #C0C0C0",
                      borderRight: "1px solid #C0C0C0",
                      marginTop: "52px",
                      p: "20px",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                    }}>
                    Admin Setting
                  </Box>
                  <Box
                    sx={{
                      borderRadius: " 0 0 8px 8px",
                      border: "1px solid #C0C0C0",
                      p: "20px",
                    }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <strong>Main Menu</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Menu(PC)
                        <Select
                          fullWidth
                          size="small"
                          multiple
                          value={
                            mainmenupC
                              ? mainmenupC
                              : listAdminSetting.MainMenu_PC_Name
                              ? listAdminSetting.MainMenu_PC_Name
                              : null
                          }
                          onChange={(event) => {
                            const {
                              target: { value },
                            } = event;
                            setMain_Menu_PC(
                              typeof value == "string"
                                ? value.split(",")
                                : value
                            );
                          }}
                          renderValue={(selected) => selected.join(", ")}>
                          {mainPC.map((item, index) => (
                            <MenuItem key={index} value={item.MainMenu_PC_Name}>
                              <Checkbox
                                checked={
                                  mainmenupC.indexOf(item.MainMenu_PC_Name) > -1
                                }
                              />
                              <ListItemText primary={item.MainMenu_PC_Name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Menu (Mobile)
                        <Select
                          fullWidth
                          size="small"
                          multiple
                          value={
                            mainmenumobile
                              ? mainmenumobile
                              : listAdminSetting.MainMenu_Mobile_Name
                              ? listAdminSetting.MainMenu_Mobile_Name
                              : null
                          }
                          onChange={(event) => {
                            const {
                              target: { value },
                            } = event;
                            setMain_Menu_Mobile(
                              typeof value == "string"
                                ? value.split(",")
                                : value
                            );
                          }}
                          renderValue={(selected) => selected.join(", ")}>
                          {mainMB.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.MainMenu_Mobile_Name}>
                              <Checkbox
                                checked={
                                  mainmenumobile.indexOf(
                                    item.MainMenu_Mobile_Name
                                  ) > -1
                                }
                              />
                              <ListItemText
                                primary={item.MainMenu_Mobile_Name}
                              />
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Product</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Main Page Product
                        {/* <SelectsBox
                          size={"small"}
                          fullWidth={"fullWidth"}
                          value={
                            mainpageproduct
                              ? mainpageproduct
                              : listAdminSetting.Main_Page_Product
                              ? listAdminSetting.Main_Page_Product
                              : null
                          }
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
                        /> */}
                        <Select
                          fullWidth
                          size="small"
                          multiple
                          value={
                            mainpageproduct
                              ? mainpageproduct
                              : listAdminSetting.MainPage_Product_Mobile_Name
                              ? listAdminSetting.MainPage_Product_Mobile_Name
                              : null
                          }
                          onChange={(event) => {
                            const {
                              target: { value },
                            } = event;
                            setMain_Page_Product(
                              typeof value == "string"
                                ? value.split(",")
                                : value
                            );
                          }}
                          renderValue={(selected) => selected.join(", ")}>
                          {mainPP.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.MainPage_Product_Mobile_Name}>
                              <Checkbox
                                checked={
                                  mainpageproduct.indexOf(
                                    item.MainPage_Product_Mobile_Name
                                  ) > -1
                                }
                              />
                              <ListItemText
                                primary={item.MainPage_Product_Mobile_Name}
                              />
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>ZOOM</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        ZOOM API KEY
                        <TextField
                          fullWidth
                          size="small"
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
                        <TextField
                          fullWidth
                          size="small"
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
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setPublishable_Key(e.target.value)}
                          value={
                            publishablekey
                              ? publishablekey
                              : listAdminSetting.Stripe_Publishable_Key
                          }
                        />
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Secret Key
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setSecret_Key(e.target.value)}
                          value={
                            secretkey
                              ? secretkey
                              : listAdminSetting.Stripe_Secret_Key
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>WEBHOOK URL</strong>
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setWebHook_Url(e.target.value)}
                          value={
                            webHookurl
                              ? webHookurl
                              : listAdminSetting.Stripe_Webhook_Url
                          }
                        />
                        * Note: The above URL must be set in the Stripe webhook
                        for it to function correctly. The webhooks that need to
                        be registered are: charge.failed, charge.succeeded,
                        charge.refunded
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>paypal</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Account
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setAccount(e.target.value)}
                          value={
                            account ? account : listAdminSetting.Paypal_Account
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Client ID
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setClient_Id(e.target.value)}
                          value={
                            client_Id
                              ? client_Id
                              : listAdminSetting.Paypal_Client_Id
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Secret
                        <TextField
                          fullWidth
                          size="small"
                          onChange={(e) => setSecret(e.target.value)}
                          value={
                            secret ? secret : listAdminSetting.Paypal_Secret
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>Free-Trial</strong>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        Free-Trial Product
                        <TextField
                          fullWidth
                          size="small"
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
                        <TextField
                          fullWidth
                          size="small"
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
