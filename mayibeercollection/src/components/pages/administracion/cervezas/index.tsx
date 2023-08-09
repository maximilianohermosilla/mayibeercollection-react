import { useEffect, useState } from "react";
import { Cerveza } from "../../../../interfaces/cerveza";
import { getCervezas } from "../../../../services/apiCerveza";
import style from './style.module.css'
import Card from "../../../card";
import { IoAddCircleOutline, IoBriefcaseOutline, IoBeerOutline } from "react-icons/io5";

export default function AdministracionCervezas() {
    const [Cervezas, setCervezas] = useState<Cerveza[]>([]);
    const [show, setShow] = useState<boolean>(false); 

    const fetchCervezas = async () => {
        let lista: Cerveza[] = await getCervezas('0','0','0','0',false);
        setCervezas(lista);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);
    console.log(Cervezas);
    const renderCervezas = () => Cervezas?.map((v, i) => <Card data={v} key={i} show={showModal} height={100}></Card>)

    const showModal = () => {
        setShow(true);
    }

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-1 mb-0"><IoBriefcaseOutline className="text-info"></IoBriefcaseOutline> Administración</h1>
                <h3 className="title text-warning px-3"><IoBeerOutline className="text-warning mx-2"></IoBeerOutline> Cervezas</h3>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" className="btn btn-success">Agregar</button>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.grillaMain}`}>
            {renderCervezas()}
        </div>
    </div>)
}