import { Component, ReactNode } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type state = {
    nome: string,
    nomeSocial: string,
    sexo: string,
    cpf: string
}

type props = {
    quitButtonText: string,
    subimitButtonText: string,
    onHide: any
}

export default class LocalClienteCadastroForm extends Component<props, state> {
    constructor(props: props){
        super(props)
        this.state = {
            nome: '',
            nomeSocial: '',
            sexo: 'masculino',
            cpf: ''
        }
    }


    handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission behavior
        alert(`Nome: ${this.state.nome}, Nome Social: ${this.state.nomeSocial}, Sexo: ${this.state.sexo}, CPF: ${this.state.cpf}`);
        this.setState({nome: '', nomeSocial: '', sexo: 'masculino', cpf: ''})
      };

    handleChangeSexo = (e: React.ChangeEvent<any>) => {
        this.setState({sexo: e.target.value});
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
                placeholder="Nome do cliente"
                value={this.state.nome}
                onChange={(e) => this.setState({nome: e.target.value})}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Nome Social</Form.Label>
                <Form.Control
                type="text"
                placeholder="Nome social do cliente"
                value={this.state.nomeSocial}
                onChange={(e) => this.setState({nomeSocial: e.target.value})}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="chooseField">
                <Form.Label>Sexo</Form.Label>
                <Form.Control as="select" value={this.state.sexo} onChange={this.handleChangeSexo}>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                type="text"
                placeholder="000.000.000-00"
                value={this.state.cpf}
                onChange={(e) => this.setState({cpf: e.target.value})}
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