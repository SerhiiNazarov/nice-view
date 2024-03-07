import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as ArrovLeftDesc } from "../../../assets/svg/arrov-left-desc.svg";
import { ReactComponent as ArrovRightDesc } from "../../../assets/svg/arrov-right-desc.svg";

import { Container, Image } from "./Slider.styled";

const SliderCenter = ({ items }) => {
  const CustomArrow = (props) => {
    const { className, onClick, component: Component } = props;

    return <Component className={className} onClick={onClick} />;
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    initialSlide: 4,
    prevArrow: <CustomArrow component={ArrovLeftDesc} />,
    nextArrow: <CustomArrow component={ArrovRightDesc} />,
  };
  return (
    <Container className="slider-container">
      <Slider {...settings}>
        {items.map((item, ind) => (
          <div key={ind}>
            <Image src={item.src} alt={`Фото ${ind}`} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default SliderCenter;
