import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const ReactstrapModal: React.FC<Props> = ({ isOpen, onClose, title, children }) => {
  const toggle = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>,
    document.body
  );
};

