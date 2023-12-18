import { Box, Grid } from "@mui/material";
import React from "react";

const Spreadheet = ({ text, children, itemButton }) => {
  return (
              <Box
            sx={{ position: "relative", backgroundColor: "white", p: "20px" }}>
            <Grid container>
              <Grid item xs={12} lg={12}>
                <Box
                  sx={{
                    borderTop: "2px solid #C0C0C0",
                    borderBottom: "2px solid #C0C0C0",
                    p: "16px 0",
                  }}>
                  <Grid container sx={{ textAlign: "center" }}>
                    <Grid item xs={12} lg={1}>
                      Date
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Total
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Division
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Team
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Teacher
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Time
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Item(In Charge)
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Detail
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      Score
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      Comment
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    borderBottom: "2px solid #C0C0C0",
                    p: "16px 0",
                  }}>
                  <Grid
                    container
                    sx={{
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Grid item xs={12} lg={1}>
                      2022.09.20
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        124
                      </Box>
                      <Box sx={{ p: "16px 0" }}>2410</Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        Point
                      </Box>
                      <Box sx={{ p: "16px 0" }}>Penalty</Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}></Box>
                      <Box sx={{ p: "16px 0" }}></Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "67% 0",
                          margin: "auto",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          Teacher A
                        </Box>
                        <Box sx={{ p: "16px 0" }}>Teacher B</Box>
                      </Box>
                      <Box sx={{ p: "67% 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          Teacher A
                        </Box>
                        <Box sx={{ p: "16px 0" }}>Teacher C</Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            17:00
                          </Box>
                          <Box sx={{ p: "16px 0" }}>16:55</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            16:30
                          </Box>
                          <Box sx={{ p: "16px 0" }}>11:00</Box>
                        </Box>
                      </Box>
                      <Box sx={{ p: "16px 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            13:00
                          </Box>
                          <Box sx={{ p: "16px 0" }}>12:00</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            {"."}
                          </Box>
                          <Box sx={{ p: "16px 0" }}> {" ."}</Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            point of class(ST)
                          </Box>
                          <Box sx={{ p: "16px 0" }}>Directly(CS)</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            a point of class(ST)
                          </Box>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              p: "16px 0",
                            }}>
                            a point of class(TL)
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ p: "16px 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            Complai(TL)
                          </Box>
                          <Box sx={{ p: "16px 0" }}>Complai(TL)</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            Complai(TL)
                          </Box>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              p: "16px 0",
                            }}>
                            Lack of communication (CS)
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            1
                          </Box>
                          <Box sx={{ p: "16px 0" }}>2</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            3
                          </Box>
                          <Box sx={{ p: "16px 0" }}>4</Box>
                        </Box>
                      </Box>
                      <Box sx={{ p: "16px 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            7
                          </Box>
                          <Box sx={{ p: "16px 0" }}>8</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            7
                          </Box>
                          <Box sx={{ p: "16px 0" }}>8</Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={1}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            10
                          </Box>
                          <Box sx={{ p: "16px 0" }}>100</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            5
                          </Box>
                          <Box sx={{ p: "16px 0" }}>9</Box>
                        </Box>
                      </Box>
                      <Box sx={{ p: "16px 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            500
                          </Box>
                          <Box sx={{ p: "16px 0" }}>1000</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            600
                          </Box>
                          <Box sx={{ p: "16px 0" }}>10</Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <Box
                        sx={{
                          borderBottom: "2px solid #C0C0C0",
                          p: "16px 0",
                        }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            Class point comments are imported by students
                            (student name)
                          </Box>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            sx={{
                              p: "16px 0",
                            }}
                            numberOfLines={1}>
                            From Hong Gil Dong's mother, the teacher told me
                            that I did a good jobI sent you a message of praise.
                            (CS)
                          </Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            Class point comments are imported by students
                            (student name)
                          </Box>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              p: "16px 0",
                            }}>
                            09.2017:00 Class video pad bag, you should pay more
                            attention to student reactions. (TL)
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ p: "16px 0" }}>
                        <Box
                          sx={{
                            borderBottom: "2px solid #C0C0C0",
                            p: "16px 0",
                          }}>
                          <Box
                            style={{
                              textAlign: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            numberOfLines={1}
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "16px 0",
                            }}>
                            수업태도가 안 좋다는 부모님 지적(CS) 경고를
                            주었습니다.(TL)
                          </Box>
                          <Box sx={{ p: "16px 0" }}>강력한 경고(TL)</Box>
                        </Box>
                        <Box sx={{ p: "16px 0" }}>
                          <Box
                            sx={{
                              borderBottom: "2px solid #C0C0C0",
                              p: "15px 0",
                            }}>
                            메뉴얼 다시 교육(TL)
                          </Box>
                          <Box sx={{ p: "12px 0" }}>
                            전달 사항에 대한 빠른 응답 필요(CS)
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
  );
};

export default Spreadheet;
