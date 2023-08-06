import { useEffect, useState } from "react";
import { Cerveza } from "../../interfaces/cerveza";
import { getCervezas } from "../../services/apiCerveza";
import CardCerveza from "../cardCerveza";
import style from './style.module.css'


export default function Cervezas() {
    const [cervezas, setCervezas] = useState<Cerveza[]>([]);
    const IdMarca: number = 0;
    const IdEstilo: number = 0;
    const IdCiudad: number = 0;
    const IdPais: number = 0;
    const fullresponse: boolean = true;

    const fetchCervezas = async () => {
        let listaCervezas: Cerveza[] = await getCervezas(IdMarca, IdEstilo, IdCiudad, IdPais, fullresponse);
        console.log(listaCervezas)

        setCervezas(listaCervezas);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);

    const renderCervezas = () => cervezas?.map((v, i) => <CardCerveza data={v} key={i}></CardCerveza>)

    return (<div>
        <div className={`container-fluid text-light ${style.cervezasMain}`}>
            {renderCervezas()}
        </div>
    </div>)
}