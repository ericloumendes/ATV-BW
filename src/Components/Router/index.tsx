import { Component, ReactNode } from "react"
import LocalNav from "../Navbar";
import ClientePage from "../../Pages/Cliente";
import ProdutoPage from "../../Pages/Produto";
import ServicoPage from "../../Pages/Serviço";
import RelatoriosPage from "../../Pages/Relatorios";

type state = {
    page: string
}

const navButtons = [
    'Clientes',
    'Produtos',
    'Serviços',
    'Relatórios'
]

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
  

export default class Router extends Component<{}, state>{
    constructor(props: {}){
        super(props);
        this.state = {
            page: 'Clientes'
        }
    }

    selectPage = (newPage: string, event: Event) => {
        //It prevents the default behavior of the triggering event (likely a button or link) 
        //and then updates the state with the new screen name.
        event.preventDefault();
        this.setState({page: newPage});
    }

    render(): ReactNode {
        if (this.state.page === 'Clientes'){
            return (<>
            <LocalNav buttons={navButtons} changePage={this.selectPage} />
            <ClientePage objects={ClientesObj} types={ClienteTypes} />
            </>)
        }
        else if (this.state.page === 'Produtos'){
            return (<>
            <LocalNav buttons={navButtons} changePage={this.selectPage} />
            <ProdutoPage clientes={ClientesObj} objects={ProdutosObj} types={ProdutoTypes} />
            </>)
        }
        else if (this.state.page === 'Serviços'){
            return (<>
            <LocalNav buttons={navButtons} changePage={this.selectPage} />
            <ServicoPage clientes={ClientesObj} objects={ServicoObj} types={ServicoTypes} />
            </>)
        }
        else if (this.state.page === 'Relatórios'){
            return (<>
            <LocalNav buttons={navButtons} changePage={this.selectPage} />
            <RelatoriosPage clientes={ClientesObj} produtos={ProdutosObj} servicos={ServicoObj} />
            </>)
        }
        else{
            return(
                <>
                <LocalNav buttons={navButtons} changePage={this.selectPage} />
                Not found 404
                </>
            )
        }
        
    }

}