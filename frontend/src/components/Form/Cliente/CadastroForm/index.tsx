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
  const [cpfEmissao, setCpfEmissao] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (nome == '' || nomeSocial == '' || sexo == '' || cpf == '' || cpfEmissao == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{
    
    try{
      const response = await fetch(`http://localhost:5000/cliente/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cli_nome: nome, cli_nomeSocial: nomeSocial, cli_sexo: sexo, cli_cpf: cpf, cli_cpfEmissao: cpfEmissao }), 
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
    setNomeSocial("");
    setSexo("Masculino")
    setCpf("");
    setCpfEmissao("")
  }
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
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
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

        <Form.Group className="mb-3" controlId="formCpf">
          <Form.Label>Data de emissão do CPF</Form.Label>
          <Form.Control
            type="date"
            value={cpfEmissao}
            onChange={(e) => setCpfEmissao(e.target.value)}
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
