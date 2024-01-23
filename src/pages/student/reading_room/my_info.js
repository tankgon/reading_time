import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import TaskIcon from "@mui/icons-material/Task";
import { Card, Divider, Grid } from "@mui/material";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import React, { useEffect, useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import multiColors from "react-multi-date-picker/plugins/colors";
import { Link } from "react-router-dom";
export default function MyInfoUser() {
  const dateObject = new DateObject();
  const toDateObject = (day) => new DateObject(dateObject).setDay(day);

  const colors = {
    green: [2, 10, 17].map(toDateObject),
    blue: [5, 6, 14].map(toDateObject),
    red: [13, 19, 25].map(toDateObject),
    yellow: [15, 22, 28].map(toDateObject),
  };

  Object.keys(colors).forEach((color) => {
    colors[color].forEach((date, index) => {
      colors[color][index].color = color;
    });
  });

  const [props, setProps] = useState({
    multiple: true,
    value: [...colors.green, ...colors.blue, ...colors.red, ...colors.yellow],
  });

  const fakeDataUrl =
    "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
  const ContainerHeight = 300;

  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  return (
    <div>
      <div className="bg-[#756aad] text-white flex justify-between px-[100px] py-5">
        <div className="font-bold text-[40px]"> READING ROOM</div>
        <div className="font-bold text-[20px] flex justify-between w-[50%] items-center">
          <Link to={"/mypage/dashboard"}>
            <div>READING TIME</div>
          </Link>
          <Link to={"/mypage/myinfo"}>
            <div className="text-[#ffeb00]">MyInfo</div>
          </Link>
          <Link to={"/mypage/dashboard"}>
            <div>Q&A</div>
          </Link>
          <Link to={"/mypage/dashboard"}>
            <div>Giỏ Hàng</div>
          </Link>
        </div>
      </div>

      <div className="flex justify-between px-[100px] py-5">
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <div className="font-medium text-[28px] py-4">READING PLAN</div>
              <Divider />
              <div className=" w-full m-auto flex justify-center">
                <Calendar
                  className="font-bold justify-center"
                  readOnly
                  {...props}
                  onPropsChange={setProps}
                  plugins={[multiColors({ position: "bottom" })]}
                />
              </div>
              <Divider />
              <div className="font-medium text-[16px] p-4 flex justify-between">
                <div className="flex">
                  <Avatar
                    style={{
                      backgroundColor: "#0074d9",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                    }}></Avatar>
                  <div className="text-[14px] text-[#8b8b8b]">Chọn lựa</div>
                </div>
                <div className="flex">
                  <Avatar
                    style={{
                      backgroundColor: "#ea0034",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                    }}></Avatar>
                  <div className="text-[14px] text-[#8b8b8b]">Vắng mặt</div>
                </div>
                <div className="flex">
                  <Avatar
                    style={{
                      backgroundColor: "#009688",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                    }}></Avatar>
                  <div className="text-[14px] text-[#8b8b8b]">
                    Lớp đã hoàn thành
                  </div>
                </div>
                <div className="flex">
                  <Avatar
                    style={{
                      backgroundColor: "#fad817",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                    }}></Avatar>
                  <div className="text-[14px] text-[#8b8b8b]">Ngày còn lại</div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card sx={{ borderRadius: "20px" }}>
              <div className="relative bg-[#ffeb00] p-[30px] flex items-center justify-between flex-row flex-nowrap">
                <div className="flex">
                  <span className="text-[#6458a2] mr-[30px]">
                    <AccessTimeIcon sx={{ fontSize: "66px" }} />
                  </span>
                  <div className="text-[#6458a2] mr-[30px] text-[36px] font-bold">
                    수업준비중!
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-bold">
                    2024-01-23(2024-01-23)
                  </div>
                  <div className="text-4xl font-bold">22:30 (Invalid date)</div>
                </div>
              </div>
              <div className="bg-[#6458a2] text-white text-right py-[10px] px-[30px] font-bold">
                수업시작까지 : 11시간 13분 45초
              </div>
            </Card>
            <Card sx={{ borderRadius: "20px", mt: "20px", p: "30px" }}>
              <div className="flex py-3">
                <span className="text-[#6458a2] mr-[8px]">
                  <TaskIcon sx={{ fontSize: "32px" }} />
                </span>
                <div className="text-[#6458a2] text-[20px] font-bold">
                  lớp hoàn thành
                </div>
              </div>
              <Divider />
              <List>
                <VirtualList
                  // className="px-12 pb-12"
                  data={data}
                  height={ContainerHeight}
                  itemHeight={35}
                  itemKey="email"
                  onScroll={onScroll}>
                  {(item) => (
                    <List.Item key={item.email}>
                      <div className="text-[#6458a2] text-[20px] font-bold">
                        01.22Lv.
                      </div>
                      <div className="flex justify-between w-full md:w-[20%]">
                        <div className="text-[#6458a2] text-[20px] font-bold">
                          01.22Lv.
                        </div>
                        <div className="text-[#D9488D] text-[16px] font-bold underline decoration-1">
                          VIEW
                        </div>
                      </div>
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Card>
            <Card
              sx={{
                borderRadius: "20px",
                background: "#6458a2",
                p: "30px 30px",
                mt: "20px",
              }}>
              <div className="flex py-3">
                <span className="text-white mr-[8px]">
                  <ImportContactsIcon sx={{ fontSize: "32px" }} />
                </span>
                <div className="text-white text-[20px] font-bold">
                  오늘 읽을 책
                </div>
              </div>
              <Divider sx={{ background: "white" }} />
              <div className="text-white text-[20px] font-bold mt-2 text-left">
                TEACHER : NO TEACHER
              </div>
            </Card>
            <Grid container spacing={4} sx={{ mt: "0px" }}>
              <Grid item xs={12} lg={7}>
                <Card
                  sx={{
                    color: "white",
                    background: "#312b4f",
                    padding: "20px",
                    fontWeight: "bold",
                    fontSize: "24px",
                    borderRadius: "28px",

                    opacity: 0.65,
                    cursor: "pointer",
                  }}>
                  리딩룸 준비중입니다.
                </Card>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Card
                  sx={{
                    color: "white",
                    background: "#5bc0de",
                    padding: "20px",
                    fontWeight: "bold",
                    fontSize: "24px",
                    borderRadius: "28px",
                    cursor: "pointer",
                  }}>
                  Raz-kids 열기
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
