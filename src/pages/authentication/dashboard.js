import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const divStyle = {
  // position: 'absolute',
  top: "50%",
  left: "50%",
  // transform: 'translate(-80%, 0%)',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  // width: '1200px',
  textAlign: "center",
  borderRadius: "100px 0px 100px 0px",
  margin: "0 100px",
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
      fontSize: "24px", // Adjust the font size as needed
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
    }}>
    {/* Your custom next arrow content */}
    &gt;
  </div>
);
const playButtonStyle = {
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "white",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px", // Adjust the font size as needed
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
  top: "57%",
};
const menuBarStyle = {
  position: "fix",
  top: "0",
  width: "100%",
  height: "100px", // Adjust the height of the menu bar as needed
  background: "#fff", // Adjust the background color as needed
  color: "#fff", // Adjust the text color as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100", // Set a higher z-index to ensure the menu is above the slides
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
        <div className="menu-bar" style={menuBarStyle}>
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
                    class="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                    aria-current="page">
                    READINGTIME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">
                    REVIEW LỚP HỌC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-bold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">
                    ĐĂNG KÝ HỌC MIỄN PHÍ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">
                    GIỎ HÀNG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">
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

        <div className="slide-container" style={{ height: "750px" }}>
          <div style={playButtonStyle} onClick={handlePlayPauseClick}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <Slide
            style={{ width: "1200px" }}
            ref={slideRef}
            prevArrow={customPrevArrow}
            nextArrow={customNextArrow}
            autoplay={isPlaying}
            duration={10000}
            transitionDuration={500} // Set the transition duration between slides
            indicators={false} // Disable indicators
            // arrows={false} // Disable default arrows
          >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}>
                  <div>
                    <div className="font-bold text-5xl text-white">
                      {slideImage.caption}
                    </div>
                    <div className="font-bold text-5xl text-white">
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
                          backgroundColor: "#f4a5c7", // Màu khi hover
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

        <div className="mx-[100px] text-center">
          <div className="slide-container flex">
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-start",
              }}>
              <div style={{ width: "1200px" }}>
                <img
                  src="https://reading-time.co.kr/resources/img/main/why1.png"
                  alt="Your Image"
                  style={{
                    borderRadius: "50px 0px 50px 0px",
                    height: "200px",
                    width: "400px",
                  }}
                />
              </div>
              <div class="flex justify-end w-full">
                <p class="w-100">
                  Đọc sách là điều cần thiết để học ngoại ngữ Đặc biệt, trẻ càng
                  nhỏ thì càng tiếp thu nhanh ngoại ngữ Dù không thạo toàn bộ,
                  bạn vẫn có thể phát triển kĩ năng Đọc Hiểu bằng suy đoán nội
                  dung qua hình ảnh Đọc, giúp bạn học thêm nhiều cách diễn đạt
                  và cấu trúc câu hơn là đàm thoại đơn giản, là một trong những
                  cách tốt nhất để học Anh văn. (Moeller & Meyer, 1995)
                </p>
              </div>
            </div>
          </div>

          <div className="slide-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}>
              <p>
                Đọc sách là điều cần thiết để học ngoại ngữ Đặc biệt, trẻ càng
                nhỏ thì càng tiếp thu nhanh ngoại ngữ Dù không thạo toàn bộ, bạn
                vẫn có thể phát triển kĩ năng Đọc Hiểu bằng suy đoán nội dung
                qua hình ảnh Đọc, giúp bạn học thêm nhiều cách diễn đạt và cấu
                trúc câu hơn là đàm thoại đơn giản, là một trong những cách tốt
                nhất để học Anh văn. (Moeller & Meyer, 1995)
              </p>
              <div style={{ width: "1200px" }}>
                <img
                  src="https://reading-time.co.kr/resources/img/main/why2.png"
                  alt="Your Image"
                  style={{
                    borderRadius: "50px 0px 50px 0px",
                    height: "200px",
                    width: "400px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
