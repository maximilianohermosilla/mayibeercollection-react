import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getEstilos } from "../../../../services/apiEstilo";
import style from './style.module.css'
import Card from "../../../card";

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
    const renderEstilos = () => Estilos?.map((v, i) => <Card data={v} key={i}></Card>)

    return (<div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderEstilos()}
        </div>
    </div>)
}