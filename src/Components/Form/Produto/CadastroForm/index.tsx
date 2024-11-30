import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
};

const LocalProdutoCadastroForm: React.FC<Props> = ({ quitButtonText, subimitButtonText, onHide }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [genero, setGenero] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${nome}, Valor: ${valor}, Gênero: ${genero}`);
    setNome("");
    setValor(0);
    setGenero("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Valor do produto</Form.Label>
          <Form.Control
            type="number"
            placeholder="R$ 00,00"
            value={valor}
            onChange={(e) => setValor(parseFloat(e.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Gênero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
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

export default LocalProdutoCadastroForm;
