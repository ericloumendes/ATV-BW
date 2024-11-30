import { Component, ReactNode } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

type state = {
    nome: string,
    valor: number,
    genero: string,
    showConsumoForm: boolean,
    consumidos: number,
    usuarioSelecionado: number
}

type props = {
    quitButtonText: string,
    subimitButtonText: string,
    onHide: any,
    clientes: [ClienteObj]
}

type ClienteObj = {
    id?: number;
    nome?: string;
    nomeSocial?: string;
    sexo?: string;
    cpf?: string;
    telefones?: string[];
    rgs?: string[];
}

export default class LocalServicoEditarForm extends Component<props, state> {
    constructor(props: props){
        super(props)
        this.state = {
            nome: '',
            valor: 0,
            genero: '',
            showConsumoForm: false,
            consumidos: 0,
            usuarioSelecionado: 0
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission behavior
        alert(`Nome: ${this.state.nome}, Valor: ${this.state.valor}, Gênero: ${this.state.genero}`);
        this.setState({nome: '', valor: 0, genero: ''})
      };

    handleConsumoSubmit = () => {
        alert(`Quantidade consumida: ${this.state.consumidos}, Id do cliente: ${this.state.usuarioSelecionado}`);
        this.setState({consumidos: 0, showConsumoForm: false})
      };

    handleChangeUsuario = (e: React.ChangeEvent<any>) => {
        this.setState({usuarioSelecionado: e.target.value});
        console.log('Selected Option:', e.target.value);
      };

    render(): ReactNode {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                type="text"
                placeholder="Nome do produto"
                value={this.state.nome}
                onChange={(e) => this.setState({nome: e.target.value})}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Valor do serviço</Form.Label>
                <Form.Control
                type="number"
                placeholder="R$ 00,00"
                value={this.state.valor}
                onChange={(e) => this.setState({valor: parseFloat(e.target.value)})}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Gênero</Form.Label>
                <Form.Control
                type="text"
                placeholder="Gênero"
                value={this.state.genero}
                onChange={(e) => this.setState({genero: e.target.value})}
                />
            </Form.Group>

            <div style={{ marginBottom: "20px" }}>
                <a
                href="#"
                onClick={(e) => {
                e.preventDefault();
                this.setState({ showConsumoForm: true });
                }}
                >
                    + Cadastrar consumo
                </a>

            {this.state.showConsumoForm && (
                <div style={{ marginTop: "1rem" }}>
                <Form.Group controlId="ConsumoInput">
                <Form.Label>Quantidade consumida</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="0"
                    value={this.state.consumidos}
                    onChange={(e) =>
                    this.setState({ consumidos: parseInt(e.target.value) })
                }
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="chooseField">
                <Form.Label>Cliente que consumiu</Form.Label>
                <Form.Control as="select" value={this.state.usuarioSelecionado} onChange={this.handleChangeUsuario}>
                {this.props.clientes.map(i => {
                    return (<option value={i.id}> {i.nome} </option>)
                })}
                </Form.Control>
                </Form.Group>

                <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "0.5rem" }}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent bubbling to parent form
                    this.handleConsumoSubmit();
                }}
                >
                    Cadastrar
                </Button>
                </div>
            )}
            </div>


            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onHide}>
                {this.props.quitButtonText}
              </Button>
              <Button variant="primary" type="submit" onClick={this.props.onHide}>
                {this.props.subimitButtonText}
              </Button>
            </Modal.Footer>
            </Form>
            </>
        )
    }
}