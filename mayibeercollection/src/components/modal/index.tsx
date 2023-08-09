import style from "./style.module.css";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cerveza } from '../../interfaces/cerveza';
import { IoExitOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import React from 'react';
import FormGeneral from '../formGeneral';

interface ModalCervezaProps {
    data?: Cerveza;
    showModal: boolean;
}
export default function ModalBootstrap({data, showModal}: ModalCervezaProps) {
  const [show, setShow] = useState(showModal);
  const [file, setFile] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nuevoElemento = (elemento: any) => {
    console.log(elemento)
  }

  const closeModal = () => {
    let buttonClose = document.getElementById("btnCancelar");
    buttonClose?.click();
  }

  const updateImage = (fileUploaded: any) => {
      setFile(fileUploaded);
  }

  useEffect(() => {
    if (showModal){
      handleShow();
    }
  }, [])

  return (    
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Abrir Modal
      </Button> */}

      <div className={style.divButtonAdd}>
          <button type="button" className="btn btn-success" onClick={handleShow} >Agregar</button>
      </div>

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
                    <FormGeneral data={data} nuevoElemento={nuevoElemento} uploadImage={updateImage} closeModal={closeModal} ></FormGeneral>
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