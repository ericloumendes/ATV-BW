import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  object: any
  quitButtonText: string;
  onHide: () => void;
};

const LocalDetalhesClienteForm: React.FC<Props> = ({ object, quitButtonText, onHide }) => {
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const [newDdd, setNewDdd] = useState("");
  const [showRgForm, setShowRgForm] = useState(false);
  const [newRg, setNewRg] = useState("");
  const [newRgEmissao, setNewRgEmissao] = useState("");

  const handleAddPhoneClick = () => setShowPhoneForm(true);

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPhone(e.target.value);

  const handlePhoneDddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewDdd(e.target.value);

  const handlePhoneSubmit = async () => {
    if (newPhone == '' || newDdd == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{
    
    try{
      const response = await fetch(`http://localhost:5000/telefones/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tel_numero: newPhone, tel_ddd: newDdd, cli_cod: object.cli_cod}), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Telefone cadastrado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao cadastrar o telefone: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar o telefone');
    }


    setShowPhoneForm(false);
    setNewPhone("");
    setNewDdd("");
  }
  };

  const handleDeleteRgs = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/rgs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful response
      if (response.ok) {
        alert('Rg excluído com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao excluir o Rg: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao excluir o Rg');
    }
  }

  const handleDeletePhone = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/telefones/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful response
      if (response.ok) {
        alert('Telefone excluído com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao excluir o telefone: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao excluir o telefone');
    }
  }

  const handleAddRgClick = () => setShowRgForm(true);

  const handleRgInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewRg(e.target.value);

  const handleRgEmissaoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewRgEmissao(e.target.value);

  const handleRgSubmit = async () => {
    if (newRg == '' || newRgEmissao == ''){
      alert('Por favor, preencha todos os campos!')
    }

    else{
    
    try{
      const response = await fetch(`http://localhost:5000/rgs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rg_valor: newRg, rg_dataEmissao: newRgEmissao, cli_cod: object.cli_cod}), 
      });
      // Check for a successful response
      if (response.ok) {
        alert('Rg cadastrado com sucesso');
        onHide(); // Close the modal after a successful request
        window.location.reload();
      } else {
        const errorText = await response.text(); // Get the error message from the server
        alert(`Erro ao cadastrar o Rg: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao cadastrar o Rg');
    }


    setShowRgForm(false);
    setNewRg("");
    setNewRgEmissao("");
  }
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <h3>Telefones do cliente:</h3>
        {object.telefones && object.telefones.length > 0 ? (
          <ul>
            {object.telefones.map((a: any) => (
              <li key={a.tel_cod}>{a.tel_ddd} {a.tel_numero} <button onClick={() => handleDeletePhone(a.tel_cod)} style={{ backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(0,0,0,0)", }}> <FaRegTrashCan /> </button></li>
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
                value={newDdd}
                onChange={handlePhoneDddInputChange}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumbInput">
              <Form.Label>Novo número de telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número"
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
            {object.rgs.map((a: any) => (
              <li key={a.rg_cod}>{a.rg_valor} <button onClick={() => handleDeleteRgs(a.rg_cod)} style={{ backgroundColor: "rgba(0,0,0,0)", borderColor: "rgba(0,0,0,0)", }}> <FaRegTrashCan /> </button></li>
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

            <Form.Group controlId="rgInput">
              <Form.Label>Data de emissão do novo RG</Form.Label>
              <Form.Control
                type="date"
                value={newRgEmissao}
                onChange={handleRgEmissaoInputChange}
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
