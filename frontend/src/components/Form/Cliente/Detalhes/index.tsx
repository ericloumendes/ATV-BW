import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

type Props = {
  object: any
  quitButtonText: string;
  onHide: () => void;
};

const LocalDetalhesClienteForm: React.FC<Props> = ({ object, quitButtonText, onHide }) => {
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [newTelddd, setNewTelddd] = useState("");
  const [newTelNumero, setNewTelNumero] = useState("");
  const [showRgForm, setShowRgForm] = useState(false);
  const [newEstado, setNewEstado] = useState("");
  const [newCidade, setNewCidade] = useState("");
  const [newBairro, setNewBairro] = useState("");
  const [newRua, setNewRua] = useState("");
  const [newNumero, setNewNumero] = useState("");
  const [newCodigoPostal, setNewCodigoPostal] = useState("");
  const [newInformacoesAdicionais, setNewInformacoesAdicionais] = useState("");

  const handleAddPhoneClick = () => setShowPhoneForm(true);

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {setNewTelNumero(e.target.value);}
  const handleDddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {setNewTelddd(e.target.value);}

  const handlePhoneSubmit = async () => {

    if (newTelNumero == '' || newTelddd == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{

    try{

      let formdata = []

      console.log(object.telefones)

      object.telefones.map((tel: { numero: any; ddd: any; }) => {
          let data = {
            numero: tel.numero,
            ddd: tel.ddd
          }

          formdata.push(data)
      })

      let data = {
        numero: newTelNumero,
        ddd: newTelddd
      }

      formdata.push(data)

      console.log(formdata)

      const response = await fetch(`http://localhost:32832/cliente/atualizar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: object.id, nome: object.nome, sobreNome: object.nomeSobrenome, email: object.email, endereco: object.endereco, telefones: formdata }), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Telefone cadastrado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao editar telefone: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar telefone');
    }


    setShowPhoneForm(false);
    setNewTelNumero("");
    setNewTelddd("");
  }
  };

  const handleAddRgClick = () => setShowRgForm(true);

  const handleEstadoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewEstado(e.target.value); }
  const handleCidadeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewCidade(e.target.value); }
  const handleBairroInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewBairro(e.target.value); }
  const handleRuaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewRua(e.target.value); }
  const handleNumeroInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewNumero(e.target.value); }
  const handleCodigoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewCodigoPostal(e.target.value); }
  const handleInfoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setNewInformacoesAdicionais(e.target.value); }

  const handleRgSubmit = async () => {
    
    if (newEstado == '' || newCidade == '' || newBairro == '' || newRua == '' || newNumero == '' || newCodigoPostal == '' || newInformacoesAdicionais == ''){
      alert('Por favor, preencha todos os campos!')
    }
    else{

    try{

      let dataform = {
        estado: newEstado,
        cidade: newCidade,
        bairro: newBairro,
        rua: newRua,
        numero: newNumero,
        codigoPostal: newCodigoPostal,
        informacoesAdicionais: newInformacoesAdicionais
      }

      const response = await fetch(`http://localhost:32832/cliente/atualizar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: object.id, nome: object.nome, sobreNome: object.nomeSobrenome, email: object.email, endereco: dataform, telefones: object.telefones }), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Endereço atualizado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao atualizar o endereço: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao atualizar o endereço');
    }


    setNewEstado("");
    setNewCidade("");
    setNewBairro("");
    setNewRua("");
    setNewNumero("");
    setNewCodigoPostal("");
    setNewInformacoesAdicionais("");
  }
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>Telefones do cliente:</h3>
        {object.telefones && object.telefones.length > 0 ? (
          <ul>
            {object.telefones.map((tel: any) => (
              <li key={tel.id}>({tel.ddd}) {tel.numero}</li>
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
            <Form.Group controlId="phonedddInput">
              <Form.Label>Novo DDD</Form.Label>
              <Form.Control
                type="text"
                placeholder="DDD"
                value={newTelddd}
                onChange={handleDddInputChange}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumbInput">
              <Form.Label>Novo número de telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número"
                value={newTelNumero}
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
        <h3>Endereço do cliente:</h3>
        {object.endereco ? (
          <div>
          <ul>
            <li>Endereço: {object.endereco.rua}, {object.endereco.numero}, {object.endereco.bairro} | {object.endereco.cidade} - {object.endereco.estado}</li>
            <li>Código postal: {object.endereco.codigoPostal}</li>
            <li>Informações adicionais: {object.endereco.informacoesAdicionais}</li>
          </ul>

          <a href="#" onClick={(e) => { e.preventDefault(); handleAddRgClick(); }}>
            + Editar endereço
          </a>
          </div>
        ) : (
          <div>
          <p>Este cliente não possui um endereço cadastrado.</p>

          <a href="#" onClick={(e) => { e.preventDefault(); handleAddRgClick(); }}>
          + Cadastrar um endereço
        </a>
        </div>
        )}


        {showRgForm && (
          <Form
            style={{ marginTop: "1rem" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleRgSubmit();
            }}
          >
            <Form.Group controlId="rgInput">
              <Form.Label>Estado:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                value={newEstado}
                onChange={handleEstadoInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cidade"
                value={newCidade}
                onChange={handleCidadeInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bairro"
                value={newBairro}
                onChange={handleBairroInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rua"
                value={newRua}
                onChange={handleRuaInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número"
                value={newNumero}
                onChange={handleNumeroInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="CEP"
                value={newCodigoPostal}
                onChange={handleCodigoInputChange}
              />
            </Form.Group>

            <Form.Group controlId="rgInput">
              <Form.Label>Informações adicionais</Form.Label>
              <Form.Control
                type="text"
                placeholder="Informações adicionais"
                value={newInformacoesAdicionais}
                onChange={handleInfoInputChange}
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
