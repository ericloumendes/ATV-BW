import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type Props = {
  buttons: string[];
  changePage: (newPage: string) => void;
};

const LocalNav: React.FC<Props> = ({ buttons, changePage }) => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <img src="https://i.imgur.com/6lKDtQA.png" width="96px" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {buttons.map((item) => (
              <Nav.Link
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  changePage(item);
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LocalNav;
