import { useEffect, useState } from "react";
import { Cerveza } from "../../../../interfaces/cerveza";
import { getCervezas } from "../../../../services/apiCerveza";
import style from './style.module.css'
import Card from "../../../card";

export default function AdministracionCervezas() {
    const [Cervezas, setCervezas] = useState<Cerveza[]>([]);

    const fetchCervezas = async () => {
        let lista: Cerveza[] = await getCervezas(0,0,0,0,false);
        setCervezas(lista);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);
    console.log(Cervezas);
    const renderCervezas = () => Cervezas?.map((v, i) => <Card data={v} key={i}></Card>)

    return (<div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderCervezas()}
        </div>
    </div>)
}