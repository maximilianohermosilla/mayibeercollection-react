import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cerveza } from '../../interfaces/cerveza';
import { IoExitOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import React from 'react';

interface ModalCervezaProps {
    data?: Cerveza;
    showModal: boolean;
}
export default function ModalBootstrap({data, showModal}: ModalCervezaProps) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (    
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Modal
      </Button>

      <Modal show={show} onHide={handleClose}{...data}
      size="lg">
        <Modal.Header closeButton className="bg-primary text-light rounded-0 border-bottom border-secondary">
          <Modal.Title className="bg-primary text-light">
          <h5 className="modal-title text-center text-success w-100">Modal</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary text-light border-bottom border-secondary">
            <div className="modal-body">
                <div className="row">

                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary text-light rounded-0">
            <button type="button" className="btn btn-success" onClick={handleClose}><IoCheckmarkCircleOutline></IoCheckmarkCircleOutline> Confirmar</button>
            <button type="button" className="btn btn-danger" onClick={handleClose}><IoExitOutline></IoExitOutline> Cerrar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}