import { useEffect, useState } from "react";
import { Cerveza } from "../../../interfaces/cerveza";
import { getCervezaById, getCervezas } from "../../../services/apiCerveza";
import CardCerveza from "../../cardCerveza";
import style from './style.module.css'
import ModalCerveza from "../../modalCerveza";
import ModalCervezaABM from "../../modalCervezaABM";
import { IoAddCircleOutline, IoBeerOutline } from "react-icons/io5";
import SelectListaPaises from "../../select/selectListaPaises";
import SelectListaCiudades from "../../select/selectListaCiudades";
import SelectListaMarcas from "../../select/selectListaMarcas";
import SelectListaEstilos from "../../select/selectListaEstilos";

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
        await setCervezas(listaCervezas);
    }

    const fetchCervezaById = async (id: number) => {
        let cervezaById: Cerveza = await getCervezaById(id, true);
        setCerveza(cervezaById);
    }

    useEffect(() => {
        fetchCervezas();
    }, []);

    onButtonAddClick(document.querySelectorAll(".imagenCerveza"));
    function onButtonAddClick(elements: any){
        elements.forEach((element: any) => {
            element.addEventListener('click', () =>{                
                fetchCervezaById(element.id);
                //setCerveza(cervezas.find(c => c.id == element.id))
            })
        });
    }    

    const agregarCerveza = (nuevaCerveza: Cerveza) => {
        console.log(nuevaCerveza);
        setCervezas([...cervezas, nuevaCerveza]);
    }

    const agregarNuevaCerveza = async () => {
        await setCerveza(undefined);
    }

    const renderCervezas = () => cervezas?.map((v, i) => <CardCerveza data={v} key={i}></CardCerveza>)

    return (<div>
        <div className={style.divTitle}>
            <div>
                <h1 className="title text-light px-3 pt-2 mb-0"><IoBeerOutline className="text-warning"></IoBeerOutline> Cervezas</h1>
            </div>
            <div className={style.divButtonAdd}>
                <button type="button" id="btnAgregarCerveza" className="btn btn-success"
                            data-bs-toggle="modal" data-bs-target="#modalCervezaABM"
                            onClick={agregarNuevaCerveza}><IoAddCircleOutline></IoAddCircleOutline> Agregar Cerveza</button>
            </div>
        </div>
        <div className="row container-fluid my-4 ml-1">
            <div className="col-6 col-sm-3">
                <label className="text-light">Marca</label>
                <SelectListaMarcas selectedOption={undefined}></SelectListaMarcas>                
            </div>
            <div className="col-6 col-sm-3">
                <label className="text-light">Estilo</label>
                <SelectListaEstilos selectedOption={undefined}></SelectListaEstilos>
            </div>
            <div className="col-6 col-sm-3">
                <label className="text-light">País</label>
                <SelectListaPaises selectedOption={undefined}></SelectListaPaises>
            </div>
            <div className="col-6 col-sm-3">
                <label className="text-light">Ciudad</label>
                <SelectListaCiudades selectedOption={undefined}></SelectListaCiudades>
            </div>
        </div>
        <div className={`container-fluid text-light ${style.cervezasMain}`}>
            {renderCervezas()}
        </div>
        <ModalCerveza data={cerveza}></ModalCerveza>
        <ModalCervezaABM data={cerveza} agregarCerveza={agregarCerveza}></ModalCervezaABM>        
        <ModalCervezaABM data={undefined} agregarCerveza={agregarCerveza}></ModalCervezaABM>
    </div>)
}