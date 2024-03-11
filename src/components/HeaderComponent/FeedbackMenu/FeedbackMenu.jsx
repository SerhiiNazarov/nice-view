import React, { useState } from "react";
import { Container, MenuTitle, MenuText } from "./FeedbackMenu.styled";
import Button from "../../Button";
import Modal from "../../Modal";

const FeedbackMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <MenuTitle>ЖК “Nice view”</MenuTitle>
      <MenuText>
        При 100% оплаті знижка 5% від банку. Пропозиція дійсна до 31.12.22 р.
      </MenuText>
      <Button type="button" onClick={openModal}>
        Дзвінок
      </Button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
};

export default FeedbackMenu;
