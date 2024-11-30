import React, { FC, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../Components/Modal";
import LocalServicoCadastroForm from "../../Components/Form/Serviço/CadastroForm";
import LocalServicoExcluirForm from "../../Components/Form/Serviço/ExcluirForm";
import LocalServicoEditarForm from "../../Components/Form/Serviço/EditarForm";

type Props = {
  objects: any;
  types: string[];
  clientes: any;
};

const ServicoPage: FC<Props> = ({ objects, types, clientes }) => {
  const [showModalEdicao, setShowModalEdicao] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [showModalCadastro, setShowModalCadastro] = useState(false);

  const handleShowEdicao = () => setShowModalEdicao(true);
  const handleCloseEdicao = () => setShowModalEdicao(false);

  const handleShowExcluir = () => setShowModalExcluir(true);
  const handleCloseExcluir = () => setShowModalExcluir(false);

  const handleShowCadastro = () => setShowModalCadastro(true);
  const handleCloseCadastro = () => setShowModalCadastro(false);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <>
      <div className="TitleText">
        <h1>Serviços</h1>
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
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {objects.map((Row: any, index: any) => (
              <tr key={index}>
                {types.map((key, colIndex) => (
                  <td key={colIndex}>
                    {key === "valor" ? formatCurrency(Row[key]) : Row[key]?.toString()}
                  </td>
                ))}
                <td>
                  <button
                    onClick={handleShowEdicao}
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
                    onClick={handleShowExcluir}
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
            Cadastrar serviço
          </Button>
        </div>

        {/* Modal de edição */}
        <LocalModal
          show={showModalEdicao}
          onHide={handleCloseEdicao}
          title="Editar Serviço"
          bodyText="Aqui vão os formulários de edição"
          bodyForm={
            <LocalServicoEditarForm
              clientes={clientes}
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
          title="Excluir Serviço"
          bodyText="Você tem certeza que deseja exluir este serviço?"
          bodyForm={
            <LocalServicoExcluirForm
              quitButtonText="Não"
              subimitButtonText="Sim"
              onHide={handleCloseExcluir}
            />
          }
        />

        {/* Modal de Cadastro */}
        <LocalModal
          show={showModalCadastro}
          onHide={handleCloseCadastro}
          title="Cadastrar Serviço"
          bodyText="Preencha os campos abaixo:"
          bodyForm={
            <LocalServicoCadastroForm
              quitButtonText="Sair"
              subimitButtonText="Cadastrar"
              onHide={handleCloseCadastro}
            />
          }
        />
      </Container>
    </>
  );
};

export default ServicoPage;
