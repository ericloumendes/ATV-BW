import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
};

const LocalClienteExcluirForm: React.FC<Props> = ({
  quitButtonText,
  subimitButtonText,
  onHide,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert("Cliente excluído com sucesso!");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {quitButtonText}
          </Button>
          <Button variant="primary" type="submit" onClick={onHide}>
            {subimitButtonText}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default LocalClienteExcluirForm;
