import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const boostrapModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.closed}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closed}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default boostrapModal;