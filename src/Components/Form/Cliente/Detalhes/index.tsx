import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

type Props = {
  object: {
    id?: number;
    nome?: string;
    nomeSocial?: string;
    sexo?: string;
    cpf?: string;
    telefones?: string[];
    rgs?: string[];
  };
  quitButtonText: string;
  onHide: () => void;
};

const LocalDetalhesClienteForm: React.FC<Props> = ({ object, quitButtonText, onHide }) => {
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const [showRgForm, setShowRgForm] = useState(false);
  const [newRg, setNewRg] = useState("");

  const handleAddPhoneClick = () => setShowPhoneForm(true);

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPhone(e.target.value);

  const handlePhoneSubmit = () => {
    alert("Novo telefone adicionado:" + newPhone);
    setShowPhoneForm(false);
    setNewPhone("");
  };

  const handleAddRgClick = () => setShowRgForm(true);

  const handleRgInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewRg(e.target.value);

  const handleRgSubmit = () => {
    alert("Novo RG adicionado:" + newRg);
    setShowRgForm(false);
    setNewRg("");
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>Telefones do cliente:</h3>
        {object.telefones && object.telefones.length > 0 ? (
          <ul>
            {object.telefones.map((tel: string, index: number) => (
              <li key={index}>{tel}</li>
            ))}
          </ul>
        ) : (
          <p>Este cliente não possui telefones cadastrados.</p>
        )}
        <a href="#" onClick={(e) => { e.preventDefault(); handleAddPhoneClick(); }}>
          + Adicionar telefone
        </a>

        {showPhoneForm && (
          <Form
            style={{ marginTop: "1rem" }}
            onSubmit={(e) => {
              e.preventDefault();
              handlePhoneSubmit();
            }}
          >
            <Form.Group controlId="phoneInput">
              <Form.Label>Novo Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="(00) 00000-0000"
                value={newPhone}
                onChange={handlePhoneInputChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "0.5rem" }}
            >
              Adicionar
            </Button>
          </Form>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Rgs do cliente:</h3>
        {object.rgs && object.rgs.length > 0 ? (
          <ul>
            {object.rgs.map((rg: string, index: number) => (
              <li key={index}>{rg}</li>
            ))}
          </ul>
        ) : (
          <p>Este cliente não possui RGs cadastrados.</p>
        )}
        <a href="#" onClick={(e) => { e.preventDefault(); handleAddRgClick(); }}>
          + Adicionar RG
        </a>

        {showRgForm && (
          <Form
            style={{ marginTop: "1rem" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleRgSubmit();
            }}
          >
            <Form.Group controlId="rgInput">
              <Form.Label>Novo RG</Form.Label>
              <Form.Control
                type="text"
                placeholder="00.000.000-0"
                value={newRg}
                onChange={handleRgInputChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "0.5rem" }}
            >
              Adicionar
            </Button>
          </Form>
        )}
      </div>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {quitButtonText}
        </Button>
      </Modal.Footer>
    </>
  );
};

export default LocalDetalhesClienteForm;
