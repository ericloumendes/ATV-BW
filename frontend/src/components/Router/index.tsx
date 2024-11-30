import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ClientePage from "../../pages/Cliente";
import LocalNav from "../Navbar";
import ProdutoPage from "../../pages/Produto";
import ServicoPage from "../../pages/Serviço";
import RelatoriosPage from "../../pages/Relatorios";

function LocalNavWrapper() {
  const navigate = useNavigate();

  const navButtons = [
    "Clientes",
    "Produtos",
    "Serviços",
    "Relatórios"
  ];

  const changePage = (newPage: string) => {
    navigate("/" + newPage.toLowerCase());
  };

  return <LocalNav buttons={navButtons} changePage={changePage} />;
}

function Router() {
    const ClienteTypes = [
        'cli_cod',
        'cli_nome',
        'cli_nomeSocial',
        'cli_sexo',
        'cli_cpf'
    ]

    type ClientDataType = {
      cli_cod: number,
      cli_nome: string,
      cli_nomeSocial: string
      cli_sexo: string,
      cli_cpf: string,
      cli_cpfEmissao: Date
      telefones: [{
        tel_cod: number,
        tel_numero: string,
        tel_ddd: string,
        cli_cod: number
      }],
      rgs: [{
        rg_cod: number,
        rg_valor: string,
        rg_dataEmissao: string,
        cli_cod: number
      }]
    }

    type ServicoDataType = {
      serv_cod: number,
      serv_nome: string,
      serv_valor: number,
      serv_genero: string,
      serv_dataCriacao: Date
    }

    type ProdutoDataType = {
      prod_cod: number,
      prod_nome: string,
      prod_valor: number,
      prod_genero: string,
      prod_dataCriacao: Date
    }
    
    const [ClientesObj, setClientesObj] = useState<ClientDataType[]>([])
    const [ServicoObj, setServicoObj] = useState<ServicoDataType[]>([])
    const [ProdutoObj, setProdutoObj] = useState<ProdutoDataType[]>([])
    
    useEffect(() => {
      const fetchDataCliente = async () => {
      const response = await fetch("http://localhost:5000/cliente");
      const jsonData: ClientDataType[] = await response.json();
      setClientesObj(jsonData);
      console.log(jsonData)
      }

      const fetchDataServico = async () => {
        const response = await fetch("http://localhost:5000/servico");
        const jsonData: ServicoDataType[] = await response.json();
        setServicoObj(jsonData);
        console.log(jsonData)
        }

        const fetchDataProduto = async () => {
          const response = await fetch("http://localhost:5000/produto");
          const jsonData: ProdutoDataType[] = await response.json();
          setProdutoObj(jsonData);
          console.log(jsonData)
          }
  
      fetchDataCliente();
      fetchDataServico();
      fetchDataProduto();
  }, []);
    
      const ProdutoTypes = [
        'prod_cod',
        'prod_nome',
        'prod_valor',
        'prod_genero',
    ]

      const ServicoTypes = [
        'serv_cod',
        'serv_nome',
        'serv_valor',
        'serv_genero',
    ]
  
  return (
    <BrowserRouter>
      <LocalNavWrapper />
      <Routes>
        <Route path="/" element={<ClientePage objects={ClientesObj} types={ClienteTypes} />} />
        <Route path="/clientes" element={<ClientePage objects={ClientesObj} types={ClienteTypes} />} />
        <Route path="/produtos" element={<ProdutoPage objects={ProdutoObj} types={ProdutoTypes} clientes={ClientesObj} />} />
        <Route path="/serviços" element={<ServicoPage objects={ServicoObj} types={ServicoTypes} clientes={ClientesObj} />} />
        <Route path="/relatórios" element={<RelatoriosPage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
