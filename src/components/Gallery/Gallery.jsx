import React, { useState } from "react";
import Slider from "./Slider";
import {
  Container,
  GalleryContainer,
  ImageContainer,
  Image,
  Btn,
  IconLeft,
  IconRight,
  IconLeftDesc,
  IconRightDesc,
} from "./Gallery.styled";
import Button from "../Button";
import Selector from "./Selector";
import { galleryList } from "../../utils/galleryList";

const Gallery = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(4);

  // const goToPreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? galleryList.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === galleryList.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  return (
    // <Container>
    //   <GalleryContainer>
    //     <Btn onClick={goToPreviousImage}>
    //       <IconLeft />
    //       <IconLeftDesc />
    //     </Btn>
    //     <ImageContainer>
    //       <Image
    //         src={galleryList[currentImageIndex].src}
    //         alt={`Фото ${currentImageIndex + 1}`}
    //       />
    //     </ImageContainer>

    //     <Btn onClick={goToNextImage}>
    //       <IconRight />
    //       <IconRightDesc />
    //     </Btn>
    //   </GalleryContainer>
    //   <Selector
    //     galleryList={galleryList}
    //     currentImageIndex={currentImageIndex}
    //   />

    //   <Button type="button">Запис на перегляд</Button>
    // </Container>
    <Slider items={galleryList} />
  );
};

export default Gallery;
