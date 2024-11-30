import { Component } from "react";
import { Button, Modal } from "react-bootstrap";


type props = {
    show: boolean,
    title: string,
    bodyText: string,
    onHide: any,
    bodyForm: any | null
}

export default class LocalModal extends Component<props> {
    constructor(props: props){
        super(props);
        const { show, onHide, title, bodyText, bodyForm } = this.props;
    }

    render() {
    
        return (
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title style={{color: 'black'}}>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color: 'black'}}>{this.props.bodyText}</Modal.Body>
            <Modal.Body style={{color: 'black'}}>{this.props.bodyForm}</Modal.Body>
          </Modal>
        );
      }
}
    