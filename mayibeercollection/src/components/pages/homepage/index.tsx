import { ReporteResponse } from "../../../interfaces/reporteCervezas";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import imageBeers from "../../../img/beers.jpg";
import imageCollection from "../../../img/collection.webp";
import { IoBeerOutline, IoBagHandleOutline, IoPintOutline, IoEarthOutline  } from "react-icons/io5";
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
        <div className={`container-fluid w-100 text-center p-4 border border-secondary rounded-2 bg-primary d-flex justify-content-between ${style.divTitle}`}>
            <div className="d-none d-sm-block col-sm-1"><IoBeerOutline id="paises" className={`text-warning w-100 ${style.iconoHome}`} size={80} onClick={navigate}></IoBeerOutline>    </div>
            <div className="col-12 col-sm-10">
                <h1 className="title text-light px-3 pt-1 mb-0">MayiBeerCollection</h1>
                <h3 className="title text-warning px-3">Bienvenido/a</h3>                
            </div>           
            <div className="d-none d-sm-block col-sm-1"><IoBeerOutline id="paises" className={`text-warning w-100 ${style.iconoHome}`} size={80} onClick={navigate}></IoBeerOutline>    </div>
        </div>  

        <div className="container-fluid text-center p-5">
            <article className="container w-70">
                <div className="text-light mt-2 d-none">
                    <h2>Colección de {reporte.length} cervezas hasta el momento</h2>
                </div>
                <div className="card-thumb">
                    <img id="cervezas" src={imageBeers} alt="Cervezas" className={`container w-100 ${style.iconoHome}`} onClick={navigate}/>
                </div>               
            </article>
        </div>

        <div className="row mt-2 p-3 border border-secondary rounded-1 py-5">      
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <div className="row">
                    <IoBeerOutline id="cervezas" className={`text-warning w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoBeerOutline>                     
                    {/* <h4 className="text-light text-center mt-2">{reporte?.length} Cervezas</h4> */}
                    <ul className="list-group mt-2">
                        <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                            Cervezas
                            <span className="badge bg-warning text-dark rounded-pill">{reporte?.length}</span>
                        </li>
                    </ul>
                </div>
            </div>          
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <div className="row">
                    <IoEarthOutline id="paises" className={`text-info w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoEarthOutline>                     
                    {/* <h4 className="text-light text-center mt-2">{cantidadPaises?.length} Paises</h4> */}
                    <ul className="list-group mt-2">
                        <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                        Paises
                            <span className="badge bg-info text-light rounded-pill">{cantidadPaises?.length}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <div className="row">
                    <IoBagHandleOutline id="marcas" className={`text-danger w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoBagHandleOutline>                     
                    {/* <h4 className="text-light text-center mt-2">{cantidadMarcas?.length} Marcas</h4> */}
                    <ul className="list-group mt-2">
                        <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                        Marcas
                            <span className="badge bg-danger text-light rounded-pill">{cantidadMarcas?.length}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-6 col-sm-3 d-flex justify-content-center">
                <div className="row">
                    <IoPintOutline id="estilos" className={`text-success w-100 ${style.iconoHome}`} size={200} onClick={navigate}></IoPintOutline>                     
                    {/* <h4 className="text-light text-center mt-2">{cantidadEstilos?.length} Estilos</h4> */}
                    <ul className="list-group mt-2">
                        <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                        Estilos
                            <span className="badge bg-success text-light rounded-pill">{cantidadEstilos?.length}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    

        <div className="container-fluid text-center p-5 h-10">
            <article className="container-fluid w-90">
                <div className="text-light mt-2 d-none">
                    <h2>Colección de {reporte.length} cervezas hasta el momento</h2>
                </div>
                <div className="card-thumb  w-100">
                    <img id="cervezas" src={imageCollection} alt="Cervezas" className={`w-100 ${style.iconoHome}`} onClick={navigate}/>
                </div>               
            </article>
        </div>

    </div>
    );
}