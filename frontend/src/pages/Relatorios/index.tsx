import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import LocalModal from "../../components/Modal";

const RelatoriosPage: React.FC = () => {
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


  const [ServicoSearch, setServicoSearch] = useState("");

  const handleServicoSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setServicoSearch(e.target.value);

  const handleSearchServicoMaisConsumo = async () => {
    const response = await fetch(`http://localhost:5000/relatorios/ServicoMaisConsumoGenero/${ServicoSearch}`);
    const jsonData = await response.json();
    setServicoMaisConsumoGeneroObj(jsonData);
    console.log(jsonData)
  }

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const [ClienteMaisConsumoProdutosObj, setClienteMaisConsumoProdutosObj] = useState<any>();
  const [ClientesMaisConsumoServicosObj, setClientesMaisConsumoServicosObj] = useState<any>();
  const [ClientesMenosConsumoProdutosObj, setClientesMenosConsumoProdutosObj] = useState<any>();
  const [ClientesMenosConsumoServicosObj, setClientesMenosConsumoServicosObj] = useState<any>();
  const [ClientesMaisConsumoValorObj, setClientesMaisConsumoValorObj] = useState<any>();
  const [ClienteGeneroObj, setClienteGeneroObj] = useState<any>();
  const [ProdutoMaisConsumoGeralObj, setProdutoMaisConsumoGeralObj] = useState<any>();
  const [ServicoMaisConsumoGeralObj, setServicoMaisConsumoGeralObj] = useState<any>();
  const [ServicoMaisConsumoGeneroObj, setServicoMaisConsumoGeneroObj] = useState<any>([]);


  useEffect(() => {
    const fetchClientesMaisConsumoProduto = async () => {
    const response = await fetch("http://localhost:5000/relatorios/ClienteMaisConsumoProdutos");
    const jsonData = await response.json();
    setClienteMaisConsumoProdutosObj(jsonData);
    console.log(jsonData)
    }

    const fetchClientesMaisConsumoServicos = async () => {
      const response = await fetch("http://localhost:5000/relatorios/ClientesMaisConsumoServicos");
      const jsonData = await response.json();
      setClientesMaisConsumoServicosObj(jsonData);
      console.log(jsonData)
      }
    
      const fetchClientesMenosConsumoProdutos = async () => {
        const response = await fetch("http://localhost:5000/relatorios/ClientesMenosConsumoProdutos");
        const jsonData = await response.json();
        setClientesMenosConsumoProdutosObj(jsonData);
        console.log(jsonData)
        }

        const fetchClientesMenosConsumoServicos = async () => {
          const response = await fetch("http://localhost:5000/relatorios/ClientesMenosConsumoServicos");
          const jsonData = await response.json();
          setClientesMenosConsumoServicosObj(jsonData);
          console.log(jsonData)
          }

          const fetchClientesMaisConsumoValor = async () => {
            const response = await fetch("http://localhost:5000/relatorios/ClientesMaisConsumoValor");
            const jsonData = await response.json();
            setClientesMaisConsumoValorObj(jsonData);
            console.log(jsonData)
            }

            const fetchClienteGenero = async () => {
              const response = await fetch("http://localhost:5000/relatorios/ClienteGenero");
              const jsonData = await response.json();
              setClienteGeneroObj(jsonData);
              console.log(jsonData)
              }

              const fetchProdutoMaisConsumoGeral = async () => {
                const response = await fetch("http://localhost:5000/relatorios/ProdutoMaisConsumoGeral");
                const jsonData = await response.json();
                setProdutoMaisConsumoGeralObj(jsonData);
                console.log(jsonData)
                }

                const fetchServicoMaisConsumoGeral = async () => {
                  const response = await fetch("http://localhost:5000/relatorios/ServicoMaisConsumoGeral");
                  const jsonData = await response.json();
                  setServicoMaisConsumoGeralObj(jsonData);
                  console.log(jsonData)
                  }

    fetchClientesMaisConsumoProduto();
    fetchClientesMaisConsumoServicos();
    fetchClientesMenosConsumoProdutos();
    fetchClientesMenosConsumoServicos();
    fetchClientesMaisConsumoValor();
    fetchClienteGenero();
    fetchProdutoMaisConsumoGeral();
    fetchServicoMaisConsumoGeral();
  }, [])

  const ClientesMaisConsumoProdutos = () => {
    return (
        <ol>
          {ClienteMaisConsumoProdutosObj.map((data: { cli_cod: number | undefined; cli_nome: string; cli_consumo: number }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - Consumidos: {data.cli_consumo}</li>
          })}
        </ol>
    );
  };

  const ClientesMaisConsumoServicos = () => {
    return(
      <ol>
          {ClientesMaisConsumoServicosObj.map((data: { cli_cod: number | undefined; cli_nome: string; cli_consumo: number }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - Consumidos: {data.cli_consumo}</li>
          })}
      </ol>
    );
  };

  const ClientesMenosConsumoProdutos = () => {
    return(
      <ol>
          {ClientesMenosConsumoProdutosObj.map((data: { cli_cod: number | undefined; cli_nome: string; cli_consumo: number }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - Consumidos: {data.cli_consumo}</li>
          })}
      </ol>
    );
  };

  const ClientesMenosConsumoServicos = () => {
    return(
      <ol>
          {ClientesMenosConsumoServicosObj.map((data: { cli_cod: number | undefined; cli_nome: string; cli_consumo: number }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - Consumidos: {data.cli_consumo}</li>
          })}
      </ol>
    );
  };

  const ClientesMaisConsumoValor = () => {
    return(
      <ol>
          {ClientesMaisConsumoValorObj.map((data: { cli_cod: number | undefined; cli_nome: string; cli_consumoValor: number }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - Consumidos: {formatCurrency(data.cli_consumoValor)}</li>
          })}
      </ol>
    );
  };

  const ClienteGenero = () => {
    return(
      <>
        <h3>Masculino</h3>
        <ol>
          {ClienteGeneroObj.masculino.map((data: { cli_cod: number | undefined; cli_nome: string; cli_cpf: string }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - CPF: {data.cli_cpf}</li>
          })}
        </ol>
        <br />
        <h3>Feminino</h3>
        <ol>
          {ClienteGeneroObj.feminino.map((data: { cli_cod: number | undefined; cli_nome: string; cli_cpf: string }) => {
            return <li key={data.cli_cod}>Nome: {data.cli_nome} - CPF: {data.cli_cpf}</li>
          })}
        </ol>
      </>
    );
  };

  const ProdutoMaisConsumoGenero = () => {
    return(
      <>
 
      </>
    );
  };

  const ProdutoMaisConsumoGeral = () => {
    return(
      <>
        <h3>Produtos mais consumidos</h3>
        <ol>
          {ProdutoMaisConsumoGeralObj.map((data: { prod_cod: number | undefined; prod_nome: string; prod_consumo: number }) => {
            return <li key={data.prod_cod}>Nome: {data.prod_nome} - Consumo: {data.prod_consumo}</li>
          })}
        </ol>
      </>
    );
  };
  

  const ServicoMaisConsumoGeral = () => {
    return(
      <>
        <h3>Serviços mais consumidos</h3>
        <ol>
          {ServicoMaisConsumoGeralObj.map((data: { serv_cod: number | undefined; serv_nome: string; serv_consumo: number }) => {
            return <li key={data.serv_cod}>Nome: {data.serv_nome} - Consumo: {data.serv_consumo}</li>
          })}
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
      <Button onClick={() => handleOpenModal("Produtos mais consumidos no geral", ProdutoMaisConsumoGeral )}>
        Produtos mais consumidos no geral
      </Button>

      <br />
      <br />

      <h3>Serviços</h3>  

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
