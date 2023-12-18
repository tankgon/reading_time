import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MDBox from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogFree_Trial from "./components/DialogFree_Trial";
import TextFilter from "./components/TextFilter";
import ButtonComponent from "../../../components/buttonComponent";
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
                <DialogFree_Trial />
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
                    <Grid container spacing={8}>
                      <Grid item xs={12} lg={4}>
                        <TextFilter
                          children={
                            <Autocomplete
                              size="small"
                              sx={{ p: "8px" }}
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Country of sale"
                        />
                        <TextFilter
                          children={
                            <Autocomplete
                              size="small"
                              sx={{ p: "8px" }}
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Currency"
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <TextFilter
                          children={
                            <Autocomplete
                              size="small"
                              sx={{ p: "8px" }}
                              id="controllable-states-demo"
                              options={["options", "afasdf"]}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          }
                          text="Whether to use"
                        />
                        <TextFilter
                          children={
                            <TextField
                              fullWidth
                              size="small"
                              sx={{ p: "8px" }}
                              id="outlined-basic"
                              variant="outlined"
                            />
                          }
                          text="Product Name"
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
