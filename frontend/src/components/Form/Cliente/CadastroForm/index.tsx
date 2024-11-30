import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
};

const LocalClienteCadastroForm: React.FC<Props> = ({
  quitButtonText,
  subimitButtonText,
  onHide,
}) => {
  const [nome, setNome] = useState("");
  const [nomeSobrenome, setNomeSobrenome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (nome == '' || nomeSobrenome == '' || email == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{
    
    try{
      const response = await fetch(`http://localhost:32832/cliente/cadastrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: nome, sobreNome: nomeSobrenome, email: email }), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Cliente cadastrado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao cadastrar o cliente: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar o cliente');
    }


    setNome("");
    setNomeSobrenome("");
    setEmail("");
  }
  };
  

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNomeSocial">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sobrenome do cliente: "
            value={nomeSobrenome}
            onChange={(e) => setNomeSobrenome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCpf">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="e-mail"
            placeholder="endereço@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {quitButtonText}
          </Button>
          <Button variant="primary" type="submit">
            {subimitButtonText}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default LocalClienteCadastroForm;
