import { Component, ReactNode } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type state = {
    nome: string,
    valor: number,
    genero: string,
}

type props = {
    quitButtonText: string,
    subimitButtonText: string,
    onHide: any
}

export default class LocalProdutoCadastroForm extends Component<props, state> {
    constructor(props: props){
        super(props)
        this.state = {
            nome: '',
            valor: 0,
            genero: ''
        }
    }


    handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission behavior
        alert(`Nome: ${this.state.nome}, Valor: ${this.state.valor}, Gênero: ${this.state.genero}`);
        this.setState({nome: '', valor: 0, genero: ''})
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
                <Form.Label>Valor do produto</Form.Label>
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

            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onHide}>
                {this.props.quitButtonText}
              </Button>
              <Button variant="primary" type="submit">
                {this.props.subimitButtonText}
              </Button>
            </Modal.Footer>
            </Form>
            </>
        )
    }
}