import React, { FC, useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../components/Modal";
import LocalServicoCadastroForm from "../../components/Form/Serviço/CadastroForm";
import LocalServicoExcluirForm from "../../components/Form/Serviço/ExcluirForm";
import LocalServicoEditarForm from "../../components/Form/Serviço/EditarForm";

type ServicoDataType = {
  serv_cod: number,
  serv_nome: string,
  serv_valor: number,
  serv_genero: string,
  serv_dataCriacao: Date
}

type Props = {
  objects: any;
  types: string[];
  clientes: any;
};

const ServicoPage: FC<Props> = ({ objects, types, clientes }) => {
  const [showModalEdicao, setShowModalEdicao] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [consumoData, setConsumoData] = useState<{ [key: number]: number }>({});
  const [selectedClient, setSelectedClient] = useState(0);
  const [object, setObject] = useState<ServicoDataType | undefined>();

  const handleShowEdicao = (clientId: number) => {
    let obj
    objects.map((e: { serv_cod: number; }) => {
      if (e.serv_cod == clientId){
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

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // Fetch consumption data for a given service ID
  const fetchConsumo = async (id: number): Promise<number> => {
    const response = await fetch(`http://localhost:5000/servico/consumo/${id}`);
    const jsonData = await response.json();
    return jsonData;
  };

  // Update consumo data when the component mounts or objects change
  useEffect(() => {
    const fetchAllConsumos = async () => {
      const consumoPromises = objects.map(async (row: any) => {
        const consumo = await fetchConsumo(row.serv_cod);
        setConsumoData((prev) => ({
          ...prev,
          [row.serv_cod]: consumo,
        }));
      });
      await Promise.all(consumoPromises);
    };

    fetchAllConsumos();
  }, [objects]); // Run this effect when objects change

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
              <th>Consumo</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {objects.map((Row: any, index: any) => (
              <tr key={index}>
                {types.map((key, colIndex) => (
                  <td key={colIndex}>
                    {key === "serv_valor" ? formatCurrency(Row[key]) : Row[key]?.toString()}
                  </td>
                ))}
                <td>
                  {/* Display the consumption data for this row */}
                  {consumoData[Row.serv_cod] !== undefined
                    ? consumoData[Row.serv_cod]
                    : "Carregando..."}
                </td>
                <td>
                  <button
                    onClick={() => handleShowEdicao(Row.serv_cod)}
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
                    onClick={() => handleShowExcluir(Row.serv_cod)}
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
              object={object}
              cliente={clientes}
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
              servicoId={selectedClient}
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
