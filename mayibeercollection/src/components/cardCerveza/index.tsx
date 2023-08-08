import React from "react";
import style from "./style.module.css";
import { useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { getCervezaById } from "../../services/apiCerveza";
import { Modal } from "react-bootstrap";
import { IoBagHandleOutline, IoBeakerOutline, IoBeerOutline, IoBusinessOutline, IoEarthOutline, IoExitOutline, IoInformationCircleOutline, IoListOutline, IoPintOutline, IoRoseOutline, IoWaterOutline } from "react-icons/io5";
import FormCerveza from "../formCerveza";

interface CardCervezaProps {
    data: Cerveza;
    agregarCerveza: any
}

export default function CardCerveza({ data, agregarCerveza }: CardCervezaProps) {
    const [cerveza, setCerveza] = useState<Cerveza>(data);
    const [clicked, setClicked] = useState<boolean>(false);
    const [clickedEdit, setClickedEdit] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [showEdit, setShowEdit] = useState<boolean>(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const myClickHandler = async () => {        
        let cervezaById: Cerveza = await getCervezaById(data?.id!, true);        
        await setCerveza(cervezaById);
        setClicked(true);
        setShow(true);
    }  
    
    const myClickEditHandler = async () => {        
        setClickedEdit(true);
        setShowEdit(true);
    } 

    const myClickEditCancel = async () => {        
        setShowEdit(false);
        setClicked(true);
        setShow(true);
    } 

    const closeAll = async () => {
        myClickEditCancel();
        handleClose();
    }

    return <div className={`bg-primary text-light ${style.cardCerveza}`}>
        <div className={style.cardCerveza_header}>
            <div className={style.cardCerveza_img}>
                <img className="imagenCerveza" id={data.id?.toString()} src={data.imagen} alt={cerveza?.nombre} onClick={myClickHandler}
                        height="100%" width="100%"/>
            </div>
        </div>
        <div className={style.cardCerveza_body}>
            <h5>{cerveza?.nombre}</h5>
            <div className={style.carCerveza_body_subtitle}>
                <label>{cerveza?.marca?.nombre} - {cerveza?.estilo?.nombre}</label>
            </div>
        </div>

        {clicked? 
            <Modal show={show}
            onHide={handleClose}
            size="lg">
              <Modal.Header closeButton className="bg-primary text-light rounded-0 border-bottom border-secondary">
                <Modal.Title className="bg-primary text-light">
                <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> {cerveza?.nombre}</h5>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-primary text-light border-bottom border-secondary">
                  <div className="modal-body">
                      <div className="row">
                          <div className="col-12 col-sm-6 h-100 py-3">
                              <img className="img-modal" src={cerveza?.imagen} alt={cerveza?.nombre} width="100%" min-height="50vh" onClick={handleShow}/>
                          </div>
                          <div className="col-12 col-sm-6 text-left min-vh-90">
                              <h3 className="border border-secondary text-center my-3 bg-dark">Detalle</h3>
                              <h5><IoBagHandleOutline className="text-danger"></IoBagHandleOutline> {cerveza?.marca?.nombre}</h5>
                              <h5><IoPintOutline className="text-warning"></IoPintOutline> {cerveza?.estilo?.nombre}</h5>
                              <h5><IoEarthOutline className="text-info"></IoEarthOutline> {cerveza?.ciudad?.pais?.nombre}</h5>
                              <h5><IoBusinessOutline className="text-success"></IoBusinessOutline> {cerveza?.ciudad?.nombre}</h5>
                              <h5><IoWaterOutline className="text-danger"></IoWaterOutline> {cerveza?.alcohol} %</h5>
                              {cerveza?.ibu ? <h5><IoRoseOutline className="text-success"></IoRoseOutline> {cerveza?.ibu} IBU</h5> : ''}
                              <h5><IoBeakerOutline className="text-info"></IoBeakerOutline> {cerveza?.contenido} ml</h5>
                              {cerveza?.observaciones ? <h5><IoInformationCircleOutline className="text-warning"></IoInformationCircleOutline> {cerveza?.observaciones}</h5> : ''}
                          </div>
                      </div>
                  </div>
              </Modal.Body>
              <Modal.Footer className="bg-primary text-light rounded-0">
                  <button type="button" className="btn btn-success" onClick={myClickEditHandler}><IoListOutline></IoListOutline> Editar</button>
                  <button type="button" className="btn btn-danger" onClick={handleClose}><IoExitOutline></IoExitOutline> Cerrar</button>
              </Modal.Footer>
            </Modal>
        : ''}


        {clickedEdit? 
            <Modal show={showEdit}
            onHide={closeAll}
            size="lg">
              <Modal.Header closeButton className="bg-primary text-light rounded-0 border-bottom border-secondary">
                <Modal.Title className="bg-primary text-light">
                <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> {cerveza?.nombre}</h5>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-primary text-light border-bottom border-secondary">
                  <div className="modal-body">
                        <div className="row">
                            <div className="col-12 col-sm-6 h-100 py-3">
                                <img className="img-modal" src={cerveza?.imagen} alt={cerveza?.nombre} width="100%" min-height="50vh" onClick={handleShow} />
                            </div>
                            <div className="col-12 col-sm-6 text-left min-vh-90">
                                <h3 className="border border-secondary text-center my-3 bg-dark">Editar</h3>
                                {cerveza ? <FormCerveza data={cerveza} agregarCerveza={agregarCerveza}></FormCerveza> : ''}
                            </div>
                        </div>
                  </div>
              </Modal.Body>
              <Modal.Footer className="bg-primary text-light rounded-0">
                  <button type="button" className="btn btn-danger" onClick={myClickEditCancel}><IoExitOutline></IoExitOutline> Cancelar</button>
              </Modal.Footer>
            </Modal>
        : ''}
        
        {/* {cerveza? <ModalCervezaABM data={cerveza} agregarCerveza={agregarCerveza}></ModalCervezaABM> : ''} */}
    </div>    
}