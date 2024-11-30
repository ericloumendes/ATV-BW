import { useState } from "react";
import { Button } from "react-bootstrap";
import LocalModal from "../../Components/Modal";

type ClientesObj = {
  id: number;
  nome: string;
  nomeSocial: string;
  sexo: string;
  cpf: string;
  telefones: string[];
  rgs: string[];
}[];

type ProdutosObj = {
  id?: number;
  nome?: string;
  valor: number;
  genero?: string;
  consumidos?: number;
}[];

type ServicosObj = {
  id?: number;
  nome?: string;
  valor: number;
  genero?: string;
  consumidos?: number;
}[];

type Props = {
  clientes: ClientesObj;
  produtos: ProdutosObj;
  servicos: ServicosObj;
};

const RelatoriosPage: React.FC<Props> = ({ clientes, produtos, servicos }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalForm, setModalForm] = useState<React.ReactNode>(null);

  const handleOpenModal = (title: string, content: any) => {
    setModalTitle(title);
    setModalForm(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const ClientesMaisConsumoProdutos = () => {
    return (
        <ol>
            <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, produtos consumidos: 89</li>
            <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, produtos consumidos: 76</li>
            <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, produtos consumidos: 54</li>
            <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, produtos consumidos: 14</li>
            <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, produtos consumidos: 2</li>
        </ol>
    );
  };

  const ClientesMaisConsumoServicos = () => {
    return(
      <ol>
        <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, Serviços consumidos: 89</li>
        <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, Serviços consumidos: 76</li>
        <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, Serviços consumidos: 54</li>
        <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, Serviços consumidos: 14</li>
        <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, Serviços consumidos: 2</li>
      </ol>
    );
  };

  const ClientesMenosConsumoProdutos = () => {
    return(
      <ol>
        <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, produtos consumidos: 2</li>
        <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, produtos consumidos: 14</li>
        <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, produtos consumidos: 54</li>
        <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, produtos consumidos: 76</li>
        <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, produtos consumidos: 89</li>
      </ol>
    );
  };

  const ClientesMenosConsumoServicos = () => {
    return(
      <ol>
        <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, Serviços consumidos: 2</li>
        <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, Serviços consumidos: 14</li>
        <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, Serviços consumidos: 54</li>
        <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, Serviços consumidos: 76</li>
        <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, Serviços consumidos: 89</li>
      </ol>
    );
  };

  const ClientesMaisConsumoValor = () => {
    return(
      <ol>
        <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, Valor Consumido: R$ 1280,99</li>
        <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, Valor Consumido: R$ 900,67</li>
        <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, Valor Consumido: R$ 779,10</li>
        <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, Valor Consumido: R$ 215,08</li>
        <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, Valor Consumido: R$ 113,99</li>
      </ol>
    );
  };

  const ClienteGenero = () => {
    return(
      <>
        <h3>Masculino</h3>
        <ol>
          <li>Nome: {clientes[0].nome}, CPF: {clientes[0].cpf}, Gênero: {clientes[0].sexo}</li>
          <li>Nome: {clientes[2].nome}, CPF: {clientes[2].cpf}, Gênero: {clientes[2].sexo}</li>
        </ol>
        <br />
        <h3>Feminino</h3>
        <ol>
          <li>Nome: {clientes[1].nome}, CPF: {clientes[1].cpf}, Gênero: {clientes[1].sexo}</li>
          <li>Nome: {clientes[3].nome}, CPF: {clientes[3].cpf}, Gênero: {clientes[3].sexo}</li>
          <li>Nome: {clientes[4].nome}, CPF: {clientes[4].cpf}, Gênero: {clientes[4].sexo}</li>
        </ol>
      </>
    );
  };

  const ProdutoMaisConsumoGenero = () => {
    return(
      <>
        <h3>Sprays</h3>
        <ol>
          <li>Nome: {produtos[0].nome}, Genero: {produtos[0].genero}, Consumidos: {produtos[0].consumidos}</li>
          <li>Nome: {produtos[1].nome}, Genero: {produtos[1].genero}, Consumidos: {produtos[1].consumidos}</li>
        </ol>
        <br />
        <h3>Eletrônicos</h3>
        <ol>
          <li>Nome: {produtos[2].nome}, Genero: {produtos[2].genero}, Consumidos: {produtos[2].consumidos}</li>
        </ol>
        <br />
        <h3>Gels</h3>
        <ol>
          <li>Nome: {produtos[3].nome}, Genero: {produtos[3].genero}, Consumidos: {produtos[3].consumidos}</li>
        </ol>
        <br />
        <h3>Esmaltes</h3>
        <ol>
          <li>Nome: {produtos[4].nome}, Genero: {produtos[4].genero}, Consumidos: {produtos[4].consumidos}</li>
        </ol>
      </>
    );
  };

  const ProdutoMaisConsumoGeral = () => {
    return(
      <>
        <h3>Produtos mais consumidos</h3>
        <ol>
          <li>Nome: {produtos[3].nome}, Consumidos: {produtos[3].consumidos}</li>
          <li>Nome: {produtos[0].nome}, Consumidos: {produtos[0].consumidos}</li>
          <li>Nome: {produtos[1].nome}, Consumidos: {produtos[1].consumidos}</li>
          <li>Nome: {produtos[4].nome}, Consumidos: {produtos[4].consumidos}</li>
          <li>Nome: {produtos[2].nome}, Consumidos: {produtos[2].consumidos}</li>
        </ol>
      </>
    );
  };

  const ServicoMaisConsumoGenero = () => {
    return(
      <>
        <h3>Cortes e barba</h3>
        <ol>
            <li>Nome: {servicos[1].nome}, Genero: {servicos[1].genero}, Consumidos: {servicos[1].consumidos}</li>
            <li>Nome: {servicos[4].nome}, Genero: {servicos[4].genero}, Consumidos: {servicos[4].consumidos}</li>
            <li>Nome: {servicos[0].nome}, Genero: {servicos[0].genero}, Consumidos: {servicos[0].consumidos}</li>
            <li>Nome: {servicos[3].nome}, Genero: {servicos[3].genero}, Consumidos: {servicos[3].consumidos}</li>
        </ol>
        <br />
        <h3>Pintura de cabelo</h3>
        <ol>
            <li>Nome: {servicos[2].nome}, Genero: {servicos[2].genero}, Consumidos: {servicos[2].consumidos}</li>
        </ol>
      </>
    );
  };

  const ServicoMaisConsumoGeral = () => {
    return(
      <>
        <h3>Serviços mais consumidos</h3>
        <ol>
          <li>Nome: {servicos[1].nome}, Consumidos: {servicos[1].consumidos}</li>
          <li>Nome: {servicos[4].nome}, Consumidos: {servicos[4].consumidos}</li>
          <li>Nome: {servicos[0].nome}, Consumidos: {servicos[0].consumidos}</li>
          <li>Nome: {servicos[2].nome}, Consumidos: {servicos[2].consumidos}</li>
          <li>Nome: {servicos[3].nome}, Consumidos: {servicos[3].consumidos}</li>
        </ol>
      </>
    );
  };

  return (
    <div className="TitleText">
        <h1>Relatórios</h1>

        <br />
        <br />

        <h3>Cliente</h3>
      <Button onClick={() => handleOpenModal("10 Clientes que mais consumiram produtos", ClientesMaisConsumoProdutos)}>
        10 Clientes que mais consumiram produtos
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("10 Clientes que mais consumiram serviços", ClientesMaisConsumoServicos )}>
        10 Clientes que mais consumiram serviços
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("10 Clientes que menos consumiram produtos", ClientesMenosConsumoProdutos )}>
        10 Clientes que menos consumiram produtos
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("10 Clientes que menos consumiram serviços", ClientesMenosConsumoServicos )}>
        10 Clientes que menos consumiram serviços
      </Button>
      
      <br />
      <br />

      <Button onClick={() => handleOpenModal("5 Clientes que mais consumiram em valor", ClientesMaisConsumoValor )}>
        5 Clientes que mais consumiram em valor
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("Listagem de todos os clientes por gênero", ClienteGenero )}>
        Listagem de todos os clientes por gênero
      </Button>

      <br />
      <br />

      <h3>Produtos</h3>
      <Button onClick={() => handleOpenModal("Produtos mais consumidos por gênero", ProdutoMaisConsumoGenero )}>
        Produtos mais consumidos por gênero
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("Produtos mais consumidos no geral", ProdutoMaisConsumoGeral )}>
        Produtos mais consumidos no geral
      </Button>

      <br />
      <br />

      <h3>Serviços</h3>  
      <Button onClick={() => handleOpenModal("Serviços mais consumidos por gênero", ServicoMaisConsumoGenero )}>
        Serviços mais consumidos por gênero
      </Button>

      <br />
      <br />

      <Button onClick={() => handleOpenModal("Serviços mais consumidos no geral", ServicoMaisConsumoGeral )}>
        Serviços mais consumidos no geral
      </Button>

      <br />
      <br />

      {showModal && (
        <LocalModal
        show={showModal}
        title={modalTitle}
        onHide={handleCloseModal}
        bodyForm={modalForm} bodyText={""}
        />
      )}
    </div>
  );
};

export default RelatoriosPage;
