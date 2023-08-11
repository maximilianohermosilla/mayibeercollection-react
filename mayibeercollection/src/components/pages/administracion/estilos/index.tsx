import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getEstilos, insertEstilo, updateEstilo } from "../../../../services/apiEstilo";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline, IoBriefcaseOutline, IoPintOutline } from "react-icons/io5";
import { Estilo } from "../../../../interfaces/estilo";
import { Tipo } from "../../../../interfaces/tipo";
import ModalBootstrap from "../../../modal";

export default function AdministracionEstilos() {
    const [estilos, setEstilos] = useState<Estilo[]>([]);
    const [show, setShow] = useState<boolean>(false); 

    const fetchEstilos = async () => {
        let lista: Estilo[] = await getEstilos();
        setEstilos(lista);
    }

    useEffect(() => {
        fetchEstilos();
    }, []);
    
    const renderEstilos = () => estilos?.map((v, i) => <Card data={v} key={i} show={showModal} height={80} tipo={Tipo.Estilo} nuevoElemento={nuevoElemento}></Card>)

    
    const showModal = (modal: boolean) => {
        console.log(modal)
        setShow(modal);
    }
       
    const nuevoElemento = async (elemento: any) => {
        let result;
        if(elemento?.id! > 0){            
            result = await updateEstilo(elemento);
        }
        else{            
            result = await insertEstilo(elemento);
        }    
        if(result){
            window.location.reload();  
        }
    }

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-success px-3"><IoPintOutline className="text-warning mx-2"></IoPintOutline>Estilos</h3>
            </div>
            <ModalBootstrap data={undefined} showModal={show} tipo={Tipo.Estilo} nuevoElemento={nuevoElemento}></ModalBootstrap>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderEstilos()}
        </div>
    </div>)
}