import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ClientePage from "../../pages/Cliente";
import LocalNav from "../Navbar";

function LocalNavWrapper() {
  const navigate = useNavigate();

  const navButtons = [
    "Clientes",
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
        'sobreNome',
        'email'
    ]

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
    }

    const [clientesObj, setClientesObj] = useState<ClientDataType[]>([])
    
    useEffect(() => {
      const fetchData = async () => {
      const response = await fetch("http://localhost:32832/clientes");
      const jsonData: ClientDataType[] = await response.json();
      setClientesObj(jsonData);
      console.log(jsonData)
      }
  
      fetchData();
  }, []);
    

  return (
    <BrowserRouter>
      <LocalNavWrapper />
      <Routes>
        <Route path="/" element={<ClientePage objects={clientesObj} types={ClienteTypes} />} />
        <Route path="/clientes" element={<ClientePage objects={clientesObj} types={ClienteTypes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
