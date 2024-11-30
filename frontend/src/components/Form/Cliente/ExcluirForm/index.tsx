import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  clienteId: number;
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
};

const LocalClienteExcluirForm: React.FC<Props> = ({
  clienteId,
  quitButtonText,
  subimitButtonText,
  onHide,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch(`http://localhost:5000/cliente/${clienteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful response
      if (response.ok) {
        alert('Cliente excluído com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao excluir o cliente: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao excluir o cliente');
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

export default LocalClienteExcluirForm;
