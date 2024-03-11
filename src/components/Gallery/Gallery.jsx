import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import {
  Container,
  GalleryContainer,
  ImageContainer,
  Image,
  Btn,
  IconLeft,
  IconRight,
} from "./Gallery.styled";
import Button from "../Button";
import Modal from "../Modal";
import Selector from "./Selector";
import { galleryList } from "../../utils/galleryList";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(4);
  const [showDescComponent, setShowDescComponent] = useState(
    window.innerWidth >= 1440
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowDescComponent(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryList.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {!showDescComponent && (
        <Container>
          <GalleryContainer>
            <Btn onClick={goToPreviousImage}>
              <IconLeft />
            </Btn>
            <ImageContainer>
              <Image
                src={galleryList[currentImageIndex].src}
                alt={`Фото ${currentImageIndex + 1}`}
              />
            </ImageContainer>

            <Btn onClick={goToNextImage}>
              <IconRight />
            </Btn>
          </GalleryContainer>
          <Selector
            galleryList={galleryList}
            currentImageIndex={currentImageIndex}
          />

          <Button type="button" onClick={openModal}>
            Запис на перегляд
          </Button>
          {isModalOpen && <Modal onClose={closeModal} />}
        </Container>
      )}

      {showDescComponent && <Slider items={galleryList} />}
    </>
  );
};

export default Gallery;
