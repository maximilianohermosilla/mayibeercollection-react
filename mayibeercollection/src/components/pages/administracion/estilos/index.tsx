import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getEstilos } from "../../../../services/apiEstilo";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AdministracionEstilos() {
    const [Estilos, setEstilos] = useState<Pais[]>([]);

    const fetchEstilos = async () => {
        let lista: Pais[] = await getEstilos();
        setEstilos(lista);
    }

    useEffect(() => {
        fetchEstilos();
    }, []);
    console.log(Estilos);
    const renderEstilos = () => Estilos?.map((v, i) => <Card data={v} key={i} height={70}></Card>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0">Administración</h1>
                <h3 className="title text-warning px-3">Estilos</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success"><IoAddCircleOutline></IoAddCircleOutline> Agregar Estilo</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderEstilos()}
        </div>
    </div>)
}