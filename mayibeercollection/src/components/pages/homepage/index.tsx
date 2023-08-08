import { ReporteResponse } from "../../../interfaces/reporteCervezas";
import { useEffect, useState } from "react";
import ModalBootstrap from "../../modal";
import style from "./style.module.css";
import imageBeers from "../../../img/beers.jpg";
import { IoBeerOutline, IoSearchSharp, IoBarChartOutline, IoBriefcaseOutline, 
    IoHomeOutline, IoBagHandleOutline, IoPintOutline, IoEarthOutline, IoBusinessOutline, IoSettingsOutline  } from "react-icons/io5";
import { getReporte } from "../../../services/apiReporte";

export default function HomepageInicio() {
    const [reporte, setReporte] = useState<ReporteResponse[]>([]);
    const [cantidadPaises, setPaises] = useState<any>();
    const [cantidadMarcas, setMarcas] = useState<any>();
    const [cantidadEstilos, setEstilos] = useState<any>();
    const [cantidadCiudades, setCiudades] = useState<any>();
    
    const fetchReporte = async () => {
        let lista: ReporteResponse[] = await getReporte();
        setReporte(lista);
        const listaPaises = await lista.filter((thing, i, arr) => arr.findIndex(t => t.idPais === thing.idPais) === i);
        setPaises(listaPaises);
        const listaMarcas = await lista.filter((thing, i, arr) => arr.findIndex(t => t.idMarca === thing.idMarca) === i);
        setMarcas(listaMarcas);
        const listaEstilos = await lista.filter((thing, i, arr) => arr.findIndex(t => t.idEstilo === thing.idEstilo) === i);
        setEstilos(listaEstilos);
    }  

    useEffect(() => {
        fetchReporte();
    }, []);

    const navigate = (e: any) => {        
        if (e.target.id == 'cervezas'){
            window.location.href = (window.location.origin + "/" + e.target.id);
        }
        else{
            window.location.href = (window.location.origin + "/administracion/" + e.target.id);
        }        
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

        <div className="container-fluid w-100 text-center p-5">
            <article className="container w-70">
                <div className="text-light mt-2">
                    <h2>{reporte.length} Cervezas</h2>
                </div>
                <div className="card-thumb">
                    <img id="cervezas" src={imageBeers} alt="Cervezas" className={`container w-100 ${style.iconoHome}`} onClick={navigate}/>
                </div>               
            </article>
        </div>
        <div className="row mt-2 p-3 border border-secondary rounded-1 py-5">                
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoEarthOutline id="paises" className={`text-info w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoEarthOutline>                     
                        <h4 className="text-light text-center mt-2">{cantidadPaises?.length} Paises</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoBagHandleOutline id="marcas" className={`text-danger w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoBagHandleOutline>                     
                        <h4 className="text-light text-center mt-2">{cantidadMarcas?.length} Marcas</h4>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="row">
                        <IoPintOutline id="estilos" className={`text-warning w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoPintOutline>                     
                        <h4 className="text-light text-center mt-2">{cantidadEstilos?.length} Estilos</h4>
                    </div>
                </div>
            </div>
    </div>
    );
}