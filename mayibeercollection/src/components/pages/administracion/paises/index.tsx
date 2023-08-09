import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getPaises } from "../../../../services/apiPais";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline , IoBriefcaseOutline, IoEarthOutline } from "react-icons/io5";

export default function AdministracionPaises() {
    const [paises, setPaises] = useState<Pais[]>([]);
    const [show, setShow] = useState<boolean>(false); 

    const fetchPaises = async () => {
        let lista: Pais[] = await getPaises();
        setPaises(lista);
    }

    useEffect(() => {
        fetchPaises();
    }, []);
    console.log(paises);
    const renderPaises = () => paises?.map((v, i) => <Card data={v} key={i} show={showModal} height={50}></Card>)
    
    const showModal = () => {
        setShow(true);
    }

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-success"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoEarthOutline className="text-info mx-2"></IoEarthOutline> Países</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success">Agregar</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderPaises()}
        </div>
    </div>)
}