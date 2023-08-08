import { IoBeerOutline, IoExitOutline } from "react-icons/io5";
import { Cerveza } from "../../interfaces/cerveza";
import FormCerveza from "../formCerveza";
import imageDefault from "../../img/notfound.png";
import { useState } from "react";

interface ModalCervezaProps {
    data?: Cerveza;
    agregarCerveza: any;
    uploadImage: any;
}

export default function ModalCervezaABM({ data, agregarCerveza, uploadImage }: ModalCervezaProps) {
    const [file, setFile] = useState<any>();
    
    const closeModal = () => {
        let buttonClose = document.getElementById("btnCancelar");
        buttonClose?.click();
    }
   
    const updateImage = (fileUploaded: any) => {
        setFile(fileUploaded);
    }

    let imagen = data?.imagen == undefined? imageDefault: data?.imagen;

    return <div className="modal" id="modalCervezaABM" role="dialog" aria-labelledby="modalCervezaTitle" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content  bg-primary text-light">
                <div className="modal-header border-bottom border-secondary">
                    <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> Nueva cerveza</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="modal-body border-bottom border-secondary ">
                    <div className="row">
                        <div className="col-12 col-sm-6 h-100 py-3">
                            <img src={file} alt="" width="100%" height={300} 
                                onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src=imagen;}} />    
                        </div>
                        <div className="col-12 col-sm-6  text-left">
                            <h3 className="border border-secondary text-center my-3 bg-dark">Nueva cerveza</h3>
                            <FormCerveza data={data} agregarCerveza={agregarCerveza} uploadImage={updateImage} closeModal={closeModal}></FormCerveza>
                        </div>
                    </div>                    
                </div>
                <div className="modal-footer">
                    {/* <button id="btnCancelar" type="button" className="btn btn-success" onClick={guardar}><IoExitOutline></IoExitOutline> Guardar</button> */}
                    <button id="btnCancelar" type="button" className="btn btn-danger" data-bs-dismiss="modal"><IoExitOutline></IoExitOutline> Cancelar</button>
                </div>
            </div>
        </div>
    </div>
}
