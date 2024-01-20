import MenuIcon from "@mui/icons-material/Menu";
import { Button, Card, Divider, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const divStyle = {
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  textAlign: "center",
  borderRadius: "100px 0px 100px 0px",
};
const slideImages = [
  {
    url: "https://reading-time.co.kr/resources/img/main/vis1.jpg",
    caption: "Phát triển thói quen đọc sách tiếng Anh của trẻ",
    caption1: "Đọc tiếng Anh qua video trong lớp, Reading Time",
    captionButton: "Học thử miễn phí",
  },
  {
    url: "https://reading-time.co.kr/resources/img/main/vis2.jpg",
    caption: "Lớp đọc Anh văn trong 25 phút",
    caption1: "với giáo viên nước ngoài mỗi ngày, Reading Time",
    captionButton: "Giới thiệu về Reading Time",
  },
  {
    url: "https://reading-time.co.kr/resources/img/main/vis4_210906.jpg",
    caption: "5 lần 1 tuần, 3 lần 1 tuần, 2 lần 1 tuần",
    caption1: "Chọn lớp ngay!",
    captionButton: "Học thử miễn phí",
  },
];

const slideImages1 = [
  {
    url: "https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg",
    caption:
      "[Thứ nhất] 'Tôi đã lo lắng không biết con mình có thể học lớp tiếng Anh online không vì bé còn nhỏ, nhưng nhờ giáo viên nhiệt tình, con tôi đã rất vui.'",
    caption1: "Reading Time Mẹ Hyunwook Kim (8 tuổi)",
  },
  {
    url: "https://img.youtube.com/vi/fwUvp2lEtn0/sddefault.jpg",
    caption:
      "[Thứ hai] 'Tôi hạnh phúc khi con mình tạo được thói quen đọc sách Anh ngữ nhờ Reading Time'",
    caption1: "Reading Time Ba Jeremy",
  },
  {
    url: "https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg",
    caption:
      "[Thứ ba] 'Hồi đầu con tôi không thích đọc sách Anh ngữ, nhưng giờ nó bảo đọc sách rất vui nhờ có Reading Time.'",
    caption1: "Reading Time Phụ huynh học sinh (lớp 4)",
  },
];

const slideImages2 = [
  {
    discound: "50%",
    time: "1 week 5 Day",
    pricedown: "154 $",
    price: "72$",
    border: "#5353ac",
  },
  {
    discound: "40%",
    time: "1 week 5 Day",
    pricedown: "254 $",
    price: "125$",
    border: "#f4a5c7",
  },
  {
    discound: "50%",
    time: "1 week 5 Day",
    pricedown: "24 $",
    price: "12$",
    border: "#5353ac",
  },
];
const customPrevArrow = (
  <div
    style={{
      position: "absolute",
      top: "100%",
      left: "42%",
      transform: "translateY(-50%)", // Center the button vertically
      cursor: "pointer",
      background: "white",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px", // Adjust the font size as needed
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
    }}>
    &lt;
  </div>
);

const customNextArrow = (
  <div
    style={{
      position: "absolute",
      top: "100%",
      right: "42%",
      transform: "translateY(-50%)", // Center the button vertically
      cursor: "pointer",
      background: "white",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    }}>
    &gt;
  </div>
);
const playButtonStyle = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  background: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
};
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

