import style from "./style.module.css";
import imageDefault from "../../img/notfound.png";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FormGeneral from "../formGeneral";
import { IoExitOutline } from "react-icons/io5";

interface CardProps {
    data: any;
    height: number;
    show: any;
}

export default function Card({ data, height, show }: CardProps) {
    const [elemento, setElemento] = useState<any>(data);
    const [clickedEdit, setClickedEdit] = useState<boolean>(true);
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [file, setFile] = useState<any>(data?.imagen);
    const [newFile, setNewFile] = useState<boolean>(false);

    const handleClose = () => setShowEdit(false);
    const handleShow = () => setShowEdit(true); 

    useEffect( () => {
        setElemento(data);
        if(newFile){
            setFile(file || data?.imagen);
        }
        else{
            setFile(data?.imagen);
        }
    })
    
    const myClickEditHandler = async () => {  
        console.log(data?.id);    
        setShowEdit(true);
    } 

    const myClickEditCancel = async () => {        
        handleClose();     
        //setClickedEdit(false);
        setNewFile(false);
    } 
   
    const updateImage = (fileUploaded: any) => {        
        setFile(fileUploaded);
        setNewFile(true);
    }

    const nuevoElemento = (elemento: any) => {
        console.log(elemento)
    }
    
    const closeModal = () => {
    let buttonClose = document.getElementById("btnCancelar");
    buttonClose?.click();
    }

    return <div className={style.card}>
        <div className={style.card_header}>
            <div className={style.card_img}>
                <img src={data.imagen} alt={data.nombre} height={height} width="100%"  
                onClick={myClickEditHandler}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=imageDefault;}}
                />
            </div>
        </div>
        <div className={style.card_body}>
            <h6>{data.nombre}</h6>
        </div>  
        {clickedEdit? 
            <Modal show={showEdit}
            onHide={myClickEditCancel}
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
                <button type="button" className="btn btn-danger" onClick={myClickEditCancel}><IoExitOutline></IoExitOutline> Cancelar</button>
            </Modal.Footer>
            </Modal>
        : ''}
    </div>

    
}