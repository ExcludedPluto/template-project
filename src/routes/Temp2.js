import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Slider from "react-slick";
import Contents from "../components/BannerComponent";
import MiddleBanner from "../components/MiddleBanner";

import tmp1 from "../img/tmp1.png";
import tmp2 from "../img/tmp2.jpg";
import bg from "../img/main_input_bg.png";

const BANNER_HEIGHT = "460"; // banner height(vh)

const Bannerwrapper = styled.div`
  height: ${BANNER_HEIGHT}px;
  width: 400px;
  position:relative;
  left:100px;
  margin-top:100px;

  & .slick-dots { //dots style
    bottom: 50px;
    left:300px;
  }
  & .slick-dots li.slick-active button:before { //active dots style
    font-size: 15px;
    opacity: 1;
    color: ${(props) => props.theme.color.highlight};
  }
  & .slick-dots li button:before { //inactive dots style
    opacity: 0.75;
    color: ${(props) => props.theme.color.error};
  }
`;

const Img = styled.img`
  
  position:absolute;
  z-index:10
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000, //(ms)
  pauseOnHover: true,
  arrows: false,
  dots: true
  //prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// html 설정 가능
  //nextArrow : "<button type='button' class='slick-next'>Next</button>",
  //dotsClass : "slick-dots",//css class 지정도 지정 가능
};

function Temp2() {
  const theme = useTheme();

  useEffect(() => {}, []);

  return (
    <>
      <Bannerwrapper>
        <Img src={bg}/>
        <Slider {...settings}>
          <Contents
            type="mobile"
            bg={tmp1}
            title="와우 친구들"
            subTitle="빡빡이 아조씨야"
            btn="보러가기,불투명"
            colors={
              theme.color.white +
              "," +
              theme.color.gray +
              "," +
              theme.color.secondary +
              "," +
              theme.color.white
            } //title,subtitle,button-background,button
            link="/login"
          />
          <Contents
            type="mobile"
            bg={tmp2}
            title="Iz* one me"
            subTitle="하나가 되는 순간 모두가 주목해"
            btn="연장하기,투명"
            colors={
              theme.color.white +
              "," +
              theme.color.secondary +
              "," +
              theme.color.primary +
              "," +
              theme.color.white
            }
            float="right"
            align="left"
            link="https://www.youtube.com/watch?v=qrshRevYiiA"
          />
          <Contents
            type="mobile"
            bg={tmp1}
            title="Iz* one me"
            subTitle="하나가 되는 순간 모두가 주목해"
            btn="연장하기,투명"
            colors={
              theme.color.white +
              "," +
              theme.color.secondary +
              "," +
              theme.color.primary +
              "," +
              theme.color.white
            }
            float="right"
            align="left"
            link="https://www.youtube.com/watch?v=qrshRevYiiA"
          />
        </Slider>
      </Bannerwrapper>
      <MiddleBanner/>
    </>
  );
}
export default Temp2;
