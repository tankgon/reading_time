import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextBox from "../../../components/TextBox";
import TextFilter from "../../../components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogCurri from "./components/DialogCurriculum";
function Book() {
  return (
    <MDBox>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid item xs={12} lg={12}>
          <Box
            sx={{
              flexGrow: 1,
              mb: "20px",
              p: "20px",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={6} display={"flex"}>
                <DialogCurri />
                <ButtonComponent
                  title={"Excel Upload"}
                  pading={"10px 0"}
                  margin={"8px 12px"}
                  width={"90%"}
                />
                <ButtonComponent
                  title={"Excel Export"}
                  pading={"10px 0"}
                  margin={"8px 12px"}
                  width={"90%"}
                />

                {/* <DialogAddPoint /> */}
              </Grid>
              {/* <Grid item xs={12} lg={10}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={4}>
                        <TextFilter
                          children={
                            <TextBox id="outlined-basic" variant="outlined" />
                          }
                          text="Curriculum Title"
                        />
                        <TextFilter
                          children={
                            <TextBox id="outlined-basic" variant="outlined" />
                          }
                          text="Subtitle"
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextFilter
                          children={
                            <Autocomplete
                              sx={{ p: "8px 0" }}
                              size="small"
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Division"
                        />
                        <TextFilter
                          children={
                            <Autocomplete
                              sx={{ p: "8px 0" }}
                              size="small"
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Use"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Book;
