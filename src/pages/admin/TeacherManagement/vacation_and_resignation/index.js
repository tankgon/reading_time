import { Grid } from "@mui/material";
import MDBox from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AccountListTable from "./AccountList/Data/AccountListTable";
import TextFilter from "./components/TextFilter/TextFilter";
import TextForm from "./components/TextForm";
import ButtonComponent from "../../../components/buttonComponent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function AccountList() {
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
              p: "8px 0",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={1}>
                <strong style={{ color: "#7F7F7F" }}>Filter List</strong>
              </Grid>
              <Grid item xs={12} lg={9}>
                <Grid container>
                  <Grid item xs={12} lg={7}>
                    <TextFilter
                      children={
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <TextField
                            size="small"
                            sx={{ p: "8px" }}
                            id="outlined-basic"
                            variant="outlined"
                          />
                        </Box>
                      }
                      text="Start Date"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} lg={7}>
                    <TextFilter
                      children={
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              format="DD-MM-YYYY"
                              sx={{ p: "8px", width: "240px" }}
                            />
                            <DatePicker
                              format="DD-MM-YYYY"
                              sx={{ p: "8px", width: "240px" }}
                            />
                          </LocalizationProvider>
                        </Box>
                      }
                      text="Start Date"
                    />

                    <TextFilter
                      children={
                        <Box>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              format="DD-MM-YYYY"
                              sx={{ p: "8px", width: "240px" }}
                            />
                            <DatePicker
                              format="DD-MM-YYYY"
                              sx={{ p: "8px", width: "240px" }}
                            />
                          </LocalizationProvider>
                        </Box>
                      }
                      text="Start Date"
                    />
                    <ButtonComponent title={"Add Filter"}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={2} style={{ textAlign: "right" }}>
                <ButtonComponent title={"Excel Export"} />
              </Grid>
            </Grid>
          </Box>
          <AccountListTable />
          <Box sx={{ marginTop: "20px" }}>
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              sx={{ justifyContent: "center", display: "flex" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Box
            sx={{
              flexGrow: 1,
              mb: "20px",
              p: "8px 0",
            }}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid item xs={12} lg={12}>
                <Box sx={{ padding: "20px" }}>
                  <strong>General</strong>
                </Box>
                <Box sx={{ border: "2px solid #C0C0C0" }}>
                  <Grid container>
                    <Grid item xs={6} lg={6}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          lg={2}
                          sx={{
                            background: "#F2F2F2",
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          Part
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={10}
                          sx={{
                            p: "20px",
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          Absence request ( V ) Vacation request ( ) Retirement
                          request ( )
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          lg={2}
                          sx={{
                            background: "#F2F2F2",
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          Name
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={10}
                          sx={{
                            p: "20px",
                          }}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <strong>GenApproval line</strong>
                </Box>
                <Box sx={{ border: "2px solid #C0C0C0" }}>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          lg={2}
                          sx={{
                            background: "#F2F2F2",
                            p: "48px 20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          Confirm
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={10}
                          sx={{
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          <Box
                            sx={{
                              p: "20px",
                              borderBottom: "2px solid #C0C0C0",
                            }}>
                            Team Leader (submitter's team leader name)
                          </Box>
                          <Box
                            sx={{
                              p: "20px",
                            }}>
                            Confirm ( V)
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          lg={12}
                          sx={{
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          <Box
                            sx={{
                              p: "20px",
                              borderBottom: "2px solid #C0C0C0",
                            }}>
                            Director(Director’s Name)
                          </Box>
                          <Box
                            sx={{
                              p: "20px",
                            }}>
                            Confirm ( V)
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ padding: "20px" }}>
                  <div>
                    <strong>Title</strong>
                  </div>
                  <a href="https://freetuts.net">
                    <strong>Absence request _ NAME_23/11/06</strong>
                  </a>
                </Box>

                <Box>
                  <TextForm
                    children={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        Day(s)
                      </Box>
                    }
                    text="Menu"
                  />
                </Box>

                <Box>
                  <TextForm
                    children={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        ~
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                      </Box>
                    }
                    text="Period"
                  />
                </Box>

                <Box>
                  <TextForm
                    children={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        {">"}
                        <TextField
                          size="small"
                          sx={{ p: "8px" }}
                          id="outlined-basic"
                          variant="outlined"
                        />
                        <ButtonComponent title={"Attach"}/>
                      </Box>
                    }
                    text="Reasons"
                  />
                </Box>
                <Box
                  sx={{
                    border: "2px solid #C0C0C0",
                    background: "#EDEDED",
                    m: "40px 0",
                  }}>
                  <Grid container>
                    <Grid item xs={12} lg={12}>
                      <Grid container>
                        <Grid
                          item
                          xs={6}
                          lg={2}
                          sx={{
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          Reasons(사유1)
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={10}
                          sx={{
                            p: "20px",
                            textAlign: "center",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          In detail(사유2)
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={2}
                          sx={{
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          Urgent issue
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={10}
                          sx={{
                            p: "20px",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          accident, family issue(parental checkup : personal),
                          news of death, internet connection (broken laptop,
                          unstable internet connection, interruptions/outage)
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={2}
                          sx={{
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          Call sick
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={10}
                          sx={{
                            p: "20px",
                            borderBottom: "2px solid #C0C0C0",
                          }}>
                          Not feeling well
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={2}
                          sx={{
                            p: "20px",
                            textAlign: "center",
                            borderRight: "2px solid #C0C0C0",
                          }}>
                          Personal
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          lg={10}
                          sx={{
                            p: "20px",
                          }}>
                          Running errands, check up issue, school, etc.
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} lg={4}>
                    <ButtonComponent title={"Save"} marginRight={"8px"}/>
                    <ButtonComponent title={"Cancel"} marginRight={"8px"}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default AccountList;
