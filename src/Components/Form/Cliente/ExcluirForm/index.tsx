import { Component, ReactNode } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type props = {
    quitButtonText: string,
    subimitButtonText: string,
    onHide: any
}

export default class LocalClienteExcluirForm extends Component<props> {
    constructor(props: props){
        super(props);
    }

    handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission behavior
        alert(`Cliente excluído com sucesso!`);
      };

    render(): ReactNode {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
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