export default function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(true);
  // const [isHovered, handleHover] = useState(true);
  const [isHovered, setHovered] = useState(false);

  const handleHover = (value) => {
    setHovered(value);
  };

  const slideRef = useRef();

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    if (slideRef.current) {
      // If transitioning from paused to play, start from the current slide
      if (!isPlaying) {
        slideRef.current.goTo(slideRef.current.state?.currentSlide);
      }
    }
  };
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

            <div>
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
            </div>
          </div>
        </div>

        <div className="mt-[112px]">
          <div
            style={playButtonStyle}
            className="top-[8.4%] md:top-[14.5%] h-12 w-12"
            onClick={handlePlayPauseClick}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <Slide
            ref={slideRef}
            prevArrow={customPrevArrow}
            nextArrow={customNextArrow}
            autoplay={isPlaying}
            duration={10000}
            transitionDuration={500} // Set the transition duration between slides
            indicators={false} // Disable indicators
          >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  className="m-4 md:mx-[100px]"
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}>
                  <div>
                    <div className="font-bold text-4xl md:text-5xl text-white">
                      {slideImage.caption}
                    </div>
                    <div className="font-bold text-4xl md:text-5xl text-white">
                      {slideImage.caption1}
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        margin: "20px 0",
                        backgroundColor: "#ad9fcd", // Màu của nền
                        borderColor: "#ad9fcd", // Màu của viền
                        borderRadius: "52px", // Độ cong của góc
                        textTransform: "capitalize",
                        fontSize: "20px",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "#f4a5c7",
                        },
                      }}>
                      {slideImage.captionButton}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <div className="relative">
          <div className="text-[5rem] md:text-[12rem] font-bold text-[#f4a5c7] opacity-25 mr-[32%]">
            Why?
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-[24px] md:text-[2rem] font-bold text-[#50456a]">
              Tại sao đọc sách Anh ngữ lại quan trọng?
            </div>
          </div>
        </div>

        <div className="mx-[12px] md:mx-[100px] text-center">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <img
                src="https://reading-time.co.kr/resources/img/main/why1.png"
                alt="Your Image"
                style={{
                  borderRadius: "50px 0px 50px 0px",
                  height: "200px",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <div class="text-left">
                Đọc sách là điều cần thiết để học ngoại ngữ Đặc biệt, trẻ càng
                nhỏ thì càng tiếp thu nhanh ngoại ngữ Dù không thạo toàn bộ, bạn
                vẫn có thể phát triển kĩ năng Đọc Hiểu bằng suy đoán nội dung
                qua hình ảnh Đọc, giúp bạn học thêm nhiều cách diễn đạt và cấu
                trúc câu hơn là đàm thoại đơn giản, là một trong những cách tốt
                nhất để học Anh văn.<br></br> (Moeller & Meyer, 1995)
              </div>
            </Grid>
            <Grid item xs={12} lg={2}></Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={2}></Grid>

            <Grid item xs={12} lg={6}>
              <div class="text-right hidden md:block">
                Đọc sách là điều cần thiết để học ngoại ngữ Đặc biệt, trẻ càng
                nhỏ thì càng tiếp thu nhanh ngoại ngữ Dù không thạo toàn bộ, bạn
                vẫn có thể phát triển kĩ năng Đọc Hiểu bằng suy đoán nội dung
                qua hình ảnh Đọc, giúp bạn học thêm nhiều cách diễn đạt và cấu
                trúc câu hơn là đàm thoại đơn giản, là một trong những cách tốt
                nhất để học Anh văn.<br></br> (Moeller & Meyer, 1995)
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <img
                src="https://reading-time.co.kr/resources/img/main/why1.png"
                alt="Your Image"
                style={{
                  borderRadius: "50px 0px 50px 0px",
                  height: "200px",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <div class="text-left block md:hidden">
                Đọc sách là điều cần thiết để học ngoại ngữ Đặc biệt, trẻ càng
                nhỏ thì càng tiếp thu nhanh ngoại ngữ Dù không thạo toàn bộ, bạn
                vẫn có thể phát triển kĩ năng Đọc Hiểu bằng suy đoán nội dung
                qua hình ảnh Đọc, giúp bạn học thêm nhiều cách diễn đạt và cấu
                trúc câu hơn là đàm thoại đơn giản, là một trong những cách tốt
                nhất để học Anh văn.<br></br> (Moeller & Meyer, 1995)
              </div>
            </Grid>
          </Grid>

          <div className="my-[8rem]">
            <div className="mb-[20px] left-0 right-0 bottom-0 items-center font-bold">
              <div className="text-[3rem] font-bold text-[#50456a]">
                Reading Time Review
              </div>
              <div className="text-[1.5rem] font-bold text-black">
                Hãy xem clip review về Reading Time
              </div>
            </div>

            <Slide
              slidesToScroll={1}
              slidesToShow={1}
              prevArrow={
                <div className="p-[18px] z-10 transition bg-[rgba(244,165,199,.8)] rounded-xl text-[28px] text-white">
                  <GrPrevious />
                </div>
              }
              nextArrow={
                <div className="p-[18px] z-10 transition bg-[rgba(244,165,199,.8)] rounded-xl text-[28px] text-white">
                  <GrNext />
                </div>
              }
              autoplay={false}
              responsive={[
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
              ]}>
              {slideImages1.map((item) => (
                <div
                  style={{
                    margin: "0 12px",
                    fontSize: "30px",
                    textAlign: "left",
                  }}>
                  <div className="h-0 pb-[56.26%] relative overflow-hidden rounded-[30px]">
                    <img
                      src={item.url}
                      alt="Your Image"
                      style={{
                        width: "100%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>

                  <div>
                    <p className="mt-[20px] overflow-hidden truncate whitespace-normal leading-[140%] h-[4.2em] break-all line-clamp-3 text-[18px]">
                      {item.caption}
                    </p>
                    <p className="text-[#555] mt-6 text-[20px]">
                      {item.caption1}
                    </p>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>

        <div className="bg-[#e0e0f0] py-20 px-3 md:px-[100px]">
          <p className="text-[33px] text-[#5353ac] font-bold">
            Thông báo Reading Time
          </p>
          <div className="mt-[60px]">
            <Grid container>
              <Grid item xs={12} lg={8}>
                <div className="flex justify-between">
                  <span className="font-bold text-[20px] text-[#5353ac]">
                    NOTICE
                  </span>
                  <button class="bg-white text-[#5353ac] hover:bg-gray-100 font-semibold py-2 px-4 border  rounded-full shadow">
                    More +
                  </button>
                </div>
                <Divider sx={{ margin: "12px 0" }} />

                <Card sx={{ mb: "12px" }}>
                  <div className="flex justify-between p-5 items-center">
                    <div className="flex items-center">
                      <div className="bg-[#f4a5c7] mr-5 px-[16px] py-2 rounded-full font-bold text-white">
                        bình thường
                      </div>
                      <div className="text-[18px]">Vietnam Test</div>
                    </div>
                    <div className="text-[#888]">2023.07.31</div>
                  </div>
                </Card>

                <Card sx={{ mb: "12px" }}>
                  <div className="flex justify-between p-5 items-center">
                    <div className="flex items-center">
                      <div className="bg-[#f4a5c7] mr-5 px-[16px] py-2 rounded-full font-bold text-white">
                        bình thường
                      </div>
                      <div className="text-[18px]">Vietnam Test</div>
                    </div>
                    <div className="text-[#888]">2023.07.31</div>
                  </div>
                </Card>

                <Card sx={{ mb: "12px" }}>
                  <div className="flex justify-between p-5 items-center">
                    <div className="flex items-center">
                      <div className="bg-[#f4a5c7] mr-5 px-[16px] py-2 rounded-full font-bold text-white">
                        bình thường
                      </div>
                      <div className="text-[18px]">Vietnam Test</div>
                    </div>
                    <div className="text-[#888]">2023.07.31</div>
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} lg={4} sx={{ alignItems: "center" }}>
                <img
                  src="https://reading-time.co.kr/resources/img/main/why1.png"
                  alt="Your Image"
                  style={{
                    borderRadius: "100px 0px 100px 0px",
                    width: "100%",
                    padding: "20px",
                  }}
                />

                <img
                  src="https://reading-time.co.kr/resources/img/main/why1.png"
                  alt="Your Image"
                  style={{
                    borderRadius: "100px 0px 100px 0px",
                    width: "100%",
                    padding: "20px",
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="bg-[url('https://readingtime.today/resources/img/main/sec3_bg.png')] bg-cover bg-center">
          <div className="py-20 px-[12px] md:px-[100px]">
            <p className="text-[33px] text-[#5353ac] font-bold">
              Sản phẩm Reading Time
            </p>
            <p className="text-[20px]">
              25 phút mỗi ngày, với sự hướng dẫn của giáo viên nước ngoài, bạn
              sẽ tạo được thói quen đọc tiếng Anh
              <br></br>
              và phát triển tự nhiên các kĩ năng Anh ngữ
            </p>
            <div className="mt-[60px]">
              <Slide
                slidesToScroll={1}
                indicators={true}
                slidesToShow={1}
                nextArrow={<></>}
                prevArrow={<></>}
                autoplay={true}
                responsive={[
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    },
                  },
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                ]}>
                {slideImages2.map((item) => (
                  <div
                    className="flex-1 bg-[#f1f1fb] relative text-center m-8 p-16"
                    style={{
                      borderRadius: "0px 100px 0px 100px",
                      border: `3px solid ${item.border}`,
                    }}>
                    <div className="bg-[url('https://readingtime.today/resources/img/main/label.png')] bg-no-repeat pt-12 pl-5 absolute top-[-30px] left-3 w-[77px] h-[118px] text-white font-bold text-[12px]">
                      {item.discound}
                      <br />
                      OFF
                    </div>
                    <div className="mt-8">
                      <div className="bg-[url('https://readingtime.today/resources/img/main/logo.png')] bg-no-repeat h-14"></div>
                      <div className="text-[27px]">{item.time}</div>
                      <div className="text-[25px] relative text-[#999] py-[18px] line-through">
                        {item.pricedown}
                      </div>
                      <div className="text-[#000071] text-[38px] font-semibold mb-5">
                        {item.price}
                      </div>
                      <div className="text-[21px] font-normal">
                        (Bao gồm 3 ngày dùng thử miễn phí)
                      </div>
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: "40px",
                          backgroundColor: "#50456a", // Màu của nền
                          borderColor: "#50456a", // Màu của viền
                          borderRadius: "50px", // Độ cong của góc
                          textTransform: "capitalize",
                          padding: "19px 5px",
                          width: "100%",
                          "&:hover": {
                            backgroundColor: "#ad9fcd", // Màu khi hover
                          },
                        }}>
                        Áp dụng
                      </Button>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(83,83,172,1) 0%, rgba(83,83,172,0) 95%)",
            }}
            className="py-20 px-[12px] md:px-[100px] ">
            <p className="text-[33px] text-[#5353ac] font-bold">
              Hãy để đọc Anh văn thành thói quen!
            </p>
            <p className="text-[55px] text-[#5353ac] font-bold">
              25 phút một ngày, Reading Time!
            </p>
            <span className="font-[20px] mt-3 leading-3 text-[18px]">
              Reading Time tạo thói quen đọc Anh văn với hướng dẫn <br></br> từ
              giáo viên nước ngoài mỗi ngày.
            </span>
            <Grid container sx={{ mt: "60px" }}>
              <Grid item xs={12} lg={3}>
                <div className="w-[100%] h-full pb-[calc(100%-3%)] rounded-full inline-block border-4 border-[#f4a5c7] bg-[url('https://readingtime.today/resources/img/main/sec4_1.jpg')] bg-cover bg-center bg-no-repeat relative mr-[4.75%]">
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white font-medium text-[24px]">
                    1:1
                    <br />
                    với giáo viên
                    <br />
                    nước ngoài
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={1.5}>
                <div className="text-[#000071] text-[100px] font-semibold h-full md:mt-[50%]">
                  +
                </div>
              </Grid>
              <Grid item xs={12} lg={3}>
                <div className="w-[100%] h-full pb-[calc(100%-3%)] rounded-full inline-block border-4 border-[#f4a5c7] bg-[url('https://readingtime.today/resources/img/main/sec4_2.jpg')] bg-cover bg-center bg-no-repeat relative mr-[4.75%]">
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white font-medium text-[24px]">
                    25 phút
                    <br />
                    mỗi ngày
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={1.5}>
                <div className="text-[#000071] text-[100px] font-semibold h-full md:mt-[50%]">
                  +
                </div>
              </Grid>
              <Grid item xs={12} lg={3}>
                <div className="w-[100%] h-full pb-[calc(100%-3%)] rounded-full inline-block border-4 border-[#9f7dc7] bg-[url('https://readingtime.today/resources/img/main/sec4_3.jpg')] bg-cover bg-center bg-no-repeat relative mr-[4.75%]">
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white font-medium text-[24px]">
                    thư viện
                    <br />
                    online
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
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
