import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type ClienteObj = {
  cli_cod: number,
  cli_nome: string,
  cli_nomeSocial: string
  cli_sexo: string,
  cli_cpf: string,
  cli_cpfEmissao: Date
  telefones: [{
    tel_cod: number,
    tel_numero: string,
    tel_ddd: string,
    cli_cod: number
  }],
  rgs: [{
    rg_cod: number,
    rg_valor: string,
    rg_dataEmissao: string,
    cli_cod: number
  }]
}

type Props = {
  object: any
  quitButtonText: string;
  subimitButtonText: string;
  onHide: () => void;
  clientes: ClienteObj[];
};

const LocalProdutoEditarForm: React.FC<Props> = ({ object, quitButtonText, subimitButtonText, onHide, clientes }) => {
  const [nome, setNome] = useState(object.prod_nome);
  const [valor, setValor] = useState(object.prod_valor);
  const [genero, setGenero] = useState(object.prod_genero);
  const [showConsumoForm, setShowConsumoForm] = useState(false);
  const [consumidos, setConsumidos] = useState(0);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nome == '' || valor == 0 || genero == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{

    try{
      const response = await fetch(`http://localhost:5000/produto/${object.prod_cod}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prod_nome: nome, prod_valor: valor, prod_genero: genero, prod_dataCriacao: object.prod_dataCriacao}), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Produto editado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao editar o Produto: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao editar o Produto');
    }


    setNome("");
    setValor(0);
    setGenero("");
  }
  };

  const handleConsumoSubmit = async () => {
    if (nome == '' || valor == 0 || genero == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{
    
    try{
      const response = await fetch(`http://localhost:5000/produto/consumo/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prod_cod: object.prod_cod, cli_cod: usuarioSelecionado, consumo_quantidade: consumidos, consumo_data: Date.now() }), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('consumo cadastrado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao cadastrar o consumo: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar o consumo');
    }


    setConsumidos(0);
    setShowConsumoForm(false);
  }
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
                    <option key={i.cli_cod} value={i.cli_cod}>
                      {i.cli_nome}
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
