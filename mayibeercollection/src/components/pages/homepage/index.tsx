import ModalBootstrap from "../../modal";
import style from "./style.module.css";
import { IoBeerOutline, IoSearchSharp, IoBarChartOutline, IoBriefcaseOutline, 
    IoHomeOutline, IoBagHandleOutline, IoPintOutline, IoEarthOutline, IoBusinessOutline, IoSettingsOutline  } from "react-icons/io5";

export default function HomepageInicio() {

    const navigatePaises = (e: any) => {
        console.log("paises")
        console.log(e.target.id)
        //window.open(baseUrl+'/id/'+id);
        console.log(window.location.origin)
        window.location.href = (window.location.origin + "/administracion/" + e.target.id)
    }

    return (
    <div className="p-3">
        <div className={`container-fluid w-100 text-center p-5 border border-secondary rounded-2 bg-primary ${style.divTitle}`}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0">MayiBeerCollection</h1>
                <h3 className="title text-warning px-3">Bienvenido/a</h3>
                <ModalBootstrap data={undefined} showModal={false}></ModalBootstrap>
            </div>           
        </div>
        <div className="row mt-5 p-3">                
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoEarthOutline id="paises" className={`text-info w-100 ${style.iconoHome}`} size={200} onClick={navigatePaises}></IoEarthOutline>                     
                        <h4 className="text-light text-center mt-2">Paises</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoBagHandleOutline id="marcas" className={`text-danger w-100 ${style.iconoHome}`} size={200} onClick={navigatePaises}></IoBagHandleOutline>                     
                        <h4 className="text-light text-center mt-2">Marcas</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoPintOutline id="estilos" className={`text-warning w-100 ${style.iconoHome}`} size={200} onClick={navigatePaises}></IoPintOutline>                     
                        <h4 className="text-light text-center mt-2">Estilos</h4>
                    </div>
                </div>
            </div>
    </div>
    );
}