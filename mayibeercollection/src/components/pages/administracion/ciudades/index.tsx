import { useEffect, useState } from "react";
import { Ciudad } from "../../../../interfaces/ciudad";
import { getCiudades } from "../../../../services/apiCiudad";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline, IoBriefcaseOutline, IoBusinessOutline } from "react-icons/io5";

export default function AdministracionCiudades() {
    const [Ciudades, setCiudades] = useState<Ciudad[]>([]);

    const fetchCiudades = async () => {
        let lista: Ciudad[] = await getCiudades();
        let listaMapeada = lista?.map(m => ({ id: m.id, nombre: m.nombre, imagen: m.pais?.imagen, idpais: m.idPais }));
        listaMapeada.sort((a, b) => a.idpais! - b.idpais!);
        setCiudades(listaMapeada);
    }

    useEffect(() => {
        fetchCiudades();
    }, []);
    console.log(Ciudades);
    const renderCiudades = () => Ciudades?.map((v, i) => <Card data={v} key={i} height={50}></Card>)

    

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoBusinessOutline className="text-success mx-2"></IoBusinessOutline> Ciudades</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success"><IoAddCircleOutline></IoAddCircleOutline> Agregar</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderCiudades()}
        </div>
    </div>)
}