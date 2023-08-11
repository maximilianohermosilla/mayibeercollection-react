import style from "./style.module.css";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cerveza } from '../../interfaces/cerveza';
import { IoExitOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import React from 'react';
import FormGeneral from '../formGeneral';
import { Tipo } from "../../interfaces/tipo";

interface ModalCervezaProps {
    data?: any;
    showModal: boolean;
    tipo: Tipo;
    nuevoElemento: any;
}
export default function ModalBootstrap({data, showModal, tipo, nuevoElemento}: ModalCervezaProps) {
  const [show, setShow] = useState(showModal);
  const [file, setFile] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeModal = () => {
    let buttonClose = document.getElementById("btnCancelar");
    buttonClose?.click();
  }

  const updateImage = (fileUploaded: any) => {
      setFile(fileUploaded);
  }

  useEffect(() => {
    console.log(data)
    if (showModal){
      handleShow();
    }
  }, [])
  
  return (    
    <>  
      <div className={style.divButtonAdd}>
          <button type="button" className="btn btn-success" onClick={handleShow} >Agregar</button>
      </div>

        <Modal show={show}
          onHide={handleClose}
          size="lg">
          <Modal.Header closeButton className="bg-primary text-light rounded-0 border-bottom border-secondary">
            <Modal.Title className="bg-primary text-light">
              <h5 className="modal-title text-center text-success w-100">Modal</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-primary text-light border-bottom border-secondary">
            <div className="modal-body">
              <div className="row">
                <FormGeneral data={data} nuevoElemento={nuevoElemento} uploadImage={updateImage} closeModal={closeModal} tipo={tipo}></FormGeneral>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-primary text-light rounded-0">
            <button type="button" className="btn btn-danger" onClick={handleClose}><IoExitOutline></IoExitOutline> Cancelar</button>
          </Modal.Footer>
        </Modal>
    </>
  );
}