import React, { useState } from "react";
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

const ProdutoPage: React.FC<Props> = ({ objects, types, clientes }) => {
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
                        {key === "valor"
                          ? formatCurrency(Row[key]).toString()
                          : Row[key]?.toString()}
                      </td>
                    );
                  })}
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
