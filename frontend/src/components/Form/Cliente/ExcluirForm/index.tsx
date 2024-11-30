import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  clientId: number;
  quitButtonText: string;
  submitButtonText: string;
  onHide: () => void;
};

const LocalClienteExcluirForm: React.FC<Props> = ({
  clientId,
  quitButtonText,
  submitButtonText,
  onHide,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch(`http://localhost:32832/cliente/excluir`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: clientId }), 
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
          <Button
            variant="primary"
            type="submit" // No onClick here, only form submit will trigger the handler
          >
            {submitButtonText}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default LocalClienteExcluirForm;
