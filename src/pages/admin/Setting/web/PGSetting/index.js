import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TextBox from "../../../../components/TextBox";
//data
import web from "../../../../../services/api/admin/settings/web";
import ButtonComponent from "../../../../components/buttonComponent";
import data from "./data";
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function PGSetting() {
  const { DatalistPGSetting: listPGSetting } = data();

  const [merchant, setMerchant] = useState("");
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");
  const [id, setID] = useState("");
  const [pg, setPG] = useState("");
  const [url, setURL] = useState("");

  const Update = async () => {
    try {
      await web.actionPGSetting({
        Action: "PUT",
        Id: 1,
        Merchant_Indentification_Code: merchant
          ? merchant
          : listPGSetting.Merchant_Indentification_Code,
        API_Key: key ? key : listPGSetting.API_Key,
        API_Secret: secret ? secret : listPGSetting.API_Secret,
        Regular_Payment_Merchant_Id: id
          ? id
          : listPGSetting.Regular_Payment_Merchant_Id,
        PG_Provider: pg ? pg : listPGSetting.PG_Provider,
        Webhook_Url: url ? url : listPGSetting.Webhook_Url,
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
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
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

      {listPGSetting ? (
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
                    PG Settings
                  </Box>
                  <Box
                    sx={{
                      borderRadius: " 0 0 8px 8px",
                      border: "1px solid #C0C0C0",
                      p: "20px",
                    }}>
                    <Grid item xs={12} lg={12}>
                      Merchant Identification Code
                      <TextBox
                        onChange={(e) => setMerchant(e.target.value)}
                        value={
                          merchant
                            ? merchant
                            : listPGSetting.Merchant_Indentification_Code
                        }
                      />
                    </Grid>
                    <Grid container spacing={4}>
                      <Grid item xs={12} lg={12}>
                        <strong>API KEY</strong>
                        <TextBox
                          onChange={(e) => setKey(e.target.value)}
                          value={key ? key : listPGSetting.API_Key}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        <strong>API SECRET</strong>
                        <TextBox
                          onChange={(e) => setSecret(e.target.value)}
                          value={secret ? secret : listPGSetting.API_Secret}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Regular Payment Merchant ID
                        <TextBox
                          onChange={(e) => setID(e.target.value)}
                          value={
                            id ? id : listPGSetting.Regular_Payment_Merchant_Id
                          }
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        PG Provider
                        <TextBox
                          onChange={(e) => setPG(e.target.value)}
                          value={pg ? pg : listPGSetting.PG_Provider}
                        />
                      </Grid>

                      <Grid item xs={12} lg={12}>
                        Webhook URL
                        <TextBox
                          onChange={(e) => setURL(e.target.value)}
                          value={url ? url : listPGSetting.Webhook_Url}
                        />
                        Note: *Please reflect the above address in the Iamport
                        webhook URL.
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

export default PGSetting;
