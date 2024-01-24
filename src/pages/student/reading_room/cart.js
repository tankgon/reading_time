import { Button, Card, Divider } from "@mui/material";
import { Descriptions, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import { default as React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function MyInfoUser() {
  const items = [
    {
      key: "1",
      label: "Tên học sinh",
      children: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Tên tiếng Anh",
      children: "1810000000",
    },
    {
      key: "3",
      label: "Ngày sinh",
      children: "Hangzhou, Zhejiang",
    },
  ];

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
      <div className="bg-[#756aad] text-white flex justify-between px-[12px] md:px-[100px] py-5">
        <div className="font-bold text-[40px]"> READING ROOM</div>
        <div className="font-bold text-[20px] flex justify-between w-[50%] items-center">
          <Link to={"/mypage/dashboard"}>
            <div>READING TIME</div>
          </Link>
          <Link to={"/mypage/myinfouser"}>
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

      <div className="flex justify-between px-[12px] md:px-[100px] py-5">
        <Card sx={{ width: "100%", borderRadius: "20px", p: "30px" }}>
          <Descriptions
            className="text-left"
            title={
              <div className="flex justify-between items-center">
                <p className="text-[20px]">User Info</p>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#50456a", // Màu của chữ
                    borderColor: "#50456a", // Màu của viền
                    borderRadius: "24px", // Độ cong của góc
                    textTransform: "capitalize",
                    "&:hover": {
                      borderColor: "#50456a", // Màu của viền
                      color: "white", // Màu của chữ
                    },
                  }}>
                  Thay đổi thông tin cá nhân
                </Button>
              </div>
            }
            items={items}
          />

          <Divider />

          <div className="flex justify-between items-center mt-5">
            <p className="text-[20px] font-medium">
              Lịch sử thanh toán gần đây
            </p>
            <Button
              variant="outlined"
              sx={{
                fontSize: "12px",
                color: "#50456a", // Màu của chữ
                borderColor: "#50456a", // Màu của viền
                borderRadius: "24px", // Độ cong của góc
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "#50456a", // Màu của viền
                  color: "white", // Màu của chữ
                },
              }}>
              Xem toàn bộ lịch sử thanh toán
            </Button>
          </div>
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
                  <div className="font-medium text-[18px] ">
                    Raz-Kids 주 5일 이용권(82,000원)(무료수강권)
                  </div>
                  <div className="flex justify-between w-full md:w-[40%]">
                    <div className="text-[#6458a2] text-[20px] font-bold">
                      ₩0
                    </div>
                    <div className="text-[16px] text-[#8b8b8b]">배정됨</div>
                    <div className="text-[16px] text-[#8b8b8b]">
                      2024-01-20 14:25
                    </div>
                  </div>
                </List.Item>
              )}
            </VirtualList>
          </List>

          <Divider />

          <div className="flex justify-between items-center mt-5">
            <p className="text-[20px] font-medium">
              Xem đầy đủ lịch sử yêu cầu gần đây
            </p>
            <Button
              variant="outlined"
              sx={{
                fontSize: "12px",
                color: "#50456a", // Màu của chữ
                borderColor: "#50456a", // Màu của viền
                borderRadius: "24px", // Độ cong của góc
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "#50456a", // Màu của viền
                  color: "white", // Màu của chữ
                },
              }}>
              Xem đầy đủ lịch sử yêu cầu gần đây
            </Button>
          </div>
          <div className="text-[16px] text-[#8b8b8b] text-left py-4">
            Không yêu cầu nào được đăng kí
          </div>
        </Card>
      </div>
    </div>
  );
}
