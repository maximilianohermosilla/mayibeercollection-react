import { useEffect, useState } from "react";
import { Marca } from "../../../../interfaces/marca";
import { getMarcas } from "../../../../services/apiMarca";
import style from './style.module.css'
import Card from "../../../card";

export default function AdministracionMarcas() {
    const [Marcas, setMarcas] = useState<Marca[]>([]);

    const fetchMarcas = async () => {
        let lista: Marca[] = await getMarcas();
        setMarcas(lista);
    }

    useEffect(() => {
        fetchMarcas();
    }, []);
    console.log(Marcas);
    const renderMarcas = () => Marcas?.map((v, i) => <Card data={v} key={i}></Card>)

    return (<div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderMarcas()}
        </div>
    </div>)
}