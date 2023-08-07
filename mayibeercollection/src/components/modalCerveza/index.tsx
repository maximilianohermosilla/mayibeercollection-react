import { IoBagHandleOutline, IoBeerOutline, IoExitOutline, IoListOutline, IoSearchSharp, IoBarChartOutline,
     IoBriefcaseOutline, IoHomeOutline, IoPintOutline, IoEarthOutline, IoBusinessOutline, IoSettingsOutline, IoBeakerOutline, IoWaterOutline, IoRoseOutline, IoInformationCircleOutline 
} from "react-icons/io5";
import { Cerveza } from "../../interfaces/cerveza";

interface ModalCervezaProps {
    data?: Cerveza;
}

export default function ModalCerveza({ data }: ModalCervezaProps) {
    return <div className="modal" id="modalCerveza" role="dialog" aria-labelledby="modalCervezaTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content  bg-primary text-light">
                <div className="modal-header border-bottom border-secondary">
                    <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> {data?.nombre}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="modal-body  border-bottom border-secondary ">
                    <div className="row">
                        <div className="col-6">
                            <img src={data?.imagen} alt="" width="100%" height={300}/> 
                        </div>
                        <div className="col-6 text-left">
                            <ul>
                                <h3 className="border border-secondary text-center mb-3 bg-dark">Detalle</h3>
                                <h6><IoBagHandleOutline className="text-danger"></IoBagHandleOutline> {data?.marca?.nombre}</h6>
                                <h6><IoPintOutline className="text-warning"></IoPintOutline> {data?.estilo?.nombre}</h6>
                                <h6><IoEarthOutline className="text-info"></IoEarthOutline> {data?.ciudad?.pais?.nombre}</h6>
                                <h6><IoBusinessOutline className="text-success"></IoBusinessOutline> {data?.ciudad?.nombre}</h6>
                                <h6><IoWaterOutline className="text-danger"></IoWaterOutline> {data?.alcohol} %</h6>
                                { data?.ibu ? <h6><IoRoseOutline className="text-success"></IoRoseOutline> {data?.ibu} IBU</h6> : '' }
                                <h6><IoBeakerOutline className="text-info"></IoBeakerOutline> {data?.contenido} ml</h6>
                                { data?.observaciones ? <h6><IoInformationCircleOutline className="text-warning"></IoInformationCircleOutline> {data?.observaciones}</h6> : '' }
                            </ul>                  
                        </div>
                    </div>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success"><IoListOutline></IoListOutline> Editar</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><IoExitOutline></IoExitOutline> Cerrar</button>
                </div>
            </div>
        </div>
    </div>
}