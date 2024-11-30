import React from "react";
import { Button, Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  title: string;
  bodyText: string;
  onHide: () => void;
  bodyForm: React.ReactNode | null;
};

const LocalModal: React.FC<Props> = ({ show, title, bodyText, onHide, bodyForm }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "black" }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: "black" }}>{bodyText}</Modal.Body>
      <Modal.Body style={{ color: "black" }}>{bodyForm}</Modal.Body>
    </Modal>
  );
};

export default LocalModal;
