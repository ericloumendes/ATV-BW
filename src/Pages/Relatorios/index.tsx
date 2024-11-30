import { Component, ReactNode } from "react";
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
}[]

type ProdutosObj = {
    id?: number;
    nome?: string;
    valor: number;
    genero?: string;
    consumidos?: number;
}[]

type ServicosObj = {
    id?: number;
    nome?: string;
    valor: number;
    genero?: string;
    consumidos?: number;
}[]


type props = {
    clientes: ClientesObj,
    produtos: ProdutosObj,
    servicos: ServicosObj
}

type state = {
    showModal: boolean;
    modalTitle: string;
    modalForm: any
}

export default class RelatoriosPage extends Component<props, state> {
    constructor(props: props){
        super(props)
        console.log(props)
        this.state = {
            showModal: false,
            modalTitle: '',
            modalForm: null
        }
    }

    handleOpenModal = (title: string) => {
        this.setState({showModal: true, modalTitle: title})
    }

    handleCloseModal = () => {
        this.setState({showModal: false})
    }

    formatCurrency(value: number): string {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value);
      }

    //Lists adressers

    ClientesMaisConsumoProdutos = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, produtos consumidos: 89</li>
            <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, produtos consumidos: 76</li>
            <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, produtos consumidos: 54</li>
            <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, produtos consumidos: 14</li>
            <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, produtos consumidos: 2</li>
        </ol>
        </>)})
    }

    ClientesMaisConsumoServicos = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, Serviços consumidos: 89</li>
            <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, Serviços consumidos: 76</li>
            <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, Serviços consumidos: 54</li>
            <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, Serviços consumidos: 14</li>
            <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, Serviços consumidos: 2</li>
        </ol>
        </>)})
    }

    ClientesMenosConsumoProdutos = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, produtos consumidos: 2</li>
            <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, produtos consumidos: 14</li>
            <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, produtos consumidos: 54</li>
            <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, produtos consumidos: 76</li>
            <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, produtos consumidos: 89</li>  
        </ol>
        </>)})
    }

    ClientesMenosConsumoServicos = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, Serviços consumidos: 2</li>
            <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, Serviços consumidos: 14</li>
            <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, Serviços consumidos: 54</li>
            <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, Serviços consumidos: 76</li>
            <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, Serviços consumidos: 89</li>          
        </ol>
        </>)})
    }

    ClientesMaisConsumoValor = () => {
        this.setState({modalForm: (<>
            <ol>
                <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, Valor Consumido: R$ 1280,99</li>
                <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, Valor Consumido: R$ 900,67</li>
                <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, Valor Consumido: R$ 779,10</li>
                <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, Valor Consumido: R$ 215,08</li>
                <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, Valor Consumido: R$ 113,99</li>         
            </ol>
            </>)})
    }

    ClienteGenero = () => {
        this.setState({modalForm: (<>
            <h3>Masculino</h3>
            <ol>
                <li>Nome: {this.props.clientes[0].nome}, CPF: {this.props.clientes[0].cpf}, Gênero: {this.props.clientes[0].sexo}</li>
                <li>Nome: {this.props.clientes[2].nome}, CPF: {this.props.clientes[2].cpf}, Gênero: {this.props.clientes[2].sexo}</li>
            </ol>
            <br />
            <h3>Feminino</h3>
            <ol>
                <li>Nome: {this.props.clientes[1].nome}, CPF: {this.props.clientes[1].cpf}, Gênero: {this.props.clientes[1].sexo}</li>
                <li>Nome: {this.props.clientes[3].nome}, CPF: {this.props.clientes[3].cpf}, Gênero: {this.props.clientes[3].sexo}</li>
                <li>Nome: {this.props.clientes[4].nome}, CPF: {this.props.clientes[4].cpf}, Gênero: {this.props.clientes[4].sexo}</li>
            </ol>
        </>)})
    }

    ProdutoMaisConsumoGenero = () => {
        this.setState({modalForm: (<>
            <h3>Sprays</h3>
            <ol>
                <li>Nome: {this.props.produtos[0].nome}, Genero: {this.props.produtos[0].genero}, Consumidos: {this.props.produtos[0].consumidos}</li>
                <li>Nome: {this.props.produtos[1].nome}, Genero: {this.props.produtos[1].genero}, Consumidos: {this.props.produtos[1].consumidos}</li>
            </ol>
            <br />
            <h3>Eletrônicos</h3>
            <ol>
                <li>Nome: {this.props.produtos[2].nome}, Genero: {this.props.produtos[2].genero}, Consumidos: {this.props.produtos[2].consumidos}</li>
            </ol>
            <br />
            <h3>Gels</h3>
            <ol>
                <li>Nome: {this.props.produtos[3].nome}, Genero: {this.props.produtos[3].genero}, Consumidos: {this.props.produtos[3].consumidos}</li>
            </ol>
            <br />
            <h3>Esmaltes</h3>
            <ol>
                <li>Nome: {this.props.produtos[4].nome}, Genero: {this.props.produtos[4].genero}, Consumidos: {this.props.produtos[4].consumidos}</li>
            </ol>
        </>)})
    }

    ProdutoMaisConsumoGeral = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.produtos[3].nome}, Valor: R$ {this.formatCurrency(this.props.produtos[3].valor)}; Consumidos: {this.props.produtos[3].consumidos}</li>
            <li>Nome: {this.props.produtos[0].nome}, Valor: R$ {this.formatCurrency(this.props.produtos[0].valor)}; Consumidos: {this.props.produtos[0].consumidos}</li>
            <li>Nome: {this.props.produtos[1].nome}, Valor: R$ {this.formatCurrency(this.props.produtos[1].valor)}; Consumidos: {this.props.produtos[1].consumidos}</li>
            <li>Nome: {this.props.produtos[4].nome}, Valor: R$ {this.formatCurrency(this.props.produtos[4].valor)}; Consumidos: {this.props.produtos[4].consumidos}</li>
            <li>Nome: {this.props.produtos[2].nome}, Valor: R$ {this.formatCurrency(this.props.produtos[2].valor)}; Consumidos: {this.props.produtos[2].consumidos}</li>
        </ol>
        </>)})
    }

    ServicoMaisConsumoGenero = () => {
        this.setState({modalForm: (<>
            <h3>Cortes e barba</h3>
            <ol>
                <li>Nome: {this.props.servicos[1].nome}, Genero: {this.props.servicos[1].genero}, Consumidos: {this.props.servicos[1].consumidos}</li>
                <li>Nome: {this.props.servicos[4].nome}, Genero: {this.props.servicos[4].genero}, Consumidos: {this.props.servicos[4].consumidos}</li>
                <li>Nome: {this.props.servicos[0].nome}, Genero: {this.props.servicos[0].genero}, Consumidos: {this.props.servicos[0].consumidos}</li>
                <li>Nome: {this.props.servicos[3].nome}, Genero: {this.props.servicos[3].genero}, Consumidos: {this.props.servicos[3].consumidos}</li>
            </ol>
            <br />
            <h3>Pintura de cabelo</h3>
            <ol>
                <li>Nome: {this.props.servicos[2].nome}, Genero: {this.props.servicos[2].genero}, Consumidos: {this.props.servicos[2].consumidos}</li>
            </ol>
        </>)})
    }

    ServicoMaisConsumoGeral = () => {
        this.setState({modalForm: (<>
        <ol>
            <li>Nome: {this.props.servicos[1].nome}, Valor: R$ {this.formatCurrency(this.props.servicos[1].valor)}; Consumidos: {this.props.servicos[1].consumidos}</li>
            <li>Nome: {this.props.servicos[4].nome}, Valor: R$ {this.formatCurrency(this.props.servicos[4].valor)}; Consumidos: {this.props.servicos[4].consumidos}</li>
            <li>Nome: {this.props.servicos[0].nome}, Valor: R$ {this.formatCurrency(this.props.servicos[0].valor)}; Consumidos: {this.props.servicos[0].consumidos}</li>
            <li>Nome: {this.props.servicos[2].nome}, Valor: R$ {this.formatCurrency(this.props.servicos[2].valor)}; Consumidos: {this.props.servicos[2].consumidos}</li>
            <li>Nome: {this.props.servicos[3].nome}, Valor: R$ {this.formatCurrency(this.props.servicos[3].valor)}; Consumidos: {this.props.servicos[3].consumidos}</li>
        </ol>
        </>)})
    }

    render(): ReactNode {
        return <>
            <div className="TitleText">
                <h1>Relatórios</h1>

                <br />
                <br />

                <h3>Cliente</h3>
                <Button onClick={ (e) =>{ this.handleOpenModal('10 Clientes que mais consumiram produtos'); this.ClientesMaisConsumoProdutos(); }}>10 Clientes que mais consumiram produtos</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('10 Clientes que mais consumiram servicos'); this.ClientesMaisConsumoServicos()}}>10 Clientes que mais consumiram servicos</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('10 Clientes que menos consumiram produtos'); this.ClientesMenosConsumoProdutos()}}>10 Clientes que menos consumiram produtos</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('10 Clientes que menos consumiram serviços'); this.ClientesMenosConsumoServicos()}}>10 Clientes que menos consumiram serviços</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('5 Clientes que mais consumiram em valor'); this.ClientesMaisConsumoValor()}}>5 Clientes que mais consumiram em valor</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('Listagem de todos os clientes por gênero'); this.ClienteGenero()}}>Listagem de todos os clientes por gênero</Button>

                <br />
                <br />

                <h3>Produtos</h3>
                <Button onClick={ e => {this.handleOpenModal('Produtos mais consumidos por gênero'); this.ProdutoMaisConsumoGenero();}}>Produtos mais consumidos por gênero</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('Produtos mais consumidos geral'); this.ProdutoMaisConsumoGeral();}}>Produtos mais consumidos geral</Button>

                <br />
                <br />

                <h3>Serviços</h3>
                <Button onClick={ e => {this.handleOpenModal('Serviços mais consumidos por gênero'); this.ServicoMaisConsumoGenero()}}>Serviços mais consumidos por gênero</Button>
                <br />
                <br />
                <Button onClick={ e => {this.handleOpenModal('Serviços mais consumidos geral'); this.ServicoMaisConsumoGeral()}}>Serviços mais consumidos geral</Button>
                <br />
                <br />
            </div>

            {/* Modal de Cadastro */}
            <LocalModal
              show={this.state.showModal}
              onHide={this.handleCloseModal}
              title={this.state.modalTitle}
              bodyText=""
              bodyForm={this.state.modalForm}
            />
        </>
    }
}