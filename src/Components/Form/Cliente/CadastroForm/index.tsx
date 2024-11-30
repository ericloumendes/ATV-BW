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
  const [nomeSocial, setNomeSocial] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert(`Nome: ${nome}, Nome Social: ${nomeSocial}, Sexo: ${sexo}, CPF: ${cpf}`);
    setNome("");
    setNomeSocial("");
    setSexo("masculino");
    setCpf("");
  };

  const handleChangeSexo = (e: React.ChangeEvent<any>) => {
    const value = (e.target as HTMLSelectElement).value;
    setSexo(value);
    console.log("Selected Option:", value);
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
          <Form.Label>Nome Social</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome social do cliente"
            value={nomeSocial}
            onChange={(e) => setNomeSocial(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="chooseField">
          <Form.Label>Sexo</Form.Label>
          <Form.Control as="select" value={sexo} onChange={handleChangeSexo}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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
