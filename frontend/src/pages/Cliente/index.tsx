import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../components/Modal";
import LocalClienteCadastroForm from "../../components/Form/Cliente/CadastroForm";
import LocalClienteExcluirForm from "../../components/Form/Cliente/ExcluirForm";
import LocalClienteEditarForm from "../../components/Form/Cliente/EditarForm";
import LocalDetalhesClienteForm from "../../components/Form/Cliente/Detalhes";
import { log } from "console";



type ClientDataType = {
    id: number,
    nome: string,
    sobreNome: string
    email?: string,
    endereco: {
      id: number,
      estado: string,
      cidade: string,
      bairro: string,
      rua: string,
      numero: string,
      codigoPostal: string,
      informacoesAdicionais: string,
      links: []
    },
    telefones: [{
      id: number,
      ddd: string,
      numero: string,
      links: []
    }],
    links: any[]
};

type Props = {
  objects: ClientDataType[];
  types: string[];
};

const ClientePage: React.FC<Props> = ({ objects, types }) => {
  const [showModalEdicao, setShowModalEdicao] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [showModalDetalhes, setShowModalDetalhes] = useState(false);
  const [selectedClient, setSelectedClient] = useState(0);
  const [object, setObject] = useState<ClientDataType | undefined>();

  const handleShowEdicao = (clientId: number) => {
    let obj
    objects.map(e => {
      if (e.id == clientId){
        obj = e;
      }
    })

    setObject(obj)
    setSelectedClient(clientId);
    setShowModalEdicao(true)
  };
  const handleCloseEdicao = () => setShowModalEdicao(false);

  const handleShowExcluir = (clientId: number) => {
    setSelectedClient(clientId);
    setShowModalExcluir(true);
  }
  const handleCloseExcluir = () => setShowModalExcluir(false);

  const handleShowCadastro = () => setShowModalCadastro(true);
  const handleCloseCadastro = () => setShowModalCadastro(false);

  const handleShowDetalhes = (ClientId: number) => {
    let obj
    objects.map(e => {
      if (e.id == ClientId){
        obj = e;
      }
    })

    setObject(obj)
    setSelectedClient(ClientId);
    setShowModalDetalhes(true);
  };
  const handleCloseDetalhes = () => setShowModalDetalhes(false);

  return (
    <>
      <div className="TitleText">
        <h1>Clientes</h1>
      </div>

      <br />
      <br />
      <Container>
        <Table responsive="lg" striped bordered hover variant="dark">
          <thead>
            <tr>
              {types.map((value, index) => (
                <th key={index}>{value}</th>
              ))}
              <th>Detalhes</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {objects.map((Row: any, index: any) => (
              <tr key={index}>
                {types.map((key, colIndex) => (
                  <td key={colIndex}>{Row[key]?.toString()}</td>
                ))}
                <td>
                  <button
                    onClick={() => handleShowDetalhes(Row.id)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0)",
                      borderColor: "rgba(0,0,0,0)",
                    }}
                  >
                    <FaEye style={{ color: "white" }} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleShowEdicao(Row.id)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0)",
                      borderColor: "rgba(0,0,0,0)",
                    }}
                  >
                    <FaEdit style={{ color: "white" }} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleShowExcluir(Row.id)}
                    style={{
                      backgroundColor: "rgba(0,0,0,0)",
                      borderColor: "rgba(0,0,0,0)",
                    }}
                  >
                    <FaRegTrashCan style={{ color: "white" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <br />

        <div className="TitleText">
          <Button variant="primary" onClick={handleShowCadastro}>
            Cadastrar cliente
          </Button>
        </div>

        {/* Modal de edição */}
        <LocalModal
          show={showModalEdicao}
          onHide={handleCloseEdicao}
          title="Editar Cliente"
          bodyText="Aqui vão os formulários de edição"
          bodyForm={
            <LocalClienteEditarForm
              Object={object}
              quitButtonText="Sair"
              subimitButtonText="Enviar"
              onHide={handleCloseEdicao}
            />
          }
        />

        {/* Modal de Excluir */}
        <LocalModal
          show={showModalExcluir}
          onHide={handleCloseExcluir}
          title="Excluir Cliente"
          bodyText="Você tem certeza que deseja excluir este cliente?"
          bodyForm={
            <LocalClienteExcluirForm
              clientId={selectedClient}
              quitButtonText="Não"
              submitButtonText="Sim"
              onHide={handleCloseExcluir}
            />
          }
        />

        {/* Modal de Cadastro */}
        <LocalModal
          show={showModalCadastro}
          onHide={handleCloseCadastro}
          title="Cadastrar Cliente"
          bodyText="Preencha os campos abaixo:"
          bodyForm={
            <LocalClienteCadastroForm
              quitButtonText="Sair"
              subimitButtonText="Cadastrar"
              onHide={handleCloseCadastro}
            />
          }
        />

        {/* Modal de detalhes */}
        <LocalModal
          show={showModalDetalhes}
          onHide={handleCloseDetalhes}
          title="Detalhes:"
          bodyText=""
          bodyForm={
            <LocalDetalhesClienteForm
              quitButtonText="Sair"
              onHide={handleCloseDetalhes}
              object={object}
            />
          }
        />
      </Container>
    </>
  );
};

export default ClientePage;