import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogBook from "./components/DialogBook";
import TextForm from "./components/TextForm";
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
              <Grid item xs={12} lg={2}>
                <DialogBook />
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
              <Grid item xs={12} lg={10}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
                    <Grid container>
                      <Grid item xs={12} lg={4}>
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Division"
                        />
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Subtitle"
                        />
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Genre"
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Level"
                        />
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Grade"
                        />
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Lexile"
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Page"
                        />
                        <TextForm
                          children={
                            <TextField
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Vocabulary"
                        />
                        <TextForm
                          children={
                            <Autocomplete
                              size="small"
                              // inputValue={inputValue}
                              id="controllable-states-demo"
                              sx={{ p: "8px", width: "240px" }}
                              options={[1, 2]}
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
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Book;
