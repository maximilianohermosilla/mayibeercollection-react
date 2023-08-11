import { useEffect, useState } from "react";
import { Marca } from "../../../../interfaces/marca";
import { getMarcas, insertMarca, updateMarca } from "../../../../services/apiMarca";
import style from './style.module.css'
import Card from "../../../card";
import { IoBriefcaseOutline, IoBagHandleOutline } from "react-icons/io5";
import ModalBootstrap from "../../../modal";
import { Tipo } from "../../../../interfaces/tipo";

export default function AdministracionMarcas() {
    const [Marcas, setMarcas] = useState<Marca[]>([]);
    const [show, setShow] = useState<boolean>(false); 

    const fetchMarcas = async () => {
        let lista: Marca[] = await getMarcas();
        setMarcas(lista);
    }

    useEffect(() => {
        fetchMarcas();
    }, []);

    const showModal = (modal: boolean) => {
        console.log(modal)
        setShow(modal);
    }
       
    const nuevoElemento = async (elemento: any) => {
        let result;
        if(elemento?.id! > 0){            
            result = await updateMarca(elemento);
        }
        else{            
            result = await insertMarca(elemento);
        }    
        if(result){
            window.location.reload();  
        }
    }

    const renderMarcas = () => Marcas?.map((v, i) => <Card data={v} key={i} show={showModal} height={70} tipo={Tipo.Marca} nuevoElemento={nuevoElemento}></Card>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoBagHandleOutline className="text-danger mx-2"></IoBagHandleOutline> Marcas</h3>
            </div>
            <ModalBootstrap data={undefined} showModal={show} tipo={Tipo.Marca} nuevoElemento={nuevoElemento}></ModalBootstrap>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderMarcas()}
        </div>
    </div>)
}