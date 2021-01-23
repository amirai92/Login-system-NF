import React, { useState } from "react";

import { Modal } from "react-bootstrap";

const ErrorModal = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        show={!!props.error}
        onHide={props.onClear}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            An Error Occurred!"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.error}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ErrorModal;
