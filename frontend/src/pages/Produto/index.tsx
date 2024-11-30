import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../components/Modal";
import LocalProdutoEditarForm from "../../components/Form/Produto/EditarForm";
import LocalProdutoCadastroForm from "../../components/Form/Produto/CadastroForm";
import LocalProdutoExcluirForm from "../../components/Form/Produto/ExcluirForm";

type Props = {
  objects: any;
  types: string[];
  clientes: any;
};

type ProdutoDataType = {
  prod_cod: number,
  prod_nome: string,
  prod_valor: number,
  prod_genero: string,
  prod_dataCriacao: Date
}

const ProdutoPage: React.FC<Props> = ({ objects, types, clientes }) => {
  const [showModalEdicao, setShowModalEdicao] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [consumoData, setConsumoData] = useState<{ [key: number]: number }>({});
  const [selectedClient, setSelectedClient] = useState(0);
  const [object, setObject] = useState<ProdutoDataType | undefined>();

  const handleShowEdicao = (clientId: number) => {
    let obj
    objects.map((e: { prod_cod: number; }) => {
      if (e.prod_cod == clientId){
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
      const response = await fetch(`http://localhost:5000/produto/consumo/${id}`);
      const jsonData = await response.json();
      return jsonData;
    };
  
    // Update consumo data when the component mounts or objects change
    useEffect(() => {
      const fetchAllConsumos = async () => {
        const consumoPromises = objects.map(async (row: any) => {
          const consumo = await fetchConsumo(row.prod_cod);
          setConsumoData((prev) => ({
            ...prev,
            [row.prod_cod]: consumo,
          }));
        });
        await Promise.all(consumoPromises);
      };
  
      fetchAllConsumos();
    }, [objects]); // Run this effect when objects change
  

  return (
    <>
      <div className="TitleText">
        <h1>Produtos</h1>
      </div>

      <br />
      <br />
      <Container>
        <Table responsive="lg" striped bordered hover variant="dark">
          <thead>
            <tr>
              {types.map((value, index) => {
                return <th key={index}>{value}</th>;
              })}
              <th>Consumo</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {objects.map((Row: any, index: any) => {
              return (
                <tr key={index}>
                  {types.map((key, colIndex) => {
                    return (
                      <td key={colIndex}>
                        {key === "prod_valor"
                          ? formatCurrency(Row[key]).toString()
                          : Row[key]?.toString()}
                      </td>
                    );
                  })}

                <td>
                  {/* Display the consumption data for this row */}
                  {consumoData[Row.prod_cod] !== undefined
                    ? consumoData[Row.prod_cod]
                    : "Carregando..."}
                </td>

                  <td>
                    <button
                      onClick={() => handleShowEdicao(Row.prod_cod)}
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
                      onClick={() => handleShowExcluir(Row.prod_cod)}
                      style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        borderColor: "rgba(0,0,0,0)",
                      }}
                    >
                      <FaRegTrashCan style={{ color: "white" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <br />

        <div className="TitleText">
          <Button variant="primary" onClick={handleShowCadastro}>
            Cadastrar produto
          </Button>
        </div>

        {/* Modal de edição */}
        <LocalModal
          show={showModalEdicao}
          onHide={handleCloseEdicao}
          title="Editar Produto"
          bodyText="Aqui vão os formulários de edição"
          bodyForm={
            <LocalProdutoEditarForm
              object={object}
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
          title="Excluir Produto"
          bodyText="Você tem certeza que deseja excluir este produto?"
          bodyForm={
            <LocalProdutoExcluirForm
              produtoId={selectedClient}
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
          title="Cadastrar Produto"
          bodyText="Preencha os campos abaixo:"
          bodyForm={
            <LocalProdutoCadastroForm
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

export default ProdutoPage;
