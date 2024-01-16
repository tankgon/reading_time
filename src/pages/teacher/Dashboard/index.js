import { AspectRatio } from "@mui/joy";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { List, Progress, Skeleton } from "antd";
import React, { useState } from "react";
import MinHeightTextarea from "../../components/MinHeightTextarea";
import TextFilter from "../../components/TextFilter";
import BoardTeacher from "../../components/boardTeacher";
import ButtonComponentTeacher from "../../components/buttonComponentTeacher";
import AccountListTable from "./Data/AccountListTable";
import ListTableFull from "./Data/ListTableFull";
function TeacherDashboard() {
  const [imageSrc, setImageSrc] = useState();
  const [imageURL, setImageURL] = useState();

  const list = [
    { title: "Internet connection status:" },
    { title: "Zoom connection status:" },
  ];
  const list2 = [
    { title: "Did the student enter class on time?:" },
    { title: "Did the student pay attention during class?:" },
    { title: "Was the student＇s class attitude good?:" },
  ];
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>
                {"Prim (Prim Rose)'s Point"}
              </Typography>

              <Grid container justify="space-evenly" alignItems="center">
                <Typography variant="h6" gutterBottom>
                  9,684 poind
                </Typography>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ padding: "0px 4px" }}>
                  {"remains until the next step. Cheer up~!"}
                </Typography>
              </Grid>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="overline" display="block" gutterBottom>
                  2,120
                </Typography>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  style={{ color: "red" }}>
                  14.195
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  23,879
                </Typography>
              </Box>

              <Progress
                strokeLinecap="butt"
                percent={75}
                strokeColor={"#f4a5c7"}
                showInfo={false}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="caption" display="block" gutterBottom>
                  Start Point
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                  My Point
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Next Point
                </Typography>
              </Box>

              <Box sx={{ border: "2px solid #C0C0C0" }}>
                <Grid container>
                  <Grid item xs={6} lg={6}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          background: "#F2F2F2",
                          p: "8px",
                          textAlign: "center",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        Total
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          p: "8px",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        14,195
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={6}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          background: "#F2F2F2",
                          p: "8px",
                          textAlign: "center",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        Per Class
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          p: "8px",
                        }}>
                        55
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={6}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          background: "#F2F2F2",
                          p: "8px",
                          textAlign: "center",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        Monthly (2022-09)
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          p: "8px",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        57
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} lg={6}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          background: "#F2F2F2",
                          p: "8px",
                          textAlign: "center",
                          borderRight: "2px solid #C0C0C0",
                        }}>
                        Average
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                          p: "8px",
                        }}>
                        13
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography variant="subtitle2" gutterBottom>
            Today ISSUE
          </Typography>
          <AccountListTable />
        </Grid>

        <Grid item xs={12} lg={12}>
          <Typography variant="subtitle2" gutterBottom>
            Today (2022.07.01)
          </Typography>
          <ListTableFull />
        </Grid>

        <Grid item xs={12} lg={12}>
          <Card>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={3}>
                  <AspectRatio>
                    {/* {imageSrc ? ( */}
                    <img
                      src={`http://res.cloudinary.com/df2s6srdu/image/upload/v1704856152/reading-time-storyboard/iauabwckwdijjqucklsf.png`}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    {/* ) : (
                <div>
                  <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2 }} />
                </div>
              )} */}
                  </AspectRatio>
                  <ButtonComponentTeacher
                    fullWidth={"fullWidth"}
                    title={"SMS Sending"}
                    margin={"8px 0"}
                  />

                  <Box display={"flex"}>
                    <Card sx={{ background: "#4169E1" }}>
                      <CardContent>
                        <Typography variant="body2" color="white">
                          Student tardiness
                        </Typography>
                      </CardContent>
                    </Card>

                    <Card sx={{ margin: "0 8px", background: "#4169E1" }}>
                      <CardContent>
                        <Typography variant="body2" color="white">
                          Student absent
                        </Typography>
                      </CardContent>
                    </Card>

                    <Card sx={{ background: "#4169E1" }}>
                      <CardContent>
                        <Typography variant="body2" color="white">
                          Sudden connection problem alert
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                  Class Status Check
                  <List
                    style={{ margin: "0 20px" }}
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item) => (
                      <List.Item
                        actions={[
                          <a key="list-loadmore-edit">Good</a>,
                          <a key="list-loadmore-more">Not Bad</a>,
                          <a key="list-loadmore-more">Bad</a>,
                        ]}>
                        <Skeleton
                          avatar
                          title={false}
                          loading={item.loading}
                          active>
                          <List.Item.Meta description={item.title} />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                  Student attitude
                  <List
                    style={{ margin: "0 20px" }}
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list2}
                    renderItem={(item) => (
                      <List.Item
                        actions={[
                          <a key="list-loadmore-edit">Yes</a>,
                          <a key="list-loadmore-more">No</a>,
                        ]}>
                        <Skeleton
                          avatar
                          title={false}
                          loading={item.loading}
                          active>
                          <List.Item.Meta description={item.title} />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                  <TextFilter
                    children={
                      <MinHeightTextarea
                        minRows={2}
                        // value={Summary}
                        // onChange={(e) => setSummary(e.target.value)}
                      />
                    }
                    text="Comment"
                  />
                </Grid>

                <Grid item xs={12} lg={3}>
                  Class Complete Report
                  <Box sx={{ margin: "0 20px", marginBottom: "24px" }}>
                    <Button fullWidth variant="contained" color="success">
                      Complete
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      sx={{ margin: "4px 0" }}>
                      Absent
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ background: "orange" }}>
                      Delay
                    </Button>
                  </Box>
                  Overall evaluation after class
                  <MinHeightTextarea
                    minRows={6}
                    // value={Summary}
                    // onChange={(e) => setSummary(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <BoardTeacher title={"Previous class"} />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <BoardTeacher title={"Today class"} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default TeacherDashboard;
