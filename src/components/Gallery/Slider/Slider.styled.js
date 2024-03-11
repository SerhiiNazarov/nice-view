import styled from "styled-components";
// import { ReactComponent as ArrovLeft } from "../../assets/svg/arrov-left.svg";
// import { ReactComponent as ArrovRight } from "../../assets/svg/arrov-right.svg";
// import { ReactComponent as ArrovLeftDesc } from "../../assets/svg/arrov-left-desc.svg";
// import { ReactComponent as ArrovRightDesc } from "../../assets/svg/arrov-right-desc.svg";

export const Image = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 8px;

  box-shadow: 2px 2px 10px 0px #00000080;
`;

export const Container = styled.div`
  margin: 0 auto;

  .slider-container {
  }

  .slick-slider {
  }

  .slick-initialized {
    padding: 60px;
  }

  .slick-list {
  }

  .slick-prev {
    width: 78px;
    height: 78px;
  }

  .slick-next {
    width: 78px;
    height: 78px;
  }

  .slick-track {
    padding: 70px 0;
  }

  .slick-center {
    transform: scale(1.2);
    z-index: 2;
    border-radius: 8px;
    box-shadow: 2px 2px 10px 0px #00000080;
  }
`;

export const Wraper = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
`;
