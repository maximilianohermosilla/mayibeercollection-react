import { useEffect, useState } from "react";
import { Ciudad } from "../../../../interfaces/ciudad";
import { getCiudades, insertCiudad, updateCiudad } from "../../../../services/apiCiudad";
import style from './style.module.css'
import Card from "../../../card";
import { IoBriefcaseOutline, IoBusinessOutline } from "react-icons/io5";
import { Tipo } from "../../../../interfaces/tipo";
import ModalBootstrap from "../../../modal";

export default function AdministracionCiudades() {
    const [Ciudades, setCiudades] = useState<Ciudad[]>([]);
    const [show, setShow] = useState<boolean>(false); 

    const fetchCiudades = async () => {
        let lista: Ciudad[] = await getCiudades();
        let listaMapeada = lista?.map(m => ({ id: m.id, nombre: m.nombre, imagen: m.pais?.imagen, idPais: m.idPais, nombrePais: m.pais?.nombre }));
        listaMapeada.sort((a, b) => a.idPais! - b.idPais!);
        setCiudades(listaMapeada);
    }

    useEffect(() => {
        fetchCiudades();
    }, []);
    
    const renderCiudades = () => Ciudades?.map((v, i) => <Card data={v} key={i} show={showModal} height={80} tipo={Tipo.Ciudad} nuevoElemento={nuevoElemento}></Card>)

    const showModal = (modal: boolean) => {
        console.log(modal)
        setShow(modal);
    }
       
    const nuevoElemento = async (elemento: any) => {
        let result;
        if(elemento?.id! > 0){            
            result = await updateCiudad(elemento);
        }
        else{            
            result = await insertCiudad(elemento);
        }
        if(result){
            window.location.reload();  
        }
    }

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoBusinessOutline className="text-success mx-2"></IoBusinessOutline> Ciudades</h3>
            </div>
            <ModalBootstrap data={undefined} showModal={show} tipo={Tipo.Ciudad} nuevoElemento={nuevoElemento}></ModalBootstrap>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderCiudades()}
        </div>
    </div>)
}