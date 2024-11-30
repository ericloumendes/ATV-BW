import { Component, ReactNode } from "react"
import { Container, Nav, Navbar } from "react-bootstrap";

type props = {
    buttons: string[]
    changePage: Function
}

export default class LocalNav extends Component<props>{
    constructor(props: props){
        super(props);
    }

    render(): ReactNode {
        return (
            <Navbar expand="lg" bg="primary" variant="dark">
              <Container fluid>
                <Navbar.Brand><img src="https://i.imgur.com/6lKDtQA.png" width={'96px'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {this.props.buttons.map(item => {
                        return <Nav.Link key={item} onClick={e => {this.props.changePage(item, e)}}>{item}</Nav.Link>
                    })}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );        
    }
}