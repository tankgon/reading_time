import { Grid, MenuItem } from "@mui/material";
import MDBox from "@mui/material/Box";
import Box from "@mui/system/Box";
import styled from "@mui/system/styled";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../../components/buttonComponent";
import SelectBox from "../../../../components/selectsBox";
//data
import { toast } from "react-toastify";
import terms from "../../../../../services/api/admin/settings/terms";
import data from "./data";
const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  minHeight: "16px",
  color: "black",
  paddingTop: "40px",
}));

function PromotionTerms() {
  const { DatalistPromotion: listPromotion, DatalistCountry: listCountry } =
    data();
  const [country, setCountry] = useState();

  const [editer, setEditer] = useState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    const htmlContent = `${listPromotion.Text_Field}`;
    const blocksFromHTML = convertFromHTML(htmlContent);
    const initialContentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(initialContentState));
  }, [listPromotion.Text_Field]);
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setEditer(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  console.log(editer);

  const Update = async () => {
    try {
      const res = await terms.putPromotionTermsAndConditions({
        Id: 1,
        // Title: 1,
        Text_Field: editer,
        Country: country,
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
          <Box
            sx={{
              borderRadius: "8px",
              flexGrow: 1,
              backgroundColor: "rgba(192, 192, 192, 0.2)",
              p: "20px",
              mb: "20px",
            }}>
            Terms Management
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
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link to={"/setting/terms"} style={{ textDecoration: "none" }}>
                  <Item>Terms of Use</Item>
                </Link>
              </Grid>
              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/privacyPolicy"}
                  style={{ textDecoration: "none" }}>
                  <Item>Privacy Policy</Item>
                </Link>
              </Grid>
              <Grid
                xs={3}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/paymentRefund"}
                  style={{ textDecoration: "none" }}>
                  <Item>Payment and Refund Policy</Item>
                </Link>
              </Grid>
              <Grid
                xs={3}
                sx={{
                  borderTop: "1px solid #C0C0C0",
                  borderLeft: "1px solid #C0C0C0",
                  borderRight: "1px solid #C0C0C0",
                }}>
                <Link
                  to={"/setting/promotionTerms"}
                  style={{ textDecoration: "none" }}>
                  <Item>Promotion Terms and Conditions</Item>
                </Link>
              </Grid>

              <Grid
                xs={2}
                sx={{
                  borderBottom: "1px solid #C0C0C0",
                }}>
                {/* <Item>PG Setting</Item> */}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {listPromotion ? (
        <>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Grid item xs={12} lg={8}>
              <Grid
                container
                sx={{
                  justifyContent: "flex-end",
                }}>
                <Grid xs={12} lg={3}>
                  <SelectBox
                    sx={{ m: "8px 0" }}
                    fullWidth={"fullWidth"}
                    size={"small"}
                    value={
                      country
                        ? country
                        : listPromotion.Country
                        ? listPromotion.Country
                        : null
                    }
                    onChange={(e) => setCountry(e.target.value)}
                    children={listCountry.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.name}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  />
                </Grid>
              </Grid>
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
                  <Grid
                    xs={2}
                    sx={{
                      borderRadius: "8px 0 0 8px",
                      borderTop: "1px solid #C0C0C0",
                      borderLeft: "1px solid #C0C0C0",
                      borderBottom: "1px solid #C0C0C0",
                      backgroundColor: "rgba(192, 192, 192, 0.2)",
                    }}>
                    <Box
                      sx={{
                        borderBottom: "1px solid #C0C0C0",
                        p: "20px",
                        textAlign: "center",
                      }}>
                      Title
                    </Box>
                    <Box sx={{ p: "20px", textAlign: "center" }}>
                      Text Field
                    </Box>
                  </Grid>

                  <Grid xs={10}>
                    <Box
                      sx={{
                        borderRadius: "0 8px 0 0",
                        borderTop: "1px solid #C0C0C0",
                        borderLeft: "1px solid #C0C0C0",
                        borderRight: "1px solid #C0C0C0",
                        p: "20px",
                      }}>
                      {listPromotion.Title}
                      da
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "0 0 8px 0",
                        border: "1px solid #C0C0C0",
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
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ m: "20px 0" }}>
                  <ButtonComponent
                    title={"Save"}
                    pading={"8px 40px"}
                    onClick={Update}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : null}
    </MDBox>
  );
}

export default PromotionTerms;
