import { useEffect, useState } from "react";
import { Cerveza } from "../../../interfaces/cerveza";
import { getCervezas } from "../../../services/apiCerveza";
import CardCerveza from "../../cardCerveza";
import style from './style.module.css'
import ModalCerveza from "../../modalCerveza";
import ModalCervezaABM from "../../modalCervezaABM";


export default function Cervezas() {
    const [cervezas, setCervezas] = useState<Cerveza[]>([]);
    const [cerveza, setCerveza] = useState<Cerveza>();
    const IdMarca: number = 0;
    const IdEstilo: number = 0;
    const IdCiudad: number = 0;
    const IdPais: number = 0;
    const fullresponse: boolean = true;

    const fetchCervezas = async () => {
        let listaCervezas: Cerveza[] = await getCervezas(IdMarca, IdEstilo, IdCiudad, IdPais, fullresponse);
        setCervezas(listaCervezas);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);

    onButtonAddClick(document.querySelectorAll(".imagenCerveza"));
    function onButtonAddClick(elements: any){
        elements.forEach((element: any) => {
            element.addEventListener('click', () =>{
                setCerveza(cervezas.find(c => c.id == element.id))
            })
        });
    }    

    const renderCervezas = () => cervezas?.map((v, i) => <CardCerveza data={v} key={i}></CardCerveza>)

    return (<div>
        <div className={style.divTitle}>
            <h1 className="title text-light p-3">Cervezas</h1>
        </div>
        <div className={`container-fluid text-light ${style.cervezasMain}`}>
            {renderCervezas()}
        </div>
        <ModalCerveza data={cerveza}></ModalCerveza>
        <ModalCervezaABM data={cerveza}></ModalCervezaABM>
    </div>)
}