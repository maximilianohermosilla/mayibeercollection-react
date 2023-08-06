import { useEffect, useState } from "react";
import { Ciudad } from "../../../../interfaces/ciudad";
import { getCiudades } from "../../../../services/apiCiudad";
import style from './style.module.css'
import Card from "../../../card";

export default function AdministracionCiudades() {
    const [Ciudades, setCiudades] = useState<Ciudad[]>([]);

    const fetchCiudades = async () => {
        let lista: Ciudad[] = await getCiudades();
        setCiudades(lista);
    }

    useEffect(() => {
        fetchCiudades();
    }, []);
    console.log(Ciudades);
    const renderCiudades = () => Ciudades?.map((v, i) => <Card data={v} key={i}></Card>)

    return (<div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderCiudades()}
        </div>
    </div>)
}