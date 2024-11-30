import { Component, ReactNode } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../Components/Modal";
import LocalProdutoEditarForm from "../../Components/Form/Produto/EditarForm";
import LocalProdutoCadastroForm from "../../Components/Form/Produto/CadastroForm";
import LocalProdutoExcluirForm from "../../Components/Form/Produto/ExcluirForm";

type props = {
    objects: any
    types: string[]
    clientes: any
}

type state = {
    showModalEdicao: boolean,
    showModalExcluir: boolean,
    showModalCadastro: boolean,
}

export default class ProdutoPage extends Component<props, state>{
    constructor(props: props){
        super(props)
        this.state = {
            showModalEdicao: false,
            showModalExcluir: false,
            showModalCadastro: false
          };
        }
      
        handleShowEdicao = () => {
          this.setState({ showModalEdicao: true });
        };
      
        handleCloseEdicao = () => {
          this.setState({ showModalEdicao: false });
        };

        handleShowExcluir = () => {
            this.setState({ showModalExcluir: true });
          };
        
        handleCloseExcluir = () => {
            this.setState({ showModalExcluir: false });
        };

        handleShowCadastro = () => {
            this.setState({ showModalCadastro: true });
          };
        
        handleCloseCadastro = () => {
            this.setState({ showModalCadastro: false });
        };

        formatCurrency(value: number): string {
            return new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value);
          }

    render(): ReactNode {
        return(
            <>
                <div className="TitleText">
                    <h1>Produtos</h1>
                </div>

                <br />
                <br />
                <Container>
                <Table responsive='lg' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {this.props.types.map((value, index) => {
                                return <th key={index}>{value}</th>
                            })}
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.objects.map((Row: any, index: any) => {
                                return (
                                <tr key={index}>
                                    {this.props.types.map((key, colIndex) => {
                                        return (
                                        <td key={colIndex}>
                                            {key === 'valor'? this.formatCurrency(Row[key]).toString() : Row[key]?.toString()}
                                        </td>
                                        )
                                    })}
                                    <td>
                                        <button onClick={this.handleShowEdicao} style={{backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(0,0,0,0)'}}>
                                            <FaEdit style={{color: 'white'}} />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={this.handleShowExcluir} style={{backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)'}}>
                                            <FaRegTrashCan style={{color: 'white'}} />
                                        </button>
                                    </td>
                                </tr>
                            )})}
                    </tbody>
                </Table>

                <br />

                <div className="TitleText">
                    <Button variant="primary" onClick={this.handleShowCadastro}>Cadastrar produto</Button>
                </div>

                {/* Modal de edição */}
                <LocalModal
                  show={this.state.showModalEdicao}
                  onHide={this.handleCloseEdicao}
                  title="Editar Produto"
                  bodyText="Aqui vão os formulários de edição" 
                  bodyForm={<LocalProdutoEditarForm clientes={this.props.clientes} quitButtonText="Sair" subimitButtonText="Enviar" onHide={this.handleCloseEdicao} />}
                />

                {/* Modal de Excluir */}
                <LocalModal
                  show={this.state.showModalExcluir}
                  onHide={this.handleCloseExcluir}
                  title="Excluir Produto"
                  bodyText="Você tem certeza que deseja exluir este produto?"   
                  bodyForm={<LocalProdutoExcluirForm quitButtonText="Não" subimitButtonText="Sim" onHide={this.handleCloseExcluir} />}
                />

                {/* Modal de Cadastro */}
                <LocalModal
                  show={this.state.showModalCadastro}
                  onHide={this.handleCloseCadastro}
                  title="Cadastrar Produto"
                  bodyText="Preencha os campos abaixo:"
                  bodyForm={<LocalProdutoCadastroForm quitButtonText="Sair" subimitButtonText="Cadastrar" onHide={this.handleCloseCadastro} />}
                />

                </Container>
            </>
        );
    }
}