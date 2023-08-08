import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getEstilos } from "../../../../services/apiEstilo";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline, IoBriefcaseOutline, IoPintOutline } from "react-icons/io5";
import { Estilo } from "../../../../interfaces/estilo";

export default function AdministracionEstilos() {
    const [estilos, setEstilos] = useState<Estilo[]>([]);

    const fetchEstilos = async () => {
        let lista: Estilo[] = await getEstilos();
        setEstilos(lista);
    }

    useEffect(() => {
        fetchEstilos();
    }, []);
    
    const renderEstilos = () => estilos?.map((v, i) => <Card data={v} key={i} height={70}></Card>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-success px-3"><IoPintOutline className="text-warning mx-2"></IoPintOutline>Estilos</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success"><IoAddCircleOutline></IoAddCircleOutline> Agregar</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderEstilos()}
        </div>
    </div>)
}