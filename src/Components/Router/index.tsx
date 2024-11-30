import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ClientePage from "../../Pages/Cliente";
import LocalNav from "../Navbar";
import ProdutoPage from "../../Pages/Produto";
import ServicoPage from "../../Pages/Serviço";
import RelatoriosPage from "../../Pages/Relatorios";

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
        'id',
        'nome',
        'nomeSocial',
        'sexo',
        'cpf'
    ]
    
    const ClientesObj = [
        {
          id: 1,
          nome: "João Silva",
          nomeSocial: "João",
          sexo: "Masculino",
          cpf: "123.456.789-00",
          telefones: ["(12) 99607-0589", "(12) 99707-4443"],
          rgs: ['62.325.893-6']
        },
        {
          id: 2,
          nome: "Maria Oliveira",
          nomeSocial: "Maria",
          sexo: "Feminino",
          cpf: "987.654.321-00",
          telefones: [],
          rgs: []
        },
        {
          id: 3,
          nome: "Carlos Santos",
          nomeSocial: "Carlão",
          sexo: "Masculino",
          cpf: "456.123.789-11",
          telefones: [],
          rgs: []
        },
        {
          id: 4,
          nome: "Ana Pereira",
          nomeSocial: "Ana",
          sexo: "Feminino",
          cpf: "321.654.987-22",
          telefones: [],
          rgs: []
        },
        {
          id: 5,
          nome: "Fernanda Lima",
          nomeSocial: "Nanda",
          sexo: "Feminino",
          cpf: "654.987.321-33",
          telefones: [],
          rgs: []
        }
      ];
    
      const ProdutoTypes = [
        'id',
        'nome',
        'valor',
        'genero',
        'consumidos'
    ]
    
    const ProdutosObj = [
        {
          id: 1,
          nome: "Spray de cabelo",
          valor: 12.90,
          genero: "Sprays",
          consumidos: 33,
        },
        {
          id: 2,
          nome: "Spray de tintura para cabelos",
          valor: 22.50,
          genero: "Sprays",
          consumidos: 10,
        },
        {
          id: 3,
          nome: "Máquina de cortar cabelo",
          valor: 399.90,
          genero: "Eletrônicos",
          consumidos: 1,
        },
        {
          id: 4,
          nome: "Gel para cabelo Chanin",
          valor: 5.89,
          genero: "Gels",
          consumidos: 85
        },
        {
          id: 5,
          nome: "Esmalte de unha vermelho",
          valor: 15.66,
          genero: "Esmaltes",
          consumidos: 5,
        }
      ];

      const ServicoTypes = [
        'id',
        'nome',
        'valor',
        'genero',
        'consumidos'
    ]
    
    const ServicoObj = [
        {
          id: 1,
          nome: "Corte de cabelo masculino",
          valor: 40,
          genero: "Cortes e barba",
          consumidos: 196,
        },
        {
          id: 2,
          nome: "Corte de cabelo feminino",
          valor: 50,
          genero: "Cortes e barba",
          consumidos: 357,
        },
        {
          id: 3,
          nome: "Luzes",
          valor: 70.90,
          genero: "Pintura de cabelo",
          consumidos: 109,
        },
        {
          id: 4,
          nome: "Barba",
          valor: 27,
          genero: "Cortes e barba",
          consumidos: 85
        },
        {
          id: 5,
          nome: "Corte masculino e barba",
          valor: 45,
          genero: "Cortes e barba",
          consumidos: 259,
        }
      ];
  
  return (
    <BrowserRouter>
      <LocalNavWrapper />
      <Routes>
        <Route path="/" element={<ClientePage objects={ClientesObj} types={ClienteTypes} />} />
        <Route path="/clientes" element={<ClientePage objects={ClientesObj} types={ClienteTypes} />} />
        <Route path="/produtos" element={<ProdutoPage objects={ProdutosObj} types={ProdutoTypes} clientes={ClientesObj} />} />
        <Route path="/serviços" element={<ServicoPage objects={ServicoObj} types={ServicoTypes} clientes={ClientesObj} />} />
        <Route path="/relatórios" element={<RelatoriosPage clientes={ClientesObj} produtos={ProdutosObj} servicos={ServicoObj} />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
