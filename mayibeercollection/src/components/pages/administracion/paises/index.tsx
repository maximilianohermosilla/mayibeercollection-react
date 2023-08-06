import { useEffect, useState } from "react";
import { Pais } from "../../../../interfaces/pais";
import { getPaises } from "../../../../services/apiPais";
import CardPais from "../../../cardPais";
import style from './style.module.css'

export default function AdministracionPaises() {
    const [paises, setPaises] = useState<Pais[]>([]);

    const fetchPaises = async () => {
        let lista: Pais[] = await getPaises();
        setPaises(lista);
    }

    useEffect(() => {
        fetchPaises();
    }, []);
    console.log(paises);
    const renderPaises = () => paises?.map((v, i) => <CardPais data={v} key={i}></CardPais>)

    return (<div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderPaises()}
        </div>
    </div>)
}