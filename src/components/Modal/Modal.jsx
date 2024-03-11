import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Overlay,
  ModalComponent,
  ModalTitle,
  CloseBtn,
  IconClose,
  Form,
  LabelsTextWrapper,
  LabelsWrapper,
  Label,
  Input,
  Text,
} from "./Modal.styled";
import Button from "../Button";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose }) => {
  const [showDescText, setShowDescText] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setShowDescText(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const el = document.createElement("div");
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(
    <Overlay>
      <ModalComponent className="modal-content">
        <CloseBtn onClick={onClose}>
          <IconClose />
        </CloseBtn>
        <ModalTitle>ЖК “Nice view”</ModalTitle>
        <Form>
          <LabelsTextWrapper>
            <LabelsWrapper>
              <Label>
                Як до Вас звертатися?
                <Input
                  type="text"
                  name="name"
                  placeholder="Світлана Валеріївна"
                />
              </Label>
              <Label>
                Введіть Ваш номер телефону:
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+38 (000) 000 00 00"
                />
              </Label>
            </LabelsWrapper>

            <Text>
              {showDescText
                ? "Замовте консультацію зараз і ми перетелефонуємо протягом 5 хвилин."
                : "Ми перетелефонуємо протягом 5 хвилин."}
            </Text>
          </LabelsTextWrapper>

          <Button type="submit">Дзвінок</Button>
        </Form>
      </ModalComponent>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
