import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonComponent from "../../../components/buttonComponent";
import AccountListTable from "./AccountList/Data/AccountListTable";
import DialogRegular from "./DialogRegular";

function Book() {
  return (
    <MDBox>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          display={"flex"}
          justifyContent={"space-between"}>
          <DialogRegular />
          <ButtonComponent
            title={"Excel Export"}
            pading={"10px 0"}
            margin={"12px"}
            width={"90%"}
          />
        </Grid>
        {/* <Grid item xs={12} lg={10}>
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
                          text="Country"
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
              </Grid> */}

        <AccountListTable />
      </Grid>
    </MDBox>
  );
}

export default Book;
