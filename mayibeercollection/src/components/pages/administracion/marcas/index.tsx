import { useEffect, useState } from "react";
import { Marca } from "../../../../interfaces/marca";
import { getMarcas } from "../../../../services/apiMarca";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline, IoBriefcaseOutline, IoBagHandleOutline } from "react-icons/io5";

export default function AdministracionMarcas() {
    const [Marcas, setMarcas] = useState<Marca[]>([]);

    const fetchMarcas = async () => {
        let lista: Marca[] = await getMarcas();
        setMarcas(lista);
    }

    useEffect(() => {
        fetchMarcas();
    }, []);
    
    const renderMarcas = () => Marcas?.map((v, i) => <Card data={v} key={i} height={70}></Card>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoBagHandleOutline className="text-danger mx-2"></IoBagHandleOutline> Marcas</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success"><IoAddCircleOutline></IoAddCircleOutline> Agregar</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderMarcas()}
        </div>
    </div>)
}