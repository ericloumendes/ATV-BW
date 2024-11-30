import React, { FC } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  servicoId: number;
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
};

const LocalServicoExcluirForm: FC<Props> = ({ servicoId, quitButtonText, subimitButtonText, onHide }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/servico/${servicoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful response
      if (response.ok) {
        alert('Serviço excluído com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao excluir o Serviço: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao excluir o Serviço');
    }
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

export default LocalServicoExcluirForm;
