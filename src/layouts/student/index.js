import MenuIcon from "@mui/icons-material/Menu";
import { Button, Divider, Grid } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";

const menuBarStyle = {
  position: "fix",
  top: "0",
  width: "100%",
  height: "100px",
  background: "#fff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100",
};

function StudentLayout() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ textAlign: "center", margin: "auto" }}>
        <div className="menu-bar fixed" style={menuBarStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1320px",
              color: "black",
            }}>
            <img
              src="https://reading-time.co.kr/themes/readingtime/img/header-logo.png"
              alt="Your Image"
              style={{ height: "52px" }}
            />
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto"
              id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:hover:border-b-4 md:border-indigo-500"
                    aria-current="page">
                    READINGTIME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:hover:border-b-4 border-indigo-500">
                    REVIEW LỚP HỌC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 border-b-4 border-indigo-500">
                    ĐĂNG KÝ HỌC MIỄN PHÍ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:border-b-4 border-indigo-500 md:p-0  ">
                    GIỎ HÀNG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:border-b-4 border-indigo-500 md:p-0  ">
                    TRUNG TÂM KHÁCH HÀNG
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <Link to={"/signIn"}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#50456a", // Màu của chữ
                    borderColor: "#50456a", // Màu của viền
                    borderRadius: "24px", // Độ cong của góc
                    textTransform: "capitalize",
                    "&:hover": {
                      borderColor: "#50456a", // Màu của viền
                    },
                  }}>
                  Login
                </Button>
              </Link>

              <Button
                variant="contained"
                sx={{
                  margin: "0 8px",
                  backgroundColor: "#50456a", // Màu của nền
                  borderColor: "#50456a", // Màu của viền
                  borderRadius: "24px", // Độ cong của góc
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#ad9fcd", // Màu khi hover
                  },
                }}>
                Join Us
              </Button>
              <MenuIcon style={{ fontSize: 50 }} />
            </div> */}
            <div>
              {/* <Link to={"/"}> */}
              <Button
                variant="outlined"
                sx={{
                  color: "#50456a", // Màu của chữ
                  borderColor: "#50456a", // Màu của viền
                  borderRadius: "24px", // Độ cong của góc
                  textTransform: "capitalize",
                  "&:hover": {
                    borderColor: "#50456a", // Màu của viền
                  },
                }}>
                Logout
              </Button>
              {/* </Link> */}

              <Link to={"/mypage/dashboard"}>
                <Button
                  variant="contained"
                  sx={{
                    margin: "0 8px",
                    backgroundColor: "#50456a", // Màu của nền
                    borderColor: "#50456a", // Màu của viền
                    borderRadius: "24px", // Độ cong của góc
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#ad9fcd", // Màu khi hover
                    },
                  }}>
                  Reading Room
                </Button>
              </Link>
              <MenuIcon style={{ fontSize: 50 }} />
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <Outlet />
        </div>
        <div className="bg-[#333] py-8 px-[12px] md:px-[100px]">
          <Grid
            container
            spacing={4}
            sx={{ color: "white", textAlign: "left" }}>
            <Grid item xs={12} lg={2}>
              Chính sách dịch vụ
            </Grid>
            <Grid item xs={12} lg={2}>
              Chính sách bảo mật
            </Grid>
            <Grid item xs={12} lg={8}>
              Chính sách thanh toán và hoán phí
            </Grid>
            <Grid item xs={12} lg={3}>
              <div className="bg-[url('https://readingtime.today/resources/img/main/logo.png')] bg-no-repeat h-14"></div>
            </Grid>
            <Grid item xs={12} lg={6}>
              713-1004, 133, Magokseo-ro, Gangseo-gu, Seoul, Hàn Quốc
            </Grid>
            <Grid item xs={12} lg={12}>
              <Divider sx={{ color: "white", background: "white" }} />
              <p className="my-3"> Công ty EnglishWing </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
