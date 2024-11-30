import { Component, ReactNode } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { FaEdit, FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LocalModal from "../../Components/Modal";
import LocalClienteCadastroForm from "../../Components/Form/Cliente/CadastroForm";
import LocalClienteExcluirForm from "../../Components/Form/Cliente/ExcluirForm";
import LocalClienteEditarForm from "../../Components/Form/Cliente/EditarForm";
import LocalDetalhesClienteForm from "../../Components/Form/Cliente/Detalhes";

type props = {
    objects: any
    types: string[]
}

type state = {
    showModalEdicao: boolean,
    showModalExcluir: boolean,
    showModalCadastro: boolean,
    showModalDetalhes: boolean,
    selectedClient: number
}

export default class ClientePage extends Component<props, state>{
    constructor(props: props){
        super(props)
        this.state = {
            showModalEdicao: false,
            showModalExcluir: false,
            showModalCadastro: false,
            showModalDetalhes: false,
            selectedClient: 0
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

        handleShowDetalhes = (ClientId: number) => {
            this.setState({ selectedClient: ClientId })
            this.setState({ showModalDetalhes: true });
          };
        
        handleCloseDetalhes = () => {
            this.setState({ showModalDetalhes: false });
        };

    render(): ReactNode {
        return(
            <>
                <div className="TitleText">
                    <h1>Clientes</h1>
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
                            <th>Detalhes</th>
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
                                            {Row[key]?.toString()}
                                        </td>
                                        )
                                    })}
                                    <td>
                                        <button onClick={() => this.handleShowDetalhes(Row.id - 1)} style={{backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(0,0,0,0)'}}>
                                            <FaEye style={{color: 'white'}} />
                                        </button>
                                    </td>
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
                    <Button variant="primary" onClick={this.handleShowCadastro}>Cadastrar cliente</Button>
                </div>

                {/* Modal de edição */}
                <LocalModal
                  show={this.state.showModalEdicao}
                  onHide={this.handleCloseEdicao}
                  title="Editar Cliente"
                  bodyText="Aqui vão os formulários de edição" 
                  bodyForm={<LocalClienteEditarForm quitButtonText="Sair" subimitButtonText="Enviar" onHide={this.handleCloseEdicao} />}
                />

                {/* Modal de Excluir */}
                <LocalModal
                  show={this.state.showModalExcluir}
                  onHide={this.handleCloseExcluir}
                  title="Excluir Cliente"
                  bodyText="Você tem certeza que deseja exluir este cliente?"   
                  bodyForm={<LocalClienteExcluirForm quitButtonText="Não" subimitButtonText="Sim" onHide={this.handleCloseExcluir} />}
                />

                {/* Modal de Cadastro */}
                <LocalModal
                  show={this.state.showModalCadastro}
                  onHide={this.handleCloseCadastro}
                  title="Cadastrar Cliente"
                  bodyText="Preencha os campos abaixo:"
                  bodyForm={<LocalClienteCadastroForm quitButtonText="Sair" subimitButtonText="Cadastrar" onHide={this.handleCloseCadastro} />}
                />

                {/* Modal de detalhes */}
                <LocalModal
                  show={this.state.showModalDetalhes}
                  onHide={this.handleCloseDetalhes}
                  title="Detalhes:"
                  bodyText=""
                  bodyForm={<LocalDetalhesClienteForm quitButtonText="Sair" onHide={this.handleCloseDetalhes} object={this.props.objects[this.state.selectedClient]} />}
                />

                </Container>
            </>
        );
    }
}