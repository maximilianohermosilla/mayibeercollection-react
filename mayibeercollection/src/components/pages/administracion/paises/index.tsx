import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getPaises, insertPais, updatePais } from "../../../../services/apiPais";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline , IoBriefcaseOutline, IoEarthOutline } from "react-icons/io5";
import { Tipo } from "../../../../interfaces/tipo";
import ModalBootstrap from "../../../modal";

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
    const renderPaises = () => paises?.map((v, i) => <Card data={v} key={i} show={showModal} height={80} tipo={Tipo.Pais} nuevoElemento={nuevoElemento}></Card>)
    
    const showModal = (modal: boolean) => {
        console.log(modal)
        setShow(modal);
    }
       
    const nuevoElemento = async (elemento: any) => {
        let result;
        if(elemento?.id! > 0){            
            result = await updatePais(elemento);
        }
        else{            
            result = await insertPais(elemento);
        }    
        if(result){
            window.location.reload();  
        }
    }

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-success"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoEarthOutline className="text-info mx-2"></IoEarthOutline> Países</h3>
            </div>
            <ModalBootstrap data={undefined} showModal={show} tipo={Tipo.Pais} nuevoElemento={nuevoElemento}></ModalBootstrap>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderPaises()}
        </div>
    </div>)
}