import { Cerveza } from "../../interfaces/cerveza";

interface ModalCervezaProps {
    data?: Cerveza;
}

export default function ModalCerveza({ data }: ModalCervezaProps) {
    return <div className="modal" id="modalCerveza" role="dialog" aria-labelledby="modalCervezaTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content  bg-primary text-light">
                <div className="modal-header">
                    <h5 className="modal-title">{data?.nombre}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-6">
                            <img src={data?.imagen} alt="" width="100%" height={300}/> 
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><h6>Marca: {data?.marca?.nombre}</h6></li>
                                <li><h6>Estilo: {data?.estilo?.nombre}</h6></li>
                                <li><h6>Ciudad: {data?.ciudad?.nombre}</h6></li>
                                <li><h6>Pais: {data?.ciudad?.pais?.nombre}</h6></li>
                                <li><h6>Alcohol: %{data?.alcohol}</h6></li>
                                <li><h6>IBU: {data?.ibu}</h6></li>
                                <li><h6>Contenido: {data?.contenido}ml</h6></li>
                            </ul>                  
                        </div>
                    </div>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success">Modificar</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
}