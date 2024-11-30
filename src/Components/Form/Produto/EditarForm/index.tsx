import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type ClienteObj = {
  id?: number;
  nome?: string;
  nomeSocial?: string;
  sexo?: string;
  cpf?: string;
  telefones?: string[];
  rgs?: string[];
};

type Props = {
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
  clientes: ClienteObj[];
};

const LocalProdutoEditarForm: React.FC<Props> = ({ quitButtonText, subimitButtonText, onHide, clientes }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [genero, setGenero] = useState("");
  const [showConsumoForm, setShowConsumoForm] = useState(false);
  const [consumidos, setConsumidos] = useState(0);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${nome}, Valor: ${valor}, Gênero: ${genero}`);
    setNome("");
    setValor(0);
    setGenero("");
  };

  const handleConsumoSubmit = () => {
    alert(`Quantidade consumida: ${consumidos}, Id do cliente: ${usuarioSelecionado}`);
    setConsumidos(0);
    setShowConsumoForm(false);
  };

  const handleChangeUsuario = (e: React.ChangeEvent<any>) => {
    // Cast e.target to HTMLSelectElement
    setUsuarioSelecionado(Number((e.target as HTMLSelectElement).value));
    console.log('Selected Option:', (e.target as HTMLSelectElement).value);
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

        <div style={{ marginBottom: "20px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowConsumoForm(true);
            }}
          >
            + Cadastrar consumo
          </a>

          {showConsumoForm && (
            <div style={{ marginTop: "1rem" }}>
              <Form.Group controlId="ConsumoInput">
                <Form.Label>Quantidade consumida</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  value={consumidos}
                  onChange={(e) => setConsumidos(parseInt(e.target.value))}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="chooseField">
                <Form.Label>Cliente que consumiu</Form.Label>
                <Form.Control as="select" value={usuarioSelecionado} onChange={handleChangeUsuario}>
                  {clientes.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.nome}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "0.5rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation(); // Prevent bubbling to parent form
                  handleConsumoSubmit();
                }}
              >
                Cadastrar
              </Button>
            </div>
          )}
        </div>

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

export default LocalProdutoEditarForm;
