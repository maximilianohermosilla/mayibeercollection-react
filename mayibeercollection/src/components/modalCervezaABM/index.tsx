import { IoBagHandleOutline, IoBeerOutline, IoExitOutline, IoListOutline, IoSearchSharp, IoBarChartOutline,
     IoBriefcaseOutline, IoHomeOutline, IoPintOutline, IoEarthOutline, IoBusinessOutline, IoSettingsOutline, IoBeakerOutline, IoWaterOutline, IoRoseOutline, IoInformationCircleOutline, IoSaveOutline 
} from "react-icons/io5";
import { Cerveza } from "../../interfaces/cerveza";
import FormCerveza from "../formCerveza";

interface ModalCervezaProps {
    data?: Cerveza;
}

export default function ModalCervezaABM({ data }: ModalCervezaProps) {
    return <div className="modal" id="modalCervezaABM" role="dialog" aria-labelledby="modalCervezaTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content  bg-primary text-light">
                <div className="modal-header border-bottom border-secondary">
                    <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> {data?.nombre}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="modal-body border-bottom border-secondary ">
                    <div className="row">
                        <div className="col-12 col-sm-6 h-100 py-3">
                            <img src={data?.imagen} alt="" width="100%" height={300}/> 
                        </div>
                        <div className="col-12 col-sm-6  text-left">
                            <h3 className="border border-secondary text-center my-3 bg-dark">Editar</h3>

                            <FormCerveza data={data}></FormCerveza>

                        </div>
                    </div>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success"><IoSaveOutline></IoSaveOutline> Guardar</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><IoExitOutline></IoExitOutline> Cancelar</button>
                </div>
            </div>
        </div>
    </div>
}