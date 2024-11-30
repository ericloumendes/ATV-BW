import { Component, ReactNode } from "react";
import { Button, Modal, Form } from "react-bootstrap";

type Props = {
  object: {
    id?: number;
    nome?: string;
    nomeSocial?: string;
    sexo?: string;
    cpf?: string;
    telefones?: string[];
    rgs?: string[];
  };
  quitButtonText: string;
  onHide: () => void;
};

type State = {
  showPhoneForm: boolean;
  newPhone: string;
  showRgForm: boolean;
  newRg: string;
};

export default class LocalDetalhesClienteForm extends Component<Props, State> {
  static defaultProps = {
    object: {
      telefones: [],
      rgs: [],
    },
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      showPhoneForm: false,
      newPhone: "",
      showRgForm: false,
      newRg: ''
    };
  }

  handleAddPhoneClick = () => {
    this.setState({ showPhoneForm: true });
  };

  handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newPhone: e.target.value });
  };

  handlePhoneSubmit = () => {
    alert("Novo telefone adicionado:" + this.state.newPhone);
    this.setState({ showPhoneForm: false, newPhone: "" }); // Reset form
  };


  handleAddRgClick = () => {
    this.setState({ showRgForm: true });
  };

  handleRgInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newRg: e.target.value });
  };

  handleRgSubmit = () => {
    alert("Novo RG adicionado:" + this.state.newRg);
    this.setState({ showRgForm: false, newRg: "" }); // Reset form
  };

  render(): ReactNode {
    const { object, quitButtonText, onHide } = this.props;
    const { showPhoneForm, newPhone, showRgForm, newRg } = this.state;

    return (
      <>
        <div style={{marginBottom: '20px'}}>
          <h3>Telefones do cliente:</h3>
          {object.telefones && object.telefones.length > 0 ? (
            <ul>
              {object.telefones.map((tel: string, index: number) => (
                <li key={index}>{tel}</li>
              ))}
            </ul>
          ) : (
            <p>Este cliente não possui telefones cadastrados.</p>
          )}
          <a href="#" onClick={this.handleAddPhoneClick}>
            + Adicionar telefone
          </a>

          {showPhoneForm && (
            <Form
              style={{ marginTop: "1rem" }}
              onSubmit={(e) => {
                e.preventDefault();
                this.handlePhoneSubmit();
              }}
            >
              <Form.Group controlId="phoneInput">
                <Form.Label>Novo Telefone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={newPhone}
                  onChange={this.handlePhoneInputChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "0.5rem" }}
              >
                Adicionar
              </Button>
            </Form>
          )}
        </div>

        <div style={{marginBottom: '20px'}}>
          <h3>Rgs do cliente:</h3>
          {object.rgs && object.rgs.length > 0 ? (
            <ul>
              {object.rgs.map((rg: string, index: number) => (
                <li key={index}>{rg}</li>
              ))}
            </ul>
          ) : (
            <p>Este cliente não possui RGs cadastrados.</p>
          )}
          <a href="#" onClick={this.handleAddRgClick}>+ Adicionar RG</a>

          {showRgForm && (
            <Form
              style={{ marginTop: "1rem" }}
              onSubmit={(e) => {
                e.preventDefault();
                this.handleRgSubmit();
              }}
            >
              <Form.Group controlId="rgInput">
                <Form.Label>Novo RG</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="00.000.000-0"
                  value={newRg}
                  onChange={this.handleRgInputChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "0.5rem" }}
              >
                Adicionar
              </Button>
            </Form>
          )}
        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            {quitButtonText}
          </Button>
        </Modal.Footer>
      </>
    );
  }
}